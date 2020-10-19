import React, { PureComponent } from 'react';
import { withLocalize } from 'react-localize-redux';
import './style.scss';
import Table from '../../../../components/table';

const header = ['背番号', '選手', '試合', '完投', '当初', '完封', '無四球', '勝数', '負数',
  'セーブ', 'ホールド', 'HP', '勝率', '投球回', '打者', '打数', '被安打',
  '被本塁打', '与四球', '与死球', '奪三振', '暴投', 'ボーク', '失点', '自責点',
  '自責点', 'BB/9', 'K/9', 'K/BB', 'WHIP', '1軍復帰'];

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
      { text: '314' },
      { text: '314' },
      { text: '314' },
      { text: '314' },
      { text: '314' },
    ],
  },
];

class TeamPitcher extends PureComponent {
  render() {
    return (
      <div className="team-pitcher">
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

export default withLocalize(TeamPitcher);
