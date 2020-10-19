import React, { PureComponent } from 'react';
import { withLocalize } from 'react-localize-redux';
import './style.scss';
import MatchSchedule from './match-schedule/index';
import LineChart from './chart/index';
import Batter from './batter/index';
import Pitcher from './pitcher/index';
import Appointment from './appointment/index';

class TeamReport extends PureComponent {
  render() {
    return (
      <div className="block-content">
        <MatchSchedule />
        <LineChart />
        <Batter />
        <Pitcher />
        <Appointment />
      </div>
    );
  }
}

export default withLocalize(TeamReport);
