import React, { Component } from 'react';
import './styles.scss';
import { withRouter } from 'react-router-dom';
import { withLocalize } from 'react-localize-redux';
import SearchAutoComplete from '../../search-autocomplete';

class Headers extends Component {

  constructor(props) {
    super(props);
    this.state = {
      langs: localStorage.getItem('SET_LANG'),
      isLogin: localStorage.getItem('TOKEN'),
      showDropdown: false,
    };
  }

  UNSAFE_componentWillReceiveProps(next) {
    this.setState({
      // langs: next.activeLanguage.code,
      isLogin: localStorage.getItem('TOKEN'),
    });
  }

  // setLang(ev) {
  //   localStorage.setItem('SET_LANG', ev);
  //   this.props.setActiveLanguage(ev);
  // }

  logOut = () => {
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('REFRESH_TOKEN');
    document.cookie = `ACCESS_TOKEN=`
    document.cookie = `REFRESH_TOKEN=`
    this.props.history.push('/login');
  }

  onChange = (ev) => {
    ev ? this.setState({ showDropdown: true }) : this.setState({ showDropdown: false });
  }

  render() {
    return (
      <div>
        {
          this.props.location.pathname === '/login'
            || this.props.location.pathname === '/' ? '' :
            <nav className="nav" >
              <div>
                <SearchAutoComplete showDropdown={this.state.showDropdown} onChange={this.onChange} />
              </div>
              <ul>
                <li>
                  <span className="date">Notification</span>
                  <div className="notification">
                    <div className="items">
                      <img src="/img/notification_24px.png" alt="" />
                      <div className="ic_notification">12</div>
                    </div>
                  </div>
                  <div className="logout">
                    <img src="/img/exit_to_app_24px.png" alt="" />
                    <span onClick={this.logOut} className="text-logout">Logout</span>
                  </div>
                </li>
              </ul>
            </nav >}
      </div>);
  }
}

export default withRouter(withLocalize(Headers));
