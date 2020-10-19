import React, { PureComponent } from 'react';
import { withLocalize } from 'react-localize-redux';
import './style.scss';

class MatchSchedule extends PureComponent {
  render() {
    // const { translate } = this.props;
    return (
      <div className="match-schedule">
        <h3 className="title">1週間の対戦スケジュール</h3>

        <table className="table">
          <thead>
            <tr>
              <th>8/2</th>
              <th>8/3</th>
              <th>8/4</th>
              <th>8/5</th>
              <th>8/6</th>
              <th>8/7</th>
              <th>8/8</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div>
                  <img src="img/Carp.png" alt="alt text" />
                  <span>広島カープ</span>
                </div>
                <input type="text" className="" placeholder="菅野 智之" />
              </td>
              <td>
                <div>
                  <img src="img/Carp.png" alt="alt text" />
                  <span>広島カープ</span>
                </div>
                <input type="text" className="" placeholder="菅野 智之" />
              </td>
              <td><p>試合なし</p></td>
              <td>
                <div>
                  <img src="img/Carp.png" alt="alt text" />
                  <span>広島カープ</span>
                </div>
                <input type="text" className="" placeholder="菅野 智之" />
              </td>
              <td>
                <div>
                  <img src="img/Carp.png" alt="alt text" />
                  <span>広島カープ</span>
                </div>
                <input type="text" className="" placeholder="菅野 智之" />
              </td>
              <td>
                <div>
                  <img src="img/Carp.png" alt="alt text" />
                  <span>広島カープ</span>
                </div>
                <input type="text" className="" placeholder="菅野 智之" />
              </td>
              <td><p>試合なし</p></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default withLocalize(MatchSchedule);
