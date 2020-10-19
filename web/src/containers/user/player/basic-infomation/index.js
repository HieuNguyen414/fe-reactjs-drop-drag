import React, { Component } from "react";
import { withLocalize } from "react-localize-redux";
import Table from "../../../../components/table";
import "./style.scss";

const headerDeregis = ['公示日', '選手動向名']
const titleDeregis = {
    dot: false,
    text: '登録抹消情報',
}
const dataDeregis = [
    {
        item: [
            { text: '2019/4/12' },
            { text: '次年度契約保留選手' },
        ]
    },
    {
        item: [
            { text: '2019/4/12' },
            { text: '次年度契約保留選手' },
        ]
    },
    {
        item: [
            { text: '2019/4/12' },
            { text: '次年度契約保留選手' },
        ]
    },
]

const headerAchievement = ['記録名', '残り記録']
const titleAchievement = {
    dot: false,
    text: '達成間近記録',
}
const dataAchievement = [
    {
        item: [
            { text: '1000安打' },
            { text: '23' },
        ]
    },
    {
        item: [
            { text: '1000安打' },
            { text: '23' },
        ]
    },
]

// const headerPerformance = ['球種名', '投球割合', '被打率', '空振り率']
// const titlePerformance = {
//     dot: false,
//     text: '球種別投手成績',
// }
// const dataPerformance = [
//     {
//         item: [
//             { text: 'ストレート' },
//             { text: '20%' },
//             { text: '.234' },
//             { text: '8%' },
//         ]
//     },
//     {
//         item: [
//             { text: 'ストレート' },
//             { text: '20%' },
//             { text: '.234' },
//             { text: '8%' },
//         ]
//     },
//     {
//         item: [
//             { text: 'ストレート' },
//             { text: '20%' },
//             { text: '.234' },
//             { text: '8%' },
//         ]
//     },
//     {
//         item: [
//             { text: 'ストレート' },
//             { text: '20%' },
//             { text: '.234' },
//             { text: '8%' },
//         ]
//     },
// ]

// const headerBreakdown = ['内訳', '打球数', '割合',]
// const titleBreakdown = {
//     dot: false,
//     text: '凡打内訳',
// }
// const dataBreakdown = [
//     {
//         item: [
//             { text: 'ゴロ' },
//             { text: '27' },
//             { text: '25%' },
//         ]
//     },
//     {
//         item: [
//             { text: 'ゴロ' },
//             { text: '27' },
//             { text: '25%' },
//         ]
//     },
//     {
//         item: [
//             { text: 'ゴロ' },
//             { text: '27' },
//             { text: '25%' },
//         ]
//     },
// ]

class BasicInfomation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDropdown: false,
            infomation: '',
        }
    }

    onChangeDataInput = (event) => {
        let name = event.target.name
        let value = event.target.value
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="basic-info">
                <div className="table">
                    <div className="block">
                        <Table header={headerDeregis} titleTable={titleDeregis} showCheckbox={false} showSearch={false} itemOfPage={dataDeregis} isShowOptionTable={false} />
                    </div>
                    <div className="block">
                        <Table header={headerAchievement} titleTable={titleAchievement} showCheckbox={false} showSearch={false} itemOfPage={dataAchievement} isShowOptionTable={false} />
                    </div>
                    {/* <div className="block">
                        <Table header={headerPerformance} titleTable={titlePerformance} showCheckbox={false} showSearch={false} itemOfPage={dataPerformance} isShowOptionTable={false} />
                    </div>
                    <div className="block">
                        <Table header={headerBreakdown} titleTable={titleBreakdown} showCheckbox={false} showSearch={false} itemOfPage={dataBreakdown} isShowOptionTable={false} />
                    </div> */}
                </div>

                <div className="chart-content">
                    <div className="chart-left">
                        <div className="title">
                            <h4>ホットゾーン</h4>
                            <div className="control">
                                <img src="/img/insert_comment_24px.png" alt="" />
                                <img src="/img/more_vert_gray.png" alt="" />
                            </div>
                        </div>

                        <div className="wrapper-chart">
                            <div className="wrapper-chart-left">
                                <img src="/img/baseball-man.png" alt="" />
                                <div className="md-checkbox-custom">
                                    <input id="left" type="checkbox" />
                                    <label htmlFor="left">左打者</label>
                                </div>
                            </div>
                            <div className="wrapper-chart-center">
                                <div className="grid-system">
                                    <div className="grid-item item-1">
                                        <p>30 - 7</p>
                                        <p>.233</p>
                                        <p>HR 3 | K 11</p>
                                    </div>
                                    <div className="grid-item item-2">
                                        <p>31 - 12</p>
                                        <p>.387</p>
                                        <p>HR 2 | K 6</p>
                                    </div>
                                    <div className="grid-item item-3">
                                        <p>39 - 8</p>
                                        <p>.205</p>
                                        <p>HR 4 | K 4</p>
                                    </div>
                                    <div className="grid-item item-4">
                                        <p>74 - 28</p>
                                        <p>.378</p>
                                        <p>HR 3 | K 15</p>
                                    </div>
                                    <div className="grid-item item-5">
                                        <p>43 - 19</p>
                                        <p>.442</p>
                                        <p>HR 3 | K 2</p>
                                    </div>
                                    <div className="grid-item item-6">
                                        <p>42 -19</p>
                                        <p>.452</p>
                                        <p>HR 9 | K 6</p>
                                    </div>
                                    <div className="grid-item item-7">
                                        <p>103 - 18</p>
                                        <p>.175</p>
                                        <p>HR 2 | K 24</p>
                                    </div>
                                    <div className="grid-item item-8">
                                        <p>67 - 15</p>
                                        <p>.224</p>
                                        <p>HR 2 | K 16</p>
                                    </div>
                                    <div className="grid-item item-9">
                                        <p>58 - 22</p>
                                        <p>.205</p>
                                        <p>HR 5 | K 11</p>
                                    </div>
                                </div>
                                <img src="/img/Rectangle.png" alt="" />
                            </div>
                            <div className="wrapper-chart-right">
                                <img src="/img/baseball-man.png" alt="" />
                                <div className="md-checkbox-custom">
                                    <input id="right" type="checkbox" />
                                    <label htmlFor="right">右打者</label>
                                </div>
                            </div>
                        </div>

                        <textarea className="textarea"
                            name="infomation"
                            value={this.state.infomation}
                            onChange={this.onChangeDataInput}
                            placeholder="注釈が入ります。"
                        ></textarea>
                    </div>
                    <div className="chart-right">
                        <div className="title">
                            <h4>打球方向</h4>
                            <div className="control">
                                <img src="/img/insert_comment_24px.png" alt="" />
                                <img src="/img/more_vert_gray.png" alt="" />
                            </div>
                        </div>

                        <div className="wrapper-chart">
                            <div className='wrapper'>
                                <img src="/img/Group.png" alt="" />
                                <div className="item item-1"><span>29%</span></div>
                                <div className="item item-2"><span>31%</span></div>
                                <div className="item item-3"><span>21%</span></div>
                                <div className="item item-4"><span>11%</span></div>
                                <div className="item item-5"><span>9%</span></div>
                            </div>

                            <div className="wrapper-tab">
                                <button className="tablinks active">3分割</button>
                                <button className="tablinks" >5分割</button>
                            </div>
                        </div>

                        <textarea className="textarea"
                            name="infomation"
                            value={this.state.infomation}
                            onChange={this.onChangeDataInput}
                            placeholder="注釈が入ります。"
                        ></textarea>
                    </div>
                </div>
            </div>
        )
    }
}

export default withLocalize(BasicInfomation);