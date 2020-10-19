import React from 'react';
import './styles.scss';
import Table from '../../../../components/table';

// const header = [
//     '月',
//     '火',
//     '水',
//     '木',
//     '金',
//     '土',
//     '日',
// ]

const header2 = [
  '順位',
  'チーム',
  '試合',
  '勝',
  '負',
  '分',
  '勝率',
  'ゲーム差',
];

// const table = [
//     {
//         item : [
//             {

//             },
//             {

//             },
//             {

//             },
//             {

//             },
//             {
//                 text:{
//                     name : "X-X ヤクルト",
//                     action : "先発投手"
//                 },
//                 link: true
//             },
//             {
//                 text:{
//                     name : "X-X ヤクルト",
//                     action : "先発投手"
//                 },
//                 link: true
//             },
//             {
//                 text:{
//                     name : "X-X ヤクルト",
//                     action : "先発投手"
//                 },
//                 link: true
//             },
//         ]
//     },
//     {
//         item : [
//             {

//             },
//             {

//             },
//             {

//             },
//             {
//                 text:{
//                     name : "X-X ヤクルト",
//                     action : "先発投手"
//                 }
//             },
//             {
//                 text:{
//                     name : "X-X ヤクルト",
//                     action : "先発投手"
//                 }
//             },
//             {
//                 text:{
//                     name : "X-X ヤクルト",
//                     action : "先発投手"
//                 }
//             },
//             {
//                 text:{
//                     name : "X-X ヤクルト",
//                     action : "先発投手"
//                 }
//             },
//         ]
//     },
//     {
//         item : [
//             {

//             },
//             {
//                 text:{
//                     name : "X-X ヤクルト",
//                     action : "先発投手"
//                 }
//             },
//             {

//             },
//             {
//             },
//             {
//             },
//             {
//             },
//             {
//             },
//         ]
//     },
//     {
//         item : [
//             {

//             },
//             {
//                 text:{
//                     name : "X-X ヤクルト",
//                     action : "先発投手"
//                 }
//             },
//             {

//             },
//             {
//             },
//             {
//             },
//             {
//             },
//             {
//             },
//         ]
//     }
// ]


const table2 = [
  {
    item: [
      {
        text: '1',
      },
      {
        text: '巨人',
        img: '/img/Giants.png',
      },
      {
        text: '143',
      },
      {
        text: '77',
      },
      {
        text: '64',
      },
      {
        text: '2',
      },
      {
        text: '.546',
      },
      {
        text: '優勝',
      },
    ],
  },
  {
    item: [
      {
        text: '2',
      },
      {
        text: '巨人',
        img: '/img/TIgers.png',
      },
      {
        text: '143',
      },
      {
        text: '77',
      },
      {
        text: '64',
      },
      {
        text: '2',
      },
      {
        text: '.546',
      },
      {
        text: '優勝',
      },
    ],
  },
  {
    item: [
      {
        text: '3',
      },
      {
        text: '巨人',
        img: '/img/Marines.png',
      },
      {
        text: '143',
      },
      {
        text: '77',
      },
      {
        text: '64',
      },
      {
        text: '2',
      },
      {
        text: '.546',
      },
      {
        text: '優勝',
      },
    ],
  },
  {
    item: [
      {
        text: '4',
      },
      {
        text: '巨人',
        img: '/img/Lions.png',
      },
      {
        text: '143',
      },
      {
        text: '77',
      },
      {
        text: '64',
      },
      {
        text: '2',
      },
      {
        text: '.546',
      },
      {
        text: '優勝',
      },
    ],
  },
  {
    item: [
      {
        text: '5',
      },
      {
        text: '巨人',
        img: '/img/Hawks.png',
      },
      {
        text: '143',
      },
      {
        text: '77',
      },
      {
        text: '64',
      },
      {
        text: '2',
      },
      {
        text: '.546',
      },
      {
        text: '優勝',
      },
    ],
  },
  {
    item: [
      {
        text: '6',
      },
      {
        text: '巨人',
        img: '/img/TIgers.png',
      },
      {
        text: '143',
      },
      {
        text: '77',
      },
      {
        text: '64',
      },
      {
        text: '2',
      },
      {
        text: '.546',
      },
      {
        text: '優勝',
      },
    ],
  },
];

