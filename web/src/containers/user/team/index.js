import React, { PureComponent } from 'react';
import { withLocalize } from 'react-localize-redux';
import { Route, Switch } from 'react-router-dom';
import TeamReport from './team-report/index';
import TeamPitcher from './team-pitcher/index';
import TeamBatter from './team-batter/index';
import './style.scss';
import TeamStarter from './team-starter';
import Tab from './tab/index';
import TeamSchedule from './team-schedule';
import TeamPublic from './team-public/index';
import TeamAddTopic from './team-add-topic/index';
import TeamUserTopic from './team-user-topic';

class Team extends PureComponent {
  render() {
    return (
      <div className="team">
        <div className="block-title">
          <img className="block-title__text--sub" src="/img/Giants.png" alt="Alt text" />
          <h2 className="block-title__text--main">読売ジャイアンツ</h2>
        </div>

        <Tab />

        <Switch>
          <Route path="/team-report" exact component={TeamReport} />
          <Route path="/team-report/pitcher" component={TeamPitcher} />
          <Route path="/team-report/batter" component={TeamBatter} />
          <Route path="/team-report/starter" component={TeamStarter} />
          <Route path="/team-report/schedule" component={TeamSchedule} />
          <Route path="/team-report/public" component={TeamPublic} />
          <Route path="/team-report/user-topic" component={TeamUserTopic} />
          <Route path="/team-report/add-topic" component={TeamAddTopic} />
        </Switch>
      </div>
    );
  }
}

export default withLocalize(Team);
