import React, { PureComponent } from 'react';
import './style.scss';
import { withLocalize } from 'react-localize-redux';
import Table from '../../../../../components/table';

const header = ['順位', '選手名', '打率'];

const titleSlapTable = {
  dot: false,
  text: '代打',
};
const mockDataSlapTable = [
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

const titleSprintTable = {
  dot: false,
  text: '代走',
};
const mockDataSprintTable = [
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

const titleRescueTable = {
  dot: false,
  text: '救援',
};
const mockDataRescueTable = [
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

class Appointment extends PureComponent {
  render() {
    return (
      <div className="appoint">
        <h3 className="appoint-title">起用TOP3</h3>
        <div className="grid">
          <div className="appoint-block">
            <Table
              header={header}
              showCheckbox={false}
              showSearch={false}
              itemOfPage={mockDataSlapTable}
              isShowOptionTable={false}
              titleTable={titleSlapTable}
            />
          </div>
          <div className="appoint-block">
            <Table
              header={header}
              showCheckbox={false}
              showSearch={false}
              itemOfPage={mockDataSprintTable}
              isShowOptionTable={false}
              titleTable={titleSprintTable}
            />
          </div>
          <div className="appoint-block">
            <Table
              header={header}
              showCheckbox={false}
              showSearch={false}
              itemOfPage={mockDataRescueTable}
              isShowOptionTable={false}
              titleTable={titleRescueTable}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withLocalize(Appointment);
