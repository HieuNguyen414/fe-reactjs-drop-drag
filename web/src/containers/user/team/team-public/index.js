import React, { Component } from 'react';
import './style.scss';
import { withLocalize } from 'react-localize-redux';
import Pagination from '../../../../components/pagination';
import Table from '../../../../components/table';

const header = ['公示日', 'チーム', 'ポジション | 背番号 | 選手名', '選手動向名'];
const dataPublic = [
  {
    item: [
      { text: '2019年4月19日(金)' },
      { text: '巨人', img: '/img/Giants.png' },
      { text: '63 増田 大輝', position: '内' },
      { text: '1軍登録' },
    ],
  },
  {
    item: [
      { text: '2019年4月19日(金)' },
      { text: '巨人', img: '/img/Giants.png' },
      { text: '63 増田 大輝', position: '内' },
      { text: '1軍登録' },
    ],
  },
  {
    item: [
      { text: '2019年4月19日(金)' },
      { text: '巨人', img: '/img/Giants.png' },
      { text: '63 増田 大輝', position: '内' },
      { text: '1軍登録' },
    ],
  },
  {
    item: [
      { text: '2019年4月19日(金)' },
      { text: '巨人', img: '/img/Giants.png' },
      { text: '63 増田 大輝', position: '内' },
      { text: '1軍登録' },
    ],
  },
  {
    item: [
      { text: '2019年4月19日(金)' },
      { text: '巨人', img: '/img/Giants.png' },
      { text: '63 増田 大輝', position: '内' },
      { text: '1軍登録' },
    ],
  },
  {
    item: [
      { text: '2019年4月19日(金)' },
      { text: '巨人', img: '/img/Giants.png' },
      { text: '63 増田 大輝', position: '内' },
      { text: '1軍登録' },
    ],
  },
  {
    item: [
      { text: '2019年4月19日(金)' },
      { text: '巨人', img: '/img/Giants.png' },
      { text: '63 増田 大輝', position: '内' },
      { text: '1軍登録' },
    ],
  },
  {
    item: [
      { text: '2019年4月19日(金)' },
      { text: '巨人', img: '/img/Giants.png' },
      { text: '63 増田 大輝', position: '内' },
      { text: '1軍登録' },
    ],
  },
  {
    item: [
      { text: '2019年4月19日(金)' },
      { text: '巨人', img: '/img/Giants.png' },
      { text: '63 増田 大輝', position: '内' },
      { text: '1軍登録' },
    ],
  },
];

class TeamPublic extends Component {
  render() {
    return (
      <div className="team-public">
        <div className="wrapper">
          <div className="block-control">
            <div className="block-control__left">
              <Pagination
                items={dataPublic}
                onChangePage={(e) => this.getItemsPage(e)}
                pageSize={2}
              />
            </div>
            <div className="block-control__right">
              <input type="date" defaultValue="2019-08-06" className="time-option" />
              <span>〜</span>
              <input type="date" defaultValue="2019-08-06" className="time-option" />
              <div className="block-button">
                <button type="button">CSVダウンロード</button>
              </div>
            </div>
          </div>
          <Table
            header={header}
            showCheckbox={false}
            showSearch={false}
            itemOfPage={dataPublic}
            isShowOptionTable={false}
          />
        </div>
      </div>
    );
  }
}

export default withLocalize(TeamPublic);
