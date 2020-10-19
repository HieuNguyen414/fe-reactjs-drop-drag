import React, { PureComponent } from 'react';
import { withLocalize } from 'react-localize-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Headers from './layout/header';
// import Table from '../containers/table';
import Register from '../containers/auth/register';
import ForgotPassword from '../containers/auth/forgot-password';
import Login from '../containers/auth/login';
// import PageError from './auth/page-error';
import Dashboard from '../containers/user/dashboard/dashboard';
import DashboardTeam from '../containers/user/dashboard/dashboard-team';
import DashboardTopic from '../containers/user/dashboard/dashboard-topic';
import LeftMenu from './layout/nav';
import './App.scss';
import AdminDelivery from '../containers/user/admin-delivery';
// import MatchSchedule from './team/team-report/fixed-report/match-schedule/match-schedule';
import AdminNews from '../containers/user/admin-news/index';
import OptionAdminNews from '../containers/user/admin-news/add-edit/index';
import AdminUser from '../containers/user/admin-user/index';
import Team from '../containers/user/team/index';
import AdminUserList from '../containers/user/admin-user-list';
import AdminCompany from '../containers/user/admin-company';
import LeaderBoard from '../containers/user/leader-board';
import Player from '../containers/user/player';
import MyTopic from '../containers/user/my-topic';
import Game from '../containers/user/game';
import AdminClient from '../containers/user/admin-client/index';
import PlaylogSearch from '../containers/user/playlog-search';
import Delivery from '../containers/user/delivery';
import News from '../containers/user/news';
import Home from '../containers/user/home';
import pageError from '../containers/auth/page-error';
import { getCookie } from '../common/enum';

// eslint-disable-next-line react/prop-types
const CheckLogin = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <Component {...props} />
    )}
  />
);

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ component: Component, ...rest }) => (
  localStorage.getItem('ACCESS_TOKEN') || getCookie('ACCESS_TOKEN') ? <Route
    {...rest}
    render={(props) => (
      <Component {...props} />
    )}
  /> : <Redirect to={{ pathname: '/login' }} />
);

class App extends PureComponent {

  render() {
    return (
      <Router>
        <div className="App">
          {/* <div className="app-left-menu">
            <Route component={LeftMenu} />
          </div> */}
          <div className="app-main">
            <div className="app-main-header">
              <Route component={Headers} />
            </div>
            <div className="app-main-content">
              <Switch>
                <CheckLogin path="/login" exact component={Login} />
                <PrivateRoute path="/dashboard" exact component={Dashboard} />
                <PrivateRoute path="/home" exact component={Home} />
                <PrivateRoute path="/dashboard-team" exact component={DashboardTeam} />
                <PrivateRoute path="/dashboard-topic" exact component={DashboardTopic} />
                <PrivateRoute path="/admin-delivery" exact component={AdminDelivery} />
                <PrivateRoute path="/delivery" exact component={Delivery} />
                <PrivateRoute path="/admin-news" exact component={AdminNews} />
                <PrivateRoute path="/admin-news/add" exact component={OptionAdminNews} />
                <PrivateRoute path="/admin-news/edit" exact component={OptionAdminNews} />
                <PrivateRoute path="/admin-user" exact component={AdminUser} />
                <PrivateRoute path="/admin-company" exact component={AdminCompany} />
                <PrivateRoute path="/admin-list-user" exact component={AdminUserList} />
                <PrivateRoute path="/leader-board" exact component={LeaderBoard} />
                <PrivateRoute path="/my-topic" exact component={MyTopic} />
                <PrivateRoute path="/game" exact component={Game} />
                <PrivateRoute path="/admin-client" exact component={AdminClient} />
                <PrivateRoute path="/register" exact component={Register} />
                <PrivateRoute path="/forgot-pass" exact component={ForgotPassword} />
                <PrivateRoute path="/team-report" component={Team} />
                <PrivateRoute path="/player" component={Player} />
                <PrivateRoute path="/playlog-search" component={PlaylogSearch} />
                <PrivateRoute path="/news" component={News} />
                <PrivateRoute path="/" exact component={Login} />
                <PrivateRoute path="*" exact component={pageError} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default withLocalize(App);
