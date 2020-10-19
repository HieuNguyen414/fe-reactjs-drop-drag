import React, { PureComponent } from 'react';
import './style.scss';
import Table from '../../../components/table';

const header = ['試合日付', '球場', 'ホーム', 'ビジター', 'イニング', '打順', '投手', '打者', '結果'];

const dataPlaylogSearch = [];

for (let i = 0; i < 12; i += 1) {
  dataPlaylogSearch.push({
    item: [
      { text: '8/12' },
      { text: '甲子園' },
      { text: '阪神' },
      { text: '巨人' },
      { text: '1回表' },
      { text: '1' },
      { text: 'なまえ' },
      { text: 'なまえ' },
      { text: 'アウト' },
    ],
  });
}

class PlaylogSearch extends PureComponent {
  render() {
    return (
      <div className="playlog-search">
        <div className="block-title">
          <h2 className="block-title__text--main">Playlog Search</h2>
        </div>
        <div className="block-content">
          <div className="wrapper">
            <div className="block-control">
              <select className="form-control">
                <option hidden>シーズン</option>
                <option>春</option>
                <option>夏</option>
                <option>秋</option>
                <option>冬</option>
              </select>
              <select className="form-control">
                <option hidden>月</option>
                <option>1月</option>
                <option>2月</option>
                <option>3月</option>
                <option>4月</option>
                <option>5月</option>
                <option>6月</option>
                <option>7月</option>
                <option>8月</option>
                <option>9月</option>
              </select>
              <select className="form-control">
                <option>8/12 . 阪神 - 巨人</option>
                <option>8/12 . 阪神 - 巨人</option>
              </select>
              <input type="text" className="searchbox" placeholder="投手名" />
              <input type="text" className="searchbox" placeholder="野手名" />
            </div>
            <Table
              showPagination={false}
              header={header}
              showCheckbox={false}
              showSearch={false}
              itemOfPage={dataPlaylogSearch}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PlaylogSearch;