const table3 = [
  {
    item: [
      {
        text: '1',
      },
      {
        text: '巨人',
        img: '/img/TIgers.png',
      },
      {
        text: '143',
      },
      {
        text: '77',
      },
      {
        text: '64',
      },
      {
        text: '2',
      },
      {
        text: '.546',
      },
      {
        text: '優勝',
      },
    ],
  },
  {
    item: [
      {
        text: '2',
      },
      {
        text: '巨人',
        img: '/img/Marines.png',
      },
      {
        text: '143',
      },
      {
        text: '77',
      },
      {
        text: '64',
      },
      {
        text: '2',
      },
      {
        text: '.546',
      },
      {
        text: '優勝',
      },
    ],
  },
  {
    item: [
      {
        text: '3',
      },
      {
        text: '巨人',
        img: '/img/Lions.png',
      },
      {
        text: '143',
      },
      {
        text: '77',
      },
      {
        text: '64',
      },
      {
        text: '2',
      },
      {
        text: '.546',
      },
      {
        text: '優勝',
      },
    ],
  },
  {
    item: [
      {
        text: '4',
      },
      {
        text: '巨人',
        img: '/img/Hawks.png',
      },
      {
        text: '143',
      },
      {
        text: '77',
      },
      {
        text: '64',
      },
      {
        text: '2',
      },
      {
        text: '.546',
      },
      {
        text: '優勝',
      },
    ],
  },
  {
    item: [
      {
        text: '5',
      },
      {
        text: '巨人',
        img: '/img/TIgers.png',
      },
      {
        text: '143',
      },
      {
        text: '77',
      },
      {
        text: '64',
      },
      {
        text: '2',
      },
      {
        text: '.546',
      },
      {
        text: '優勝',
      },
    ],
  },
  {
    item: [
      {
        text: '6',
      },
      {
        text: '巨人',
        img: '/img/Marines.png',
      },
      {
        text: '143',
      },
      {
        text: '77',
      },
      {
        text: '64',
      },
      {
        text: '2',
      },
      {
        text: '.546',
      },
      {
        text: '優勝',
      },
    ],
  },
  {
    item: [
      {
        text: '7',
      },
      {
        text: '巨人',
        img: '/img/Lions.png',
      },
      {
        text: '143',
      },
      {
        text: '77',
      },
      {
        text: '64',
      },
      {
        text: '2',
      },
      {
        text: '.546',
      },
      {
        text: '優勝',
      },
    ],
  },
  {
    item: [
      {
        text: '8',
      },
      {
        text: '巨人',
        img: '/img/Hawks.png',
      },
      {
        text: '143',
      },
      {
        text: '77',
      },
      {
        text: '64',
      },
      {
        text: '2',
      },
      {
        text: '.546',
      },
      {
        text: '優勝',
      },
    ],
  },
  {
    item: [
      {
        text: '9',
      },
      {
        text: '巨人',
        img: '/img/Marines.png',
      },
      {
        text: '143',
      },
      {
        text: '77',
      },
      {
        text: '64',
      },
      {
        text: '2',
      },
      {
        text: '.546',
      },
      {
        text: '優勝',
      },
    ],
  },
  {
    item: [
      {
        text: '10',
      },
      {
        text: '巨人',
        img: '/img/Lions.png',
      },
      {
        text: '143',
      },
      {
        text: '77',
      },
      {
        text: '64',
      },
      {
        text: '2',
      },
      {
        text: '.546',
      },
      {
        text: '優勝',
      },
    ],
  },
  {
    item: [
      {
        text: '11',
      },
      {
        text: '巨人',
        img: '/img/TIgers.png',
      },
      {
        text: '143',
      },
      {
        text: '77',
      },
      {
        text: '64',
      },
      {
        text: '2',
      },
      {
        text: '.546',
      },
      {
        text: '優勝',
      },
    ],
  },
  {
    item: [
      {
        text: '12',
      },
      {
        text: '巨人',
        img: '/img/Hawks.png',
      },
      {
        text: '143',
      },
      {
        text: '77',
      },
      {
        text: '64',
      },
      {
        text: '2',
      },
      {
        text: '.546',
      },
      {
        text: '優勝',
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
const titleTable3 = {
  dot: true,
  text: 'セ・リーグ',
  background: 'green-dot',
  pl: 'pl-16 ',
};
const titleTable4 = {
  dot: true,
  text: 'パ・リーグ',
  background: 'blue-dot',
  pl: 'pl-16',
};
const titleTable5 = {
  dot: false,
  text: '交流戦',
  background: 'green-dot',
  pl: 'pl-16',
};
class DashboardTeam extends React.Component {
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
      <>
        <div className="wrap-dashboard-team">
          <h1 className="title-dashboard">ダッシュボード</h1>
          <div className="notice d-flex">
            <img alt="notice" className="img-notice" src="/img/notice.png" />
            <p className="text-white">お知らせ</p>
          </div>
          <div className="body-dashboard">
            <div className="head--tables d-flex justify-content-between">
              <div className="head--tables-left d-flex align-items-center">
                <span>巨人 8月のスケジュール</span>
                <button type="button">前月</button>
                <button type="button">今月</button>
                <button type="button">次月</button>
              </div>
              <div className="head--tables-right">
                <select className="form-control">
                  <option>巨人</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
            </div>

            <div className="body--tables">
              <div className="table-top">
                <div id="caleandar">
                  <div className="schedule-monthly">
                    <table>
                      <thead>
                        <tr>
                          <th>月</th>
                          <th>火</th>
                          <th>水</th>
                          <th>木</th>
                          <th>金</th>
                          <th>土</th>
                          <th>日</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="item">
                              <div className="date">1</div>
                              <div className="content">
                                <a href="/">
                                  ヤクルト
                                  <br />
                                  先発投手
                                </a>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="item">
                              <div className="date">2</div>
                              <div className="content">
                                <a href="/">
                                  ヤクルト
                                  <br />
                                  先発投手
                                </a>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="item">
                              <div className="date">3</div>
                              <div className="content">
                                <a href="/">
                                  ヤクルト
                                  <br />
                                  先発投手
                                </a>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="item">
                              <div className="date">4</div>
                              <div className="content">
                                <a href="/">
                                  ヤクルト
                                  <br />
                                  先発投手
                                </a>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="item">
                              <div className="date">5</div>
                              <div className="content">
                                <a href="/">
                                  ヤクルト
                                  <br />
                                  先発投手
                                </a>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="item">
                              <div className="date">6</div>
                              <div className="content">
                                <a href="/">
                                  ヤクルト
                                  <br />
                                  先発投手
                                </a>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="item">
                              <div className="date">7</div>
                              <div className="content">
                                <a href="/">
                                  ヤクルト
                                  <br />
                                  先発投手
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="item">
                              <div className="date">8</div>
                              <div className="content">
                                <a href="/">
                                  ヤクルト
                                  <br />
                                  先発投手
                                </a>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="item">
                              <div className="date">9</div>
                              <div className="content">
                                <a href="/">
                                  ヤクルト
                                  <br />
                                  先発投手
                                </a>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="item">
                              <div className="date">10</div>
                              <div className="content">
                                <a href="/">
                                  ヤクルト
                                  <br />
                                  先発投手
                                </a>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="item">
                              <div className="date">11</div>
                              <div className="content">
                                <a href="/">
                                  ヤクルト
                                  <br />
                                  先発投手
                                </a>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="item">
                              <div className="date">12</div>
                              <div className="content">
                                <a href="/">
                                  ヤクルト
                                  <br />
                                  先発投手
                                </a>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="item">
                              <div className="date">13</div>
                              <div className="content">
                                <a href="/">
                                  ヤクルト
                                  <br />
                                  先発投手
                                </a>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="item">
                              <div className="date">14</div>
                              <div className="content">
                                <a href="/">
                                  ヤクルト
                                  <br />
                                  先発投手
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="item">
                              <div className="date">15</div>
                              <div className="content">
                                <a href="/">
                                  ヤクルト
                                  <br />
                                  先発投手
                                </a>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="item">
                              <div className="date">16</div>
                              <div className="content">
                                <a href="/">
                                  ヤクルト
                                  <br />
                                  先発投手
                                </a>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="item">
                              <div className="date">17</div>
                              <div className="content">
                                <a href="/">
                                  ヤクルト
                                  <br />
                                  先発投手
                                </a>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="item">
                              <div className="date">18</div>
                              <div className="content">
                                <a href="/">
                                  ヤクルト
                                  <br />
                                  先発投手
                                </a>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="item">
                              <div className="date">19</div>
                              <div className="content">
                                <a href="/">
                                  ヤクルト
                                  <br />
                                  先発投手
                                </a>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="item">
                              <div className="date">20</div>
                              <div className="content">
                                <a href="/">
                                  ヤクルト
                                  <br />
                                  先発投手
                                </a>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="item">
                              <div className="date">21</div>
                              <div className="content">
                                <a href="/">
                                  ヤクルト
                                  <br />
                                  先発投手
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="item">
                              <div className="date">22</div>
                              <div className="content">
                                <a href="/">
                                  ヤクルト
                                  <br />
                                  先発投手
                                </a>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="item">
                              <div className="date">23</div>
                              <div className="content">
                                <a href="/">
                                  ヤクルト
                                  <br />
                                  先発投手
                                </a>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="item">
                              <div className="date">24</div>
                              <div className="content">
                                <a href="/">
                                  ヤクルト
                                  <br />
                                  先発投手
                                </a>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="item">
                              <div className="date">25</div>
                              <div className="content">
                                <a href="/">
                                  ヤクルト
                                  <br />
                                  先発投手
                                </a>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="item">
                              <div className="date">26</div>
                              <div className="content">
                                <a href="/">
                                  ヤクルト
                                  <br />
                                  先発投手
                                </a>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="item">
                              <div className="date">27</div>
                              <div className="content">
                                <a href="/">
                                  ヤクルト
                                  <br />
                                  先発投手
                                </a>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="item">
                              <div className="date">28</div>
                              <div className="content">
                                <a href="/">
                                  ヤクルト
                                  <br />
                                  先発投手
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="item">
                              <div className="date">29</div>
                              <div className="content">
                                <a href="/">
                                  ヤクルト
                                  <br />
                                  先発投手
                                </a>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="item">
                              <div className="date">30</div>
                              <div className="content">
                                <a href="/">
                                  ヤクルト
                                  <br />
                                  先発投手
                                </a>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="item">
                              <div className="date">31</div>
                              <div className="content">
                                <a href="/">
                                  ヤクルト
                                  <br />
                                  先発投手
                                </a>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="item">
                              <div className="date">1</div>
                              <div className="content">
                                <a href="/">
                                  ヤクルト
                                  <br />
                                  先発投手
                                </a>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="item">
                              <div className="date">2</div>
                              <div className="content">
                                <a href="/">
                                  ヤクルト
                                  <br />
                                  先発投手
                                </a>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="item">
                              <div className="date">3</div>
                              <div className="content">
                                <a href="/">
                                  ヤクルト
                                  <br />
                                  先発投手
                                </a>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="item">
                              <div className="date">4</div>
                              <div className="content">
                                <a href="/">
                                  ヤクルト
                                  <br />
                                  先発投手
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="item">
                              <div className="date">5</div>
                              <div className="content">
                                <a href="/">
                                  ヤクルト
                                  <br />
                                  先発投手
                                </a>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="item">
                              <div className="date">6</div>
                              <div className="content">
                                <a href="/">
                                  ヤクルト
                                  <br />
                                  先発投手
                                </a>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="item">
                              <div className="date">7</div>
                              <div className="content">
                                <a href="/">
                                  ヤクルト
                                  <br />
                                  先発投手
                                </a>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="item">
                              <div className="date">8</div>
                              <div className="content">
                                <a href="/">
                                  ヤクルト
                                  <br />
                                  先発投手
                                </a>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="item">
                              <div className="date">9</div>
                              <div className="content">
                                <a href="/">
                                  ヤクルト
                                  <br />
                                  先発投手
                                </a>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="item">
                              <div className="date">10</div>
                              <div className="content">
                                <a href="/">
                                  ヤクルト
                                  <br />
                                  先発投手
                                </a>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="item">
                              <div className="date">11</div>
                              <div className="content">
                                <a href="/">
                                  ヤクルト
                                  <br />
                                  先発投手
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="title-win-lose">チーム勝敗表</h2>
                <div className="d-flex">
                  <div className="col-6 p-0 wrap-win-lose">
                    <div className="wrap-table-team">
                      <Table
                        showPagination={false}
                        header={header2}
                        showCheckbox={false}
                        showSearch={false}
                        itemOfPage={table2}
                        isShowOptionTable={false}
                        titleTable={titleTable3}
                      />
                    </div>
                    <div className="wrap-table-team">
                      <Table
                        showPagination={false}
                        header={header2}
                        showCheckbox={false}
                        showSearch={false}
                        itemOfPage={table2}
                        isShowOptionTable={false}
                        titleTable={titleTable4}
                      />
                    </div>
                  </div>
                  <div className="col-6 p-0 ">
                    <div>
                      <Table
                        showPagination={false}
                        header={header2}
                        showCheckbox={false}
                        showSearch={false}
                        itemOfPage={table3}
                        isShowOptionTable={false}
                        titleTable={titleTable5}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default DashboardTeam;
