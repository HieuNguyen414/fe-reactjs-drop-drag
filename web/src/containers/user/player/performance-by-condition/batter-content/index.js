import React, { Component } from "react";
import { withLocalize } from "react-localize-redux";
import Table from '../../../../../components/table';

// Start: Data For Section Batter
const titleBatterTable1 = {
    dot: false,
    text: '対セ・リーグ チーム別成績',
}
const headerBatterTable1 = ["対戦", "打率", "試合", "打数", "安打", "本塁打", "得点", "打点", "三振", "四球", "死球", "犠打",
    "犠飛", "盗塁"]
const dataBatterTable1 = [
    {
        item: [
            { img: '/img/Swallow.png' },
            { text: 26 },
            { text: 26 },
            { text: 26 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
        ]
    },
    {
        item: [
            { img: '/img/Carp.png' },
            { text: 26 },
            { text: 26 },
            { text: 26 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
        ]
    },
    {
        item: [
            { img: '/img/DeNA.png' },
            { text: 26 },
            { text: 26 },
            { text: 26 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
        ]
    },
    {
        item: [
            { img: '/img/Dragons.png' },
            { text: 26 },
            { text: 26 },
            { text: 26 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
        ]
    },
    {
        item: [
            { img: '/img/TIgers.png' },
            { text: 26 },
            { text: 26 },
            { text: 26 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
        ]
    },
]

const titleBatterTable2 = {
    dot: false,
    text: '対パ・リーグ チーム別成績',
}
const headerBatterTable2 = ["対戦", "打率", "試合", "打数", "安打", "本塁打", "得点", "打点", "三振", "四球", "死球", "犠打",
    "犠飛", "盗塁"]
const dataBatterTable2 = [
    {
        item: [
            { img: '/img/Swallow.png' },
            { text: 26 },
            { text: 26 },
            { text: 26 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
        ]
    },
    {
        item: [
            { img: '/img/Carp.png' },
            { text: 26 },
            { text: 26 },
            { text: 26 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
        ]
    },
    {
        item: [
            { img: '/img/DeNA.png' },
            { text: 26 },
            { text: 26 },
            { text: 26 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
        ]
    },
    {
        item: [
            { img: '/img/Dragons.png' },
            { text: 26 },
            { text: 26 },
            { text: 26 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
        ]
    },
    {
        item: [
            { img: '/img/TIgers.png' },
            { text: 26 },
            { text: 26 },
            { text: 26 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
        ]
    },
    {
        item: [
            { img: '/img/TIgers.png' },
            { text: 26 },
            { text: 26 },
            { text: 26 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
        ]
    },
]

const titleBatterTable3 = {
    dot: false,
    text: '月別成績',
}
const headerBatterTable3 = ["月", "打率", "試合", "打数", "安打", "本塁打", "得点", "打点", "三振", "四球", "死球", "犠打",
    "犠飛", "盗塁"]
const dataBatterTable3 = [
    {
        item: [
            { text: '3月' },
            { text: 26 },
            { text: 26 },
            { text: 26 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
        ]
    },
    {
        item: [
            { text: '4月' },
            { text: 26 },
            { text: 26 },
            { text: 26 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
        ]
    },
    {
        item: [
            { text: '5月' },
            { text: 26 },
            { text: 26 },
            { text: 26 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
        ]
    },
    {
        item: [
            { text: '6月' },
            { text: 26 },
            { text: 26 },
            { text: 26 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
        ]
    },
    {
        item: [
            { text: '7月' },
            { text: 26 },
            { text: 26 },
            { text: 26 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
        ]
    },
]

const titleBatterTable4 = {
    dot: false,
    text: '月別成績',
}
const headerBatterTable4 = ["投手", "打席", "打率", "打数", "安打", "本塁打", "打点", "三振", "四球", "死球", "犠打", "犠飛"]
const dataBatterTable4 = [
    {
        item: [
            { text: '右投' },
            { text: '右打席' },
            { text: 26 },
            { text: 26 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
        ]
    },
    {
        item: [
            { text: '右投' },
            { text: '右打席' },
            { text: 26 },
            { text: 26 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
        ]
    },
]

const titleBatterTable5 = {
    dot: false,
    text: 'カウント別成績',
}
const headerBatterTable5 = ["カウント", "打率", "打数", "安打", "本塁打", "打点", "三振", "三振", "死球", "犠打", "犠飛"]
const dataBatterTable5 = [
    {
        item: [
            { text: '0-0' },
            { text: 26 },
            { text: 26 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
        ]
    },
    {
        item: [
            { text: '0-1' },
            { text: 26 },
            { text: 26 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
        ]
    },
    {
        item: [
            { text: '0-2' },
            { text: 26 },
            { text: 26 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
        ]
    },
    {
        item: [
            { text: '1-0' },
            { text: 26 },
            { text: 26 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
        ]
    },
    {
        item: [
            { text: '1-1' },
            { text: 26 },
            { text: 26 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
        ]
    },
    {
        item: [
            { text: '1-2' },
            { text: 26 },
            { text: 26 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
        ]
    },
    {
        item: [
            { text: '2-0' },
            { text: 26 },
            { text: 26 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
        ]
    },
    {
        item: [
            { text: '2-1' },
            { text: 26 },
            { text: 26 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
        ]
    },
    {
        item: [
            { text: '2-2' },
            { text: 26 },
            { text: 26 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
        ]
    },
    {
        item: [
            { text: '3-0' },
            { text: 26 },
            { text: 26 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
        ]
    },
    {
        item: [
            { text: '3-1' },
            { text: 26 },
            { text: 26 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
        ]
    },
    {
        item: [
            { text: '3-2' },
            { text: 26 },
            { text: 26 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
        ]
    },
]

const titleBatterTable6 = {
    dot: false,
    text: '塁状況別成績',
}
const headerBatterTable6 = ["ランナー", "打率", "打数", "安打", "本塁打", "打点", "三振", "三振", "死球", "犠打", "犠飛"]
const dataBatterTable6 = [
    {
        item: [
            { text: '無し' },
            { text: 26 },
            { text: 26 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
        ]
    },
    {
        item: [
            { text: '一塁' },
            { text: 26 },
            { text: 26 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
        ]
    },
    {
        item: [
            { text: '一二塁' },
            { text: 26 },
            { text: 26 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
        ]
    },
    {
        item: [
            { text: '一三塁' },
            { text: 26 },
            { text: 26 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
        ]
    },
    {
        item: [
            { text: '二塁' },
            { text: 26 },
            { text: 26 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
        ]
    },
    {
        item: [
            { text: '二三塁' },
            { text: 26 },
            { text: 26 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
        ]
    },
    {
        item: [
            { text: '三塁' },
            { text: 26 },
            { text: 26 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
        ]
    },
    {
        item: [
            { text: '満塁' },
            { text: 26 },
            { text: 26 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
        ]
    },
    {
        item: [
            { text: '走者あり' },
            { text: 26 },
            { text: 26 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
        ]
    },
    {
        item: [
            { text: '得点圏' },
            { text: 26 },
            { text: 26 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
        ]
    },
]

const titleBatterTable7 = {
    dot: false,
    text: '球場別成績',
}
const headerBatterTable7 = ["球場", "打率", "試合", "打数", "安打", "本塁打", "打点", "三振", "三振", "死球", "犠打", "犠飛"]
const dataBatterTable7 = [
    {
        item: [
            { text: '東京ドーム' },
            { text: 26 },
            { text: 26 },
            { text: 26 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
        ]
    },
    {
        item: [
            { text: '神宮' },
            { text: 26 },
            { text: 26 },
            { text: 26 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
        ]
    },
    {
        item: [
            { text: '横浜' },
            { text: 26 },
            { text: 26 },
            { text: 26 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
        ]
    },
    {
        item: [
            { text: 'ナゴヤドーム' },
            { text: 26 },
            { text: 26 },
            { text: 26 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
        ]
    },
    {
        item: [
            { text: '甲子園' },
            { text: 26 },
            { text: 26 },
            { text: 26 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
        ]
    },
    {
        item: [
            { text: 'メットライフ' },
            { text: 26 },
            { text: 26 },
            { text: 26 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
        ]
    },
    {
        item: [
            { text: '京セラD大阪' },
            { text: 26 },
            { text: 26 },
            { text: 26 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
        ]
    },
    {
        item: [
            { text: '鹿児島' },
            { text: 26 },
            { text: 26 },
            { text: 26 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
        ]
    },
    {
        item: [
            { text: '熊本' },
            { text: 26 },
            { text: 26 },
            { text: 26 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
        ]
    },
    {
        item: [
            { text: '札幌ドーム' },
            { text: 26 },
            { text: 26 },
            { text: 26 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
        ]
    },
    {
        item: [
            { text: '楽天生命パーク' },
            { text: 26 },
            { text: 26 },
            { text: 26 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
        ]
    },
    {
        item: [
            { text: 'マツダスタジアム' },
            { text: 26 },
            { text: 26 },
            { text: 26 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
        ]
    },
    {
        item: [
            { text: '三次' },
            { text: 26 },
            { text: 26 },
            { text: 26 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
            { text: 0 },
        ]
    },
]

// Start: Data For Section Batter

class BatterContent extends Component {
    render() {
        return(
            <div>
                <Table header={headerBatterTable1} showPagination={false} showCheckbox={false} showSearch={false} itemOfPage={dataBatterTable1} isShowOptionTable={false} titleTable={titleBatterTable1} />
                <Table header={headerBatterTable2} showPagination={false} showCheckbox={false} showSearch={false} itemOfPage={dataBatterTable2} isShowOptionTable={false} titleTable={titleBatterTable2} />
                <Table header={headerBatterTable3} showPagination={false} showCheckbox={false} showSearch={false} itemOfPage={dataBatterTable3} isShowOptionTable={false} titleTable={titleBatterTable3} />
                <Table header={headerBatterTable4} showPagination={false} showCheckbox={false} showSearch={false} itemOfPage={dataBatterTable4} isShowOptionTable={false} titleTable={titleBatterTable4} />
                <Table header={headerBatterTable5} showPagination={false} showCheckbox={false} showSearch={false} itemOfPage={dataBatterTable5} isShowOptionTable={false} titleTable={titleBatterTable5} />
                <Table header={headerBatterTable6} showPagination={false} showCheckbox={false} showSearch={false} itemOfPage={dataBatterTable6} isShowOptionTable={false} titleTable={titleBatterTable6} />
                <Table header={headerBatterTable7} showPagination={false} showCheckbox={false} showSearch={false} itemOfPage={dataBatterTable7} isShowOptionTable={false} titleTable={titleBatterTable7} />
            </div>
        )
    }
}

export default withLocalize(BatterContent);