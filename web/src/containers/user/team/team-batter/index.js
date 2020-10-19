import React, { PureComponent} from 'react';
import { withLocalize } from 'react-localize-redux';
import './style.scss';
import Table from '../../../../components/table';

const header = ['背番号', '選手', '選手', '打席', '打数', '得点', '安打', '二塁打', '三塁打',
  '本塁打', '塁打', '打点', '三振', '四球', '敬遠', '死球', '犠打',
  '犠飛', '盗塁', '盗塁刺', '併殺打', '失策', '打率', '長打率', '出塁率', 'OPS'];

const mockDataPitchingTable = [
  {
    item: [
      { text: 1 },
      { text: '坂本 勇人' },
      { text: '314' },
      { text: '314' },
      { text: '314' },
      { text: '314' },
      { text: '314' },
      { text: '314' },
      { text: '314' },
      { text: '314' },
      { text: '314' },
      { text: '314' },
      { text: '314' },
      { text: '314' },
      { text: '314' },
      { text: '314' },
      { text: '314' },
      { text: '314' },
      { text: '314' },
      { text: '314' },
      { text: '314' },
      { text: '314' },
      { text: '314' },
      { text: '314' },
      { text: '314' },
      { text: '314' },
    ],
  },
];

class TeamBatter extends PureComponent {
  render() {
    return (
      <div className="team-batter">
        <div className="wrapper">
          <div className="block-button">
            <button type="button">CSVダウンロード</button>
          </div>
          <Table
            header={header}
            showCheckbox={false}
            showSearch={false}
            itemOfPage={mockDataPitchingTable}
            isShowOptionTable={false}
          />
        </div>
      </div>
    );
  }
}

export default withLocalize(TeamBatter);
