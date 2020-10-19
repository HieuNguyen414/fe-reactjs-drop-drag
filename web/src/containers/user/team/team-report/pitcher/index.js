import React, { PureComponent } from 'react';
import './style.scss';
import { withLocalize } from 'react-localize-redux';
import Table from '../../../../../components/table';

const headerERATable = ['順位', '選手名', '防御率'];
const titleERATable = {
  dot: false,
  text: '防御率',
};
const mockDataERATable = [
  {
    item: [
      { text: 1 },
      { text: '坂本 勇人', img: 'img/Giants.png' },
      { text: '.314' },
    ],
  },
  {
    item: [
      { text: 2 },
      { text: '坂本 勇人', img: 'img/Giants.png' },
      { text: '.314' },
    ],
  },
  {
    item: [
      { text: 3 },
      { text: '坂本 勇人', img: 'img/Giants.png' },
      { text: '.314' },
    ],
  },
];

const headerVictoryTable = ['順位', '選手名', '勝利'];
const titleVictoryTable = {
  dot: false,
  text: '勝利',
};
const mockDataVictoryTable = [
  {
    item: [
      { text: 1 },
      { text: '坂本 勇人', img: 'img/Giants.png' },
      { text: '.314' },
    ],
  },
  {
    item: [
      { text: 2 },
      { text: '坂本 勇人', img: 'img/Giants.png' },
      { text: '.314' },
    ],
  },
  {
    item: [
      { text: 3 },
      { text: '坂本 勇人', img: 'img/Giants.png' },
      { text: '.314' },
    ],
  },
];

const headerStrikeoutTable = ['順位', '選手名', '奪三振'];
const titleStrikeoutTable = {
  dot: false,
  text: '奪三振',
};
const mockDataStrikeoutTable = [
  {
    item: [
      { text: 1 },
      { text: '坂本 勇人', img: 'img/Giants.png' },
      { text: '.314' },
    ],
  },
  {
    item: [
      { text: 2 },
      { text: '坂本 勇人', img: 'img/Giants.png' },
      { text: '.314' },
    ],
  },
  {
    item: [
      { text: 3 },
      { text: '坂本 勇人', img: 'img/Giants.png' },
      { text: '.314' },
    ],
  },
];

const headerPitchingTable = ['順位', '選手名', '登板'];
const titlePitchingTable = {
  dot: false,
  text: '登板',
};
const mockDataPitchingTable = [
  {
    item: [
      { text: 1 },
      { text: '坂本 勇人', img: 'img/Giants.png' },
      { text: '.314' },
    ],
  },
  {
    item: [
      { text: 2 },
      { text: '坂本 勇人', img: 'img/Giants.png' },
      { text: '.314' },
    ],
  },
  {
    item: [
      { text: 3 },
      { text: '坂本 勇人', img: 'img/Giants.png' },
      { text: '.314' },
    ],
  },
];

class Pitcher extends PureComponent {
  render() {
    return (
      <div className="pitcher">
        <h3 className="pitcher-title">投手TOP3</h3>
        <div className="grid">
          <div className="pitcher-block">
            <Table
              header={headerERATable}
              showCheckbox={false}
              showSearch={false}
              itemOfPage={mockDataERATable}
              isShowOptionTable={false}
              titleTable={titleERATable}
            />
          </div>
          <div className="pitcher-block">
            <Table
              header={headerVictoryTable}
              showCheckbox={false}
              showSearch={false}
              itemOfPage={mockDataVictoryTable}
              isShowOptionTable={false}
              titleTable={titleVictoryTable}
            />
          </div>
          <div className="pitcher-block">
            <Table
              header={headerStrikeoutTable}
              showCheckbox={false}
              showSearch={false}
              itemOfPage={mockDataStrikeoutTable}
              isShowOptionTable={false}
              titleTable={titleStrikeoutTable}
            />
          </div>
          <div className="pitcher-block">
            <Table
              header={headerPitchingTable}
              showCheckbox={false}
              showSearch={false}
              itemOfPage={mockDataPitchingTable}
              isShowOptionTable={false}
              titleTable={titlePitchingTable}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withLocalize(Pitcher);
