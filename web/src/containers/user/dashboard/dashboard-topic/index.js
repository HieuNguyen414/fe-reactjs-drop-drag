import React from 'react';
import './styles.scss';
import Table from '../../../../components/table';

const header = [
  'タイトル',
  'ワークスペース',
  'カテゴリー',
  '対象',
  '作成日時',
  '更新日時',
  '',
];

const table = [
  {
    item: [
      {
        text: 'Topicsタイトル',

      },
      {
        text: 'ワークスペース名',
      },
      {
        text: 'Game Topics',
      },
      {
        text: '8/3 巨人 - 中日',
      },
      {
        text: '2019/11/23 12:34',
      },
      {
        text: '2019/11/23 12:34',
      },
      {
        action: [
          'ワークスペースにコピー',
          '複製',
          '編集',
          '削除',
        ],
      },
    ],
  },
  {
    item: [
      {
        text: 'Topicsタイトル',
      },
      {
        text: 'ワークスペース名',
      },
      {
        text: 'Game Topics',
      },
      {
        text: '8/3 巨人 - 中日',
      },
      {
        text: '2019/11/23 12:34',
      },
      {
        text: '2019/11/23 12:34',
      },
      {
        action: [
          'ワークスペースにコピー',
          '複製',
          '編集',
          '削除',
        ],
      },
    ],
  },
  {
    item: [
      {
        text: 'Topicsタイトル',
      },
      {
        text: 'ワークスペース名',
      },
      {
        text: 'Game Topics',
      },
      {
        text: '8/3 巨人 - 中日',
      },
      {
        text: '2019/11/23 12:34',
      },
      {
        text: '2019/11/23 12:34',
      },
      {
        action: [
          'ワークスペースにコピー',
          '複製',
          '編集',
          '削除',
        ],
      },
    ],
  },
  {
    item: [
      {
        text: 'Topicsタイトル',
      },
      {
        text: 'ワークスペース名',
      },
      {
        text: 'Game Topics',
      },
      {
        text: '8/3 巨人 - 中日',
      },
      {
        text: '2019/11/23 12:34',
      },
      {
        text: '2019/11/23 12:34',
      },
      {
        action: [
          'ワークスペースにコピー',
          '複製',
          '編集',
          '削除',
        ],
      },
    ],
  },
  {
    item: [
      {
        text: 'Topicsタイトル',
      },
      {
        text: 'ワークスペース名',
      },
      {
        text: 'Game Topics',
      },
      {
        text: '8/3 巨人 - 中日',
      },
      {
        text: '2019/11/23 12:34',
      },
      {
        text: '2019/11/23 12:34',
      },
      {
        action: [
          'ワークスペースにコピー',
          '複製',
          '編集',
          '削除',
        ],
      },
    ],
  },
];


// const titleTable1 = {
//     dot: true,
//     text: 'セ・リーグ',
//     background: 'green-dot',
//     pl : ''
// }
// const titleTable2 = {
//     dot: true,
//     text: 'パ・リーグ',
//     background: 'blue-dot',
//     pl : ''
// }
// const titleTable3 = {
//     dot: true,
//     text: 'セ・リーグ',
//     background: 'green-dot',
//     pl: 'pl-16 '
// }
// const titleTable4 = {
//     dot: true,
//     text: 'パ・リーグ',
//     background: 'blue-dot',
//     pl: 'pl-16'
// }
// const titleTable5 = {
//     dot: false,
//     text: '交流戦',
//     background: 'green-dot',
//     pl: 'pl-16'
// }
class DashboardTopic extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      selectedDate: '2019/8/6',
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(date) {
    this.setState({
      // eslint-disable-next-line react/no-unused-state
      selectedDate: date,
    });
  }

  render() {
    return (
      <div className="wrap-dashboard-topic">
        <div className="title--dashboard d-flex justify-content-between">
          <h1>My Topics</h1>
          <div className="title--dashboard-right d-flex align-items-center">
            <div className="search-topic">
              <input placeholder="検索" />
            </div>
            <div className="add-topic">
              <button type="button" className="btn">Topicsを作成</button>
            </div>
          </div>
        </div>

        <div className="body--tables">
          <div className="wrap-table-topic ">
            <Table
              header={header}
              showCheckbox={false}
              showSearch={false}
              itemOfPage={table}
              isShowOptionTable={false}
            />
          </div>

        </div>
      </div>
    );
  }
}
export default DashboardTopic;
