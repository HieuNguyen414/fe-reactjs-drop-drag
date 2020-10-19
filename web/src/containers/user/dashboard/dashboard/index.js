import React from 'react';
// import { DatePickerInput } from 'rc-datepicker';
import './styles.scss';
import {
  connect,
} from 'react-redux';
import 'rc-datepicker/lib/style.css';
import Table from '../../../../components/table';
import { getItemDashboard, ACTIONS } from './../../../../actions/dashboard';

const header = ['チーム', '08/03', '08/04', '08/05', '08/06', '08/07', '08/08', '08/09'];

const header2 = ['順位', 'チーム', '試合', '勝', '負', '分', '勝率', 'ゲーム差'];

const table1 = [
  {
    item: [
      {
        text: '巨人',
      },
      {
        text: '',
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
        link: true,
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
        link: true,
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
      },
    ],
  },
  {
    item: [
      {
        text: '阪神',
      },
      {
        text: '',
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
        link: true,
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
        link: true,
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
      },
    ],
  },
  {
    item: [
      {
        text: '中日',
      },
      {
        text: '',
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
        link: true,
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
        link: true,
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
      },
    ],
  },
  {
    item: [
      {
        text: '広島',
      },
      {
        text: '',
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
        link: true,
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
        link: true,
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
      },
    ],
  },
  {
    item: [
      {
        text: 'DeNA',
      },
      {
        text: '',
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
        link: true,
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
        link: true,
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
      },
    ],
  },
  {
    item: [
      {
        text: 'ヤクルト',
      },
      {
        text: '',
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
        link: true,
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
        link: true,
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
      },
    ],
  },
];

const table11 = [
  {
    item: [
      {
        text: '西武',
      },
      {
        text: '',
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
        link: true,
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
        link: true,
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
      },
    ],
  },
  {
    item: [
      {
        text: 'ソフトバンク',
      },
      {
        text: '',
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
        link: true,
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
        link: true,
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
      },
    ],
  },
  {
    item: [
      {
        text: '楽天',
      },
      {
        text: '',
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
        link: true,
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
        link: true,
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
      },
    ],
  },
  {
    item: [
      {
        text: 'ロッテ',
      },
      {
        text: '',
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
        link: true,
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
        link: true,
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
      },
    ],
  },
  {
    item: [
      {
        text: '日本ハム',
      },
      {
        text: '',
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
        link: true,
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
        link: true,
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
      },
    ],
  },
  {
    item: [
      {
        text: 'オリックス',
      },
      {
        text: '',
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
        link: true,
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
        link: true,
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
      },
      {
        text: {
          name: ' ヤクルト',
          action: '先発投手',
        },
      },
    ],
  },
];
const table2 = [
  {
    item: [
      { text: '1' },
      { text: '巨人', img: '/img/Giants.png' },
      { text: '143' },
      { text: '77' },
      { text: '64' },
      { text: '2' },
      { text: '.546' },
      { text: '優勝' },
    ],
  },
  {
    item: [
      { text: '2' },
      { text: '巨人', img: '/img/DeNA.png' },
      { text: '143' },
      { text: '77' },
      { text: '64' },
      { text: '2' },
      { text: '.546' },
      { text: '優勝' },
    ],
  },
  {
    item: [
      { text: '3' },
      { text: '巨人', img: '/img/TIgers.png' },
      { text: '143' },
      { text: '77' },
      { text: '64' },
      { text: '2' },
      { text: '.546' },
      { text: '優勝' },
    ],
  },
  {
    item: [
      { text: '4' },
      { text: '巨人', img: '/img/Carp.png' },
      { text: '143' },
      { text: '77' },
      { text: '64' },
      { text: '2' },
      { text: '.546' },
      { text: '優勝' },
    ],
  },
  {
    item: [
      { text: '5' },
      { text: '巨人', img: '/img/Dragons.png' },
      { text: '143' },
      { text: '77' },
      { text: '64' },
      { text: '2' },
      { text: '.546' },
      { text: '優勝' },
    ],
  },
  {
    item: [
      { text: '6' },
      { text: '巨人', img: '/img/Swallow.png' },
      { text: '143' },
      { text: '77' },
      { text: '64' },
      { text: '2' },
      { text: '.546' },
      { text: '優勝' },
    ],
  },
];

