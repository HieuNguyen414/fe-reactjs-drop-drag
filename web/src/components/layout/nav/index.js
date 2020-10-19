import React, { Component } from 'react';
import './styles.scss';
class LeftMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                { title: 'ダッシュボード', url: '/dashboard', icon: '/img/home.png', active: true },
                { title: 'リーダーボード', url: '/leader-board', icon: '/img/dashboard_24px.png', active: false },
                { title: 'My Topics', url: '/my-topic', icon: '/img/whatshot_24px.png', active: false },
                { title: 'Playlog Search', url: '/playlog-search', icon: '/img/search_24px.png', active: false },
                { title: '納品', url: '/delivery', icon: '/img/all_inbox_24px.png', active: false },
                { title: '顧客', url: '/admin-company', icon: '/img/assignment_ind_24px.png', active: false },
                { title: 'スタッフ', url: '/admin-user', icon: '/img/group_24px.png', active: false },
                { title: '納品', url: '/admin-delivery', icon: '/img/all_inbox_24px.png', active: false },
                { title: '配信', url: '/admin-news', icon: '/img/mail_24px.png', active: false }
            ]
        }
    }

    onActiveNav = (itemAll, item) => {
        const { history } = this.props;
        itemAll.forEach((i, k) => {
            i.active = false;
        })
        if (item.url) {
            item.active = true;
            history.push(`${item.url}`);
        }
    }

    findItemActive = (it) => {
        this.state.items.forEach(obj => {
            if (it.indexOf(obj.url) > -1) {
                obj.active = true;
            } else {
                obj.active = false;
            }
        });
    }

    UNSAFE_componentWillMount(){
        this.findItemActive(this.props.location.pathname);
    }

    UNSAFE_componentWillReceiveProps = (nextProps) => {
        this.findItemActive(nextProps.location.pathname);
    }

    render() {
        return (
            <div className="left-menu">
                {this.props.location.pathname === '/login'
                    || this.props.location.pathname === '/' ? '' :
                    <div className="left-menus">
                        <div className="content">
                            <img src="/img/logo-w.png" alt="" />
                        </div>

                        {this.state.items.map((value, key) => {
                            return (
                                <div key={key.toString()} className="content"
                                    onClick={() => this.onActiveNav(this.state.items, value)}>
                                    <div className={`item ${key === 4 ? 'notification' : ''} ${value.active === true ? 'active' : ''}`}>
                                        <div className="icon">
                                            <img src={value.icon} alt="" />
                                            {key === 4 ?
                                                <div className="ic-notification">12</div> : ''}
                                        </div>
                                        <p className="item-name">{value.title}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>}
            </div>
        )
    }
}

export default LeftMenu;