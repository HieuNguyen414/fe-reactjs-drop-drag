import React, { PureComponent } from 'react';
import './style.scss';
import { withLocalize } from 'react-localize-redux';
import Table from '../../../../../components/table';

const headerBattingAvgTable  = ['順位', '選手名', '打率'];
const titleBattingAvgTable = {
  dot: false,
  text: '打率',
};
const mockDataBattingAvgTable = [
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

const headerHomeRunTable = ['順位', '選手名', '本塁打数']
const titleHomeRunTable = {
  dot: false,
  text: '本塁打',
};
const mockDataHomeRunTable = [
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
  {
    item: [
      { text: 3 },
      { text: '坂本 勇人', img: 'img/Giants.png' },
      { text: '.314' },
    ],
  },
];

const headerRBITable = ['順位', '選手名', '打点']
const titleRBITable = {
  dot: false,
  text: '打点',
};
const mockDataRBITable = [
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

const headerStealTable = ['順位', '選手名', '盗塁']
const titleStealTable = {
  dot: false,
  text: '盗塁',
};
const mockDataStealTable = [
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

class Batter extends PureComponent {
  render() {
    return (
      <div className="batter">
        <h3 className="batter-title">打者TOP3</h3>
        <div className="grid">
          <div className="batter-block">
            <Table
              header={headerBattingAvgTable}
              showCheckbox={false}
              showSearch={false}
              itemOfPage={mockDataBattingAvgTable}
              isShowOptionTable={false}
              titleTable={titleBattingAvgTable}
            />
          </div>
          <div className="batter-block">
            <Table
              header={headerHomeRunTable}
              showCheckbox={false}
              showSearch={false}
              itemOfPage={mockDataHomeRunTable}
              isShowOptionTable={false}
              titleTable={titleHomeRunTable}
            />
          </div>
          <div className="batter-block">
            <Table
              header={headerRBITable}
              showCheckbox={false}
              showSearch={false}
              itemOfPage={mockDataRBITable}
              isShowOptionTable={false}
              titleTable={titleRBITable}
            />
          </div>
          <div className="batter-block">
            <Table
              header={headerStealTable}
              showCheckbox={false}
              showSearch={false}
              itemOfPage={mockDataStealTable}
              isShowOptionTable={false}
              titleTable={titleStealTable}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withLocalize(Batter);
