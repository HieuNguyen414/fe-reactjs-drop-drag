import React, { Fragment } from 'react';
import './styles.scss';
import Pagination from '../../../components/pagination';

const data = [
    {
        item: {
            title: 'ワークスペースタイトル',
            dot: true
        }
    },
    {
        item: {
            title: 'ワークスペースタイトル',
            status: '納品済',
            dot: false
        }
    },
    {
        item: {
            title: 'ワークスペースタイトル',
            status: '納品済',
            dot: true
        }
    },
    {
        item: {
            title: 'ワークスペースタイトル',
            dot: true
        }
    },
    {
        item: {
            title: 'ワークスペースタイトル',
            status: '納品済',
            dot: false
        }
    },
    {
        item: {
            title: 'ワークスペースタイトル',
            status: '納品済',
            dot: true
        }
    },
    {
        item: {
            title: 'ワークスペースタイトル',
            dot: true
        }
    },
    {
        item: {
            title: 'ワークスペースタイトル',
            status: '納品済',
            dot: false
        }
    },
    {
        item: {
            title: 'ワークスペースタイトル',
            status: '納品済',
            dot: true
        }
    },
    {
        item: {
            title: 'ワークスペースタイトル',
            status: '納品済',
            dot: true
        }
    },
    {
        item: {
            title: 'ワークスペースタイトル',
            status: '納品済',
            dot: true
        }
    }
]
// const table = [
//     {
//         item: [
//             { text: 'Topicsタイトル' },
//             { text: 'Game Topics' },
//             { text: '8/3 巨人 - 中日' },
//             { text: '2019/11/23 12:34' },
//             { text: '2019/11/23 12:34' },
//             { action: './img/ic_copy.png' },
//         ]
//     },
//     {
//         item: [
//             { text: 'Topicsタイトル' },
//             { text: 'Game Topics' },
//             { text: '8/3 巨人 - 中日' },
//             { text: '2019/11/23 12:34' },
//             { text: '2019/11/23 12:34' },
//             { action: './img/ic_copy.png' },
//         ]
//     },
//     {
//         item: [
//             { text: 'Topicsタイトル' },
//             { text: 'Game Topics' },
//             { text: '8/3 巨人 - 中日' },
//             { text: '2019/11/23 12:34' },
//             { text: '2019/11/23 12:34' },
//             { action: './img/ic_copy.png' },
//         ]
//     },
//     {
//         item: [
//             { text: 'Topicsタイトル' },
//             { text: 'Game Topics' },
//             { text: '8/3 巨人 - 中日' },
//             { text: '2019/11/23 12:34' },
//             { text: '2019/11/23 12:34' },
//             { action: './img/ic_copy.png' },
//         ]
//     },
//     {
//         item: [
//             { text: 'Topicsタイトル' },
//             { text: 'Game Topics' },
//             { text: '8/3 巨人 - 中日' },
//             { text: '2019/11/23 12:34' },
//             { text: '2019/11/23 12:34' },
//             { action: './img/ic_copy.png' },
//         ]
//     },
// ]

class News extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isShowDropdown: false
        }
    }

    render() {
        return (
            <Fragment>
                <div className="wrapper-content delivery-wrapper w-100 d-flex justify-content-start">
                    <div className="delivery w-42">
                        <div className="title w-100 d-inline-flex align-items-center font-weight-bold">
                            <h3>DSからのお知らせ</h3>
                        </div>
                        <div className="delivery-table w-100 ">
                            <div className="table-wrapper">
                                <table className="w-100 pt-1">
                                    <tbody>
                                        {
                                            data.map((value, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td className="w-100 d-flex flex-column justify-content-between align-items-center   none-border ">
                                                            <div className="h-100 w-100 d-flex justify-content-between ">
                                                                <div className="d-inline-flex justify-content-start align-items-center">
                                                                    <div className="mr-1 info">
                                                                        <div className="d-flex ">
                                                                            <h4 className="">{value.item.title}</h4>
                                                                            <div className="oval-gray d-inline-flex text-white justify-content-center align-items-center font-weight-bold">9</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="date h-100 ">
                                                                    <div className="d-inline-flex justify-content-end align-items-center">
                                                                        <div className="mr-1">更新日時：</div>
                                                                        <div>YYYY/mm/dd HH:mm</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {
                                                                value.item.dot
                                                                    ? <div className="note-dot mr-1" />
                                                                    : null
                                                            }
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                                <Pagination items={data} onChangePage={(e) => this.getItemsPage(e)} />
                            </div>
                        </div>
                    </div>
                    <div className="wrap-work-space">
                        <div className="work-space w-58">
                            <div className="title d-flex flex-row align-items-center justify-content-between ">
                                <div className="content align-middle">ワークスペースタイトル</div>
                                <div className="date d-flex flex-column align-items-flex-end justify-content-end">
                                    <div className="delivery-date d-flex flex-row justify-content-end align-items-center">
                                        <div className="mr-1">納品日時：</div>
                                        <div>YYYY/mm/dd HH:mm</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div>
                                内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト
                                内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト
                                内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト
                                内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト
                                内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト内容テキスト

                        </div>
                        </div>
                        
                        
                    </div>
                </div>
            
            </Fragment>
        )
    }
}
export default News