const table22 = [
  {
    item: [
      { text: '1' },
      { text: '巨人', img: '/img/Lions.png' },
      { text: '143' },
      { text: '77' },
      { text: '64' },
      { text: '2' },
      { text: '.546' },
      { text: '優勝' },
    ],
  },
  {
    item: [
      { text: '2' },
      { text: '巨人', img: '/img/Hawks.png' },
      { text: '143' },
      { text: '77' },
      { text: '64' },
      { text: '2' },
      { text: '.546' },
      { text: '優勝' },
    ],
  },
  {
    item: [
      { text: '3' },
      { text: '巨人', img: '/img/Eagles.png' },
      { text: '143' },
      { text: '77' },
      { text: '64' },
      { text: '2' },
      { text: '.546' },
      { text: '優勝' },
    ],
  },
  {
    item: [
      { text: '4' },
      { text: '巨人', img: '/img/Marines.png' },
      { text: '143' },
      { text: '77' },
      { text: '64' },
      { text: '2' },
      { text: '.546' },
      { text: '優勝' },
    ],
  },
  {
    item: [
      { text: '5' },
      { text: '巨人', img: '/img/Fighters.png' },
      { text: '143' },
      { text: '77' },
      { text: '64' },
      { text: '2' },
      { text: '.546' },
      { text: '優勝' },
    ],
  },
  {
    item: [
      { text: '6' },
      { text: '巨人', img: '/img/Bufalloes.png' },
      { text: '143' },
      { text: '77' },
      { text: '64' },
      { text: '2' },
      { text: '.546' },
      { text: '優勝' },
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
        text: '巨人', img: '/img/Hawks.png',

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
        text: '巨人', img: '/img/Bufalloes.png',
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
        text: '巨人', img: '/img/Giants.png',
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
        text: '巨人', img: '/img/Dragons.png',
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
        text: '巨人', img: '/img/Lions.png',
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
        text: '巨人', img: '/img/Eagles.png',
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
        text: '巨人', img: '/img/Fighters.png',
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
        text: '巨人', img: '/img/Dragons.png',
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
        text: '巨人', img: '/img/Marines.png',
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
        text: '巨人', img: '/img/TIgers.png',
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
        text: '巨人', img: '/img/Swallow.png',
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
        text: '巨人', img: '/img/Carp.png',
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

const titleTable1 = {
  dot: true,
  text: 'セ・リーグ',
  background: 'green-dot',
  pl: '',
};
const titleTable2 = {
  dot: true,
  text: 'パ・リーグ',
  background: 'blue-dot',
  pl: '',
};
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

class Dashboard extends React.Component {
  constructor(props, context) {
    super(props, context);
    // eslint-disable-next-line react/no-unused-state
    this.state = {
      selectedDate: '2019/8/6',
      isTable1: [],
      isTable2: [],
    };
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.props.getItemDashboard();
  }

  onChange(date) {
    this.setState({
      selectedDate: date
    });
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.status === ACTIONS.GET_ITEM_SUCCESS && nextProps.response) {
      // Convert data reponsse to table
      let d1 = nextProps.response.filter(value => value.league_id === 0);
      this.convertData(d1);
    }
  }

  convertData(data) {
    let header1 = [];
    let value = data.map(value => {
      let linkText = value.data.map(v => {
        v.teamNameResultDate && header1.push(v.teamNameResultDate);
        this.setState({
          isHeader1: ['チーム', ...new Set(header1)]
        });
        return {
          text1: v.teamName,
          text2: v.sPitcherName,
          score: v.result ? v.result.home_team_score + '-' + v.result.away_team_score : ''
        }
      });
      let mmmmm = linkText.map(m => {
        return [{ text: value.teamName }, { text: '' }, { text: { name: m.text1, action: m.text2 }, link: true }]
      });
      // console.log(mmmmm);
      return {
        item: mmmmm
      }
    });
    this.setState({
      isTable1: value
    });
  }

  openLink = () => {
    const { history } = this.props;
    history.push('/game');
  }

  onChangeDropdown = () => {
    const { history } = this.props;
    history.push('/dashboard-team');
  }

  render() {
    // console.log(this.state);
    return (
      <div className="wrap-dashboard">
        <h1 className="title-dashboard">ダッシュボード</h1>
        <div className="notice d-flex">
          <img alt="notice" className="img-notice" src="/img/notice.png" />
          <p className="text-white">お知らせ</p>
        </div>
        <div className="body-dashboard">
          <div className="head--tables d-flex justify-content-between">
            <div className="head--tables-left d-flex align-items-center">
              <span>日程表</span>
              <button type="button">前の週</button>
              <button type="button">前日</button>
              <button type="button">今日</button>
              <button type="button">翌日</button>
              <button type="button">次の週</button>
              <input type="date" defaultValue="2019-08-06" className="time-option" />
            </div>
            <div className="head--tables-right">
              <select onClick={this.onChangeDropdown} className="form-control select-custom">
                <option>全球団</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
          </div>
          <div className="body--tables">
            <div className="body--tables-top bg-white rounded">
              <Table
                showPagination={false}
                // header={this.state.isHeader1 ? this.state.isHeader1 : []}
                header={header}
                showCheckAll={false}
                showCheckbox={false}
                showSearch={false}
                openLink={this.openLink}
                // itemOfPage={this.state.isTable1}
                itemOfPage={table1}
                isShowOptionTable={false}
                titleTable={titleTable1}
              />
            </div>
            <div className="body--tables-middle bg-white rounded">
              <Table
                showPagination={false}
                header={header}
                showCheckbox={false}
                showSearch={false}
                itemOfPage={table11}
                isShowOptionTable={false}
                titleTable={titleTable2}
              />
            </div>
            <div>
              <h2 className="title-win-lose">チーム勝敗表</h2>
              <div className="d-flex">
                <div className="col-6 p-0 wrap-win-lose">
                  <div>
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
                  <div>
                    <Table
                      showPagination={false}
                      header={header2}
                      showCheckbox={false}
                      showSearch={false}
                      itemOfPage={table22}
                      isShowOptionTable={false}
                      titleTable={titleTable4}
                    />
                  </div>
                </div>
                <div className="col-6 p-0">
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
    );
  }
}

const mapStateToProps = ({ dashboard }) => {
  return {
    status: dashboard.status,
    response: dashboard.response
  }
};

const mapDispatchToProps = (dispatch) => ({
  getItemDashboard: () => {
    dispatch(getItemDashboard());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
