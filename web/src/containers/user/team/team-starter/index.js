import React, { PureComponent } from 'react';
import { withLocalize } from 'react-localize-redux';
import Table from '../../../../components/table';
import './style.scss';

const boardItems = [
  {
    subText: '順位',
    mainText: '1',
  },
  {
    subText: '勝数',
    mainText: '77',
  },
  {
    subText: '負数',
    mainText: '64',
  },
  {
    subText: '引分数',
    mainText: '2',
  },
  {
    subText: '勝率',
    mainText: '.546',
  },
  {
    subText: '監督',
    mainText: '原 辰徳',
  },
];

const header1 = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const dataTable1 = [
  {
    item: [
      { text: '亀井', position: '右' },
      { text: '坂本勇', position: '遊' },
      { text: '丸', position: '中' },
      { text: '岡本', position: '三' },
      { text: '阿部', position: '一' },
      { text: 'ゲレーロ', position: '左' },
      { text: '田中俊', position: '二' },
      { text: '小林', position: '捕' },
      { text: '山口', position: '投' },
    ],
  },
];

const header2 = ['投手', '代打・代走・守備', '相手先発投手'];
const dataTable2 = [
  {
    item: [
      { text: '山口・中川・デラロサ・田口', position: '右' },
      { text: '若林', position: '守' },
      { text: '望月', position: '捕' },
    ],
  },
];

class TeamStarter extends PureComponent {
  render() {
    return (
      <div className="team-starter">
        <section className="block-control">
          <div className="head--tables-right">
            <select className="form-control">
              <option>2019</option>
              <option>2018</option>
              <option>2017</option>
              <option>2016</option>
            </select>
          </div>
          <div className="block-button">
            <button type="button">CSVダウンロード</button>
          </div>
        </section>
        <section className="block-board">
          {boardItems.map((item, index) => (
            <div className="block-board__item" key={index.toString()}>
              <span className="sub-text">{item.subText}</span>
              <span className="main-text">{item.mainText}</span>
            </div>
          ))}
        </section>
        <section className="block-content">
          <div className="control">
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

          <p className="title-table">10/9 (水)</p>
          <Table
            header={header1}
            showCheckbox={false}
            showSearch={false}
            itemOfPage={dataTable1}
            isShowOptionTable={false}
          />
          <p className="title-table">10/9 (水)</p>
          <Table
            header={header2}
            showCheckbox={false}
            showSearch={false}
            itemOfPage={dataTable2}
            isShowOptionTable={false}
          />

          <p className="title-table">10/9 (水)</p>
          <Table
            header={header1}
            showCheckbox={false}
            showSearch={false}
            itemOfPage={dataTable1}
            isShowOptionTable={false}
          />
          <p className="title-table">10/9 (水)</p>
          <Table
            header={header2}
            showCheckbox={false}
            showSearch={false}
            itemOfPage={dataTable2}
            isShowOptionTable={false}
          />

        </section>
      </div>
    );
  }
}

export default withLocalize(TeamStarter);
