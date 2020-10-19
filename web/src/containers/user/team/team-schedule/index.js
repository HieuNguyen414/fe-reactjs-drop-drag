import React, { PureComponent } from 'react';
import './style.scss';
import { withLocalize } from 'react-localize-redux';
import Table from '../../../../components/table';

const header = ['試合日', '開始時間/スコア', '球場', '勝利投手', 'セーブ投手', '敗戦投手', '観衆'];

const dataSchedule = [
  {
    item: [
      { text: '4/19(金)' },
      { text: 'G 5 - 2 T' },
      { text: '東京ドーム' },
      { text: '山口　俊' },
      { text: 'デラロサ' },
      { text: '西 勇輝' },
      { text: '45,277' },
    ],
  },
  {
    item: [
      { text: '4/19(金)' },
      { text: 'G 5 - 2 T' },
      { text: '東京ドーム' },
      { text: '' },
      { text: '' },
      { text: '' },
      { text: '' },
    ],
  },
  {
    item: [
      { text: '4/19(金)' },
      { text: 'G 5 - 2 T' },
      { text: '東京ドーム' },
      { text: '' },
      { text: '' },
      { text: '' },
      { text: '' },
    ],
  },
];

class TeamSchedule extends PureComponent {
  render() {
    return (
      <div className="team-schedule">
        <div className="wrapper">
          <div className="block-control">
            <select className="form-control">
              <option>2019</option>
              <option>2018</option>
              <option>2017</option>
              <option>2016</option>
            </select>
            <div className="block-control__button">
              <button type="button" className="btn-radius active">3月</button>
              <button type="button" className="btn-radius">4月</button>
              <button type="button" className="btn-radius">5月</button>
              <button type="button" className="btn-radius">6月</button>
              <button type="button" className="btn-radius">7月</button>
              <button type="button" className="btn-radius">8月</button>
              <button type="button" className="btn-radius">9月</button>
              <button type="button" className="btn-radius">10月</button>
              <button type="button" className="btn-radius">11月</button>
            </div>
          </div>
          <Table
            header={header}
            showCheckbox={false}
            showSearch={false}
            itemOfPage={dataSchedule}
            isShowOptionTable={false}
          />
        </div>
      </div>
    );
  }
}

export default withLocalize(TeamSchedule);
