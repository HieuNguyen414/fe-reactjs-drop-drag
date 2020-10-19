import React, { Fragment } from 'react';
import './styles.scss';
import Pagination from '../../../components/pagination';
import Table from '../../../components/table';
import Button from '../../../components/button';

const data = [
    {
        item: {
            title: 'ワークスペースタイトル',
            name: 'クライアント名, クライアント名, クライアン...',
            dot: true
        }
    },
    {
        item: {
            title: 'ワークスペースタイトル',
            name: 'クライアント名, クライアント名, クライアン...',
            status: '納品済',
            dot: false
        }
    },
    {
        item: {
            title: 'ワークスペースタイトル',
            name: 'クライアント名, クライアント名, クライアン...',
            status: '納品済',
            dot: true
        }
    },
    {
        item: {
            title: 'ワークスペースタイトル',
            name: 'クライアント名, クライアント名, クライアン...',
            dot: true
        }
    },
    {
        item: {
            title: 'ワークスペースタイトル',
            name: 'クライアント名, クライアント名, クライアン...',
            status: '納品済',
            dot: false
        }
    },
    {
        item: {
            title: 'ワークスペースタイトル',
            name: 'クライアント名, クライアント名, クライアン...',
            status: '納品済',
            dot: true
        }
    },
    {
        item: {
            title: 'ワークスペースタイトル',
            name: 'クライアント名, クライアント名, クライアン...',
            dot: true
        }
    },
    {
        item: {
            title: 'ワークスペースタイトル',
            name: 'クライアント名, クライアント名, クライアン...',
            status: '納品済',
            dot: false
        }
    },
    {
        item: {
            title: 'ワークスペースタイトル',
            name: 'クライアント名, クライアント名, クライアン...',
            status: '納品済',
            dot: true
        }
    },
    {
        item: {
            title: 'ワークスペースタイトル',
            name: 'クライアント名, クライアント名, クライアン...',
            status: '納品済',
            dot: true
        }
    },
    {
        item: {
            title: 'ワークスペースタイトル',
            name: 'クライアント名, クライアント名, クライアン...',
            status: '納品済',
            dot: true
        }
    }
]
const header2 = ['', 'タイトル', 'カテゴリー', '対象', '作成日時', '更新日時', 'ステータス']
const table = [
    {
        item: [
            { text: 'Topicsタイトル' },
            { text: 'Game Topics' },
            { text: '8/3 巨人 - 中日' },
            { text: '2019/11/23 12:34' },
            { text: '2019/11/23 12:34' },
            { text: '作業中', dot: 'red' },
            {
                action: [
                    'このワークスペースにコピー', '他のワークスペースにコピー', '削除'
                ]
            }
        ]
    },
    {
        item: [
            { text: 'Topicsタイトル' },
            { text: 'Game Topics' },
            { text: '8/3 巨人 - 中日' },
            { text: '2019/11/23 12:34' },
            { text: '2019/11/23 12:34' },
            { text: '作業中', dot: 'orange' },
            {
                action: [
                    'このワークスペースにコピー', '他のワークスペースにコピー', '削除'
                ]
            }
        ]
    },
    {
        item: [
            { text: 'Topicsタイトル' },
            { text: 'Game Topics' },
            { text: '8/3 巨人 - 中日' },
            { text: '2019/11/23 12:34' },
            { text: '2019/11/23 12:34' },
            { text: '作業中', dot: 'orange' },
            {
                action: [
                    'このワークスペースにコピー', '他のワークスペースにコピー', '削除'
                ]
            }
        ]
    },
    {
        item: [
            { text: 'Topicsタイトル' },
            { text: 'Game Topics' },
            { text: '8/3 巨人 - 中日' },
            { text: '2019/11/23 12:34' },
            { text: '2019/11/23 12:34' },
            { text: '作業中', dot: 'green' },
            {
                action: [
                    'このワークスペースにコピー', '他のワークスペースにコピー', '削除'
                ]
            }
        ]
    }
]

const headerGame = ['チーム', '08/03', '08/04', '08/05', '08/06', '08/07', '08/08', '08/09'];
const tableGame = [
    {
        item: [
            {
                text: '巨人'
            },
            {
                text: ''
            },
            {
                text: {
                    name: 'X-X ヤクルト',
                    action: '先発投手'
                }
            },
            {
                text: {
                    name: 'X-X ヤクルト',
                    action: '先発投手'
                }
            },
            {
                text: {
                    name: 'X-X ヤクルト',
                    action: '先発投手'
                }
            },
            {
                text: {
                    name: 'X-X ヤクルト',
                    action: '先発投手'
                }
            },
            {
                text: {
                    name: 'X-X ヤクルト',
                    action: '先発投手'
                }
            },
            {
                text: {
                    name: 'X-X ヤクルト',
                    action: '先発投手'
                }
            },
        ]
    },
    {
        item: [
            {
                text: '巨人'
            },
            {
                text: ''
            },
            {
                text: {
                    name: 'X-X ヤクルト',
                    action: '先発投手'
                }
            },
            {
                text: {
                    name: 'X-X ヤクルト',
                    action: '先発投手'
                }
            },
            {
                text: {
                    name: 'X-X ヤクルト',
                    action: '先発投手'
                }
            },
            {
                text: {
                    name: 'X-X ヤクルト',
                    action: '先発投手'
                }
            },
            {
                text: {
                    name: 'X-X ヤクルト',
                    action: '先発投手'
                }
            },
            {
                text: {
                    name: 'X-X ヤクルト',
                    action: '先発投手'
                }
            },
        ]
    },
    {
        item: [
            {
                text: '巨人'
            },
            {
                text: ''
            },
            {
                text: {
                    name: 'X-X ヤクルト',
                    action: '先発投手'
                }
            },
            {
                text: {
                    name: 'X-X ヤクルト',
                    action: '先発投手'
                }
            },
            {
                text: {
                    name: 'X-X ヤクルト',
                    action: '先発投手'
                }
            },
            {
                text: {
                    name: 'X-X ヤクルト',
                    action: '先発投手'
                }
            },
            {
                text: {
                    name: 'X-X ヤクルト',
                    action: '先発投手'
                }
            },
            {
                text: {
                    name: 'X-X ヤクルト',
                    action: '先発投手'
                }
            },
        ]
    },
    {
        item: [
            {
                text: '巨人'
            },
            {
                text: ''
            },
            {
                text: {
                    name: 'X-X ヤクルト',
                    action: '先発投手'
                }
            },
            {
                text: {
                    name: 'X-X ヤクルト',
                    action: '先発投手'
                }
            },
            {
                text: {
                    name: 'X-X ヤクルト',
                    action: '先発投手'
                }
            },
            {
                text: {
                    name: 'X-X ヤクルト',
                    action: '先発投手'
                }
            },
            {
                text: {
                    name: 'X-X ヤクルト',
                    action: '先発投手'
                }
            },
            {
                text: {
                    name: 'X-X ヤクルト',
                    action: '先発投手'
                }
            },
        ]
    },
    {
        item: [
            {
                text: '巨人'
            },
            {
                text: ''
            },
            {
                text: {
                    name: 'X-X ヤクルト',
                    action: '先発投手'
                }
            },
            {
                text: {
                    name: 'X-X ヤクルト',
                    action: '先発投手'
                }
            },
            {
                text: {
                    name: 'X-X ヤクルト',
                    action: '先発投手'
                }
            },
            {
                text: {
                    name: 'X-X ヤクルト',
                    action: '先発投手'
                }
            },
            {
                text: {
                    name: 'X-X ヤクルト',
                    action: '先発投手'
                }
            },
            {
                text: {
                    name: 'X-X ヤクルト',
                    action: '先発投手'
                }
            },
        ]
    },
    {
        item: [
            {
                text: '巨人'
            },
            {
                text: ''
            },
            {
                text: {
                    name: 'X-X ヤクルト',
                    action: '先発投手'
                }
            },
            {
                text: {
                    name: 'X-X ヤクルト',
                    action: '先発投手'
                }
            },
            {
                text: {
                    name: 'X-X ヤクルト',
                    action: '先発投手'
                }
            },
            {
                text: {
                    name: 'X-X ヤクルト',
                    action: '先発投手'
                }
            },
            {
                text: {
                    name: 'X-X ヤクルト',
                    action: '先発投手'
                }
            },
            {
                text: {
                    name: 'X-X ヤクルト',
                    action: '先発投手'
                }
            },
        ]
    }
]
class AdminDelivery extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isShowDropdown: false
        }
    }
    getItemsPage = (event) => {
        // console.log(event)
    }

    changeShowDropdown = (e) => {
        this.setState({
            isShowDropdown: !this.state.isShowDropdown
        })
    }

    addData = () => {
        const wrapWorkspace = document.getElementById('wrap-workspace');
        wrapWorkspace.style.display = 'block';
        wrapWorkspace.style.top = '50vh';
        wrapWorkspace.style.transform = 'translate(-50%, -50%)';
    }

    hideAddWorkspace = () => {
        const wrapWorkspace = document.getElementById('wrap-workspace');
        wrapWorkspace.style.display = 'none';
    }

    actionButton = (i, k) => {
        const wrapSearch = document.getElementById('wrap-game-search');
        const wrapSearch1 = document.getElementById('wrap-game-search1');
        const wrapPlayerSearch = document.getElementById('wrap-player-search');
        if (i === 1) {
            wrapSearch.style.display = 'block';
        } else if (i === 0) {
            wrapSearch1.style.display = 'block';
        } else {
            wrapPlayerSearch.style.display = 'block';
        }
    }

    activeLi = (e) => {
        const tabGame = document.querySelectorAll('.tab-game li');
        for (let i = 0; i < tabGame.length; i++) {
            tabGame[i].style.color = '#6E7F8A';
            tabGame[i].style.border = 'none';
        }
        e.target.style.color = '#3D3DF2';
        e.target.style.borderBottom = '4px solid #3D3DF2';
    }


    hideDeleteTopic = () => {
        const deleteTopic = document.getElementById('wrap-delete-topic');
        deleteTopic.style.display = 'none';
    }

    actionItemDropdownDot = (i, k) => {
        if (k === 2) {
            const deleteTopic = document.getElementById('wrap-delete-topic');
            deleteTopic.style.display = 'block';
        } else if (k === 1) {
            const copyTopic = document.getElementById('wrap-copy-topic');
            copyTopic.style.display = 'block';
        }
    }

    hideCopyTopic = () => {
        const copyTopic = document.getElementById('wrap-copy-topic');
        copyTopic.style.display = 'none';
    }

    render() {
        return (
            <Fragment>
                <div className="wrapper-content admin-delivery w-100 d-flex justify-content-start">
                    <div className="delivery w-42">
                        <div className="title w-100 d-inline-flex align-items-center font-weight-bold">
                            <h3>納品物</h3>
                            <div className="search position-relative">
                                <input type="text" />
                                <img alt="search" src="/img/search_silver.png" className="position-absolute" />
                            </div>
                            <div className="add">
                                {/* <button className="btn">ワークスペースを追加</button> */}
                                <Button
                                    title={'ワークスペースを追加'}
                                    showIcon={true}
                                    isDropdown={false}
                                    addData={() => this.addData()}
                                />
                            </div>
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
                                                                        <p>{value.item.name}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="date h-100 ">
                                                                    <div className="d-inline-flex justify-content-end align-items-center">
                                                                        <div className="mr-1">更新日時：</div>
                                                                        <div>YYYY/mm/dd HH:mm</div>
                                                                    </div>
                                                                    <div>
                                                                        {
                                                                            value.item.status
                                                                                ? <button className="btn btn-secondary btn-sm d-block ml-auto">{value.item.status}</button>
                                                                                : null
                                                                        }
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
                                    <div className="last-update-date d-flex flex-row justify-content-end align-items-center">
                                        <div className="mr-1">最終更新日時：</div>
                                        <div>名前 名前</div>
                                    </div>
                                </div>
                            </div>
                            <div className="note-space w-100 p-2">メモ</div>
                            <div className="wrapper-table table">
                                <div>
                                    <Table
                                        showPagination={true}
                                        showAction={true}
                                        showSearch={false}
                                        alignLeft={true}
                                        showcheckAll={false}
                                        showCheckbox={true}
                                        itemOfPage={table}
                                        header={header2}
                                        actionItemDropdownDot={this.actionItemDropdownDot}
                                    />
                                </div>
                                <div className="but-drop">
                                    <Button
                                        indexEvent={(i) => this.actionButton(i)}
                                        title={'Topicsを追加'}
                                        showIcon={true}
                                        isDropdown={true}
                                        itemDropdown={['ゲームから追加', '球団から追加', '選手から追加']} />
                                </div>
                            </div>
                        </div>
                        <div className="work-space-action">
                            <div className="name-customer d-flex align-items-center">
                                <label>宛先</label>
                                <div>
                                    <span>クライアント名</span>
                                    <img alt="delete" src="/img/ic_delete.png" />
                                </div>
                                <div>
                                    <span>クライアント名</span>
                                    <img alt="delete" src="/img/ic_delete.png" />
                                </div>
                            </div>
                            <div>
                                <input type="text" placeholder="菅野 智之" className="form-control rounded" />
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="delete d-flex align-items-center">
                                    <img alt="draft" src="/img/ic_draft.png" />
                                    <span>ワークスペースを削除</span>
                                </div>
                                <div className="export d-flex align-items-center">
                                    <label>2019/12/12 12:34 公開済</label>
                                    <div>
                                        <img alt='plan' src="/img/ic_plan.png" />
                                        <span>ワークスペースを公開</span>
                                    </div>
                                    {/* <Button
                                            title={'ワークスペースを公開'}
                                            showIcon={true}
                                            isDropdown={false}
                                            urlIcon={'/img/ic_plan.png'}/> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* add workspace */}
                <div className="wrap-workspace" id="wrap-workspace">
                    <div className="workspace">
                        <h4>ワークスペースを追加</h4>
                        <input type="text" placeholder="ワークスペース名" />
                        <div>
                            <div>
                                <span>クライアント名</span>
                                <img alt="delete" src="/img/ic_delete.png" />
                            </div>
                            <div>
                                <span>クライアント名</span>
                                <img alt="delete" src="/img/ic_delete.png" />
                            </div>
                        </div>
                        <input type="text" placeholder="納品予定の宛先" />
                        <div>
                            <p>よく使う宛先</p>
                            <div>
                                <span>クライアント</span>
                                <span>クライアント</span>
                                <span>クライアント</span>
                                <span>クライア</span>
                                <span>クライアント</span>
                                <span>クライアント</span>
                                <span>クライアント</span>
                                <span>クライアント</span>
                                <span>クライアント</span>
                                <span>クライアント</span>
                            </div>
                        </div>
                        <div>
                            <button onClick={() => this.hideAddWorkspace()}>キャンセル</button>
                            <button>追加</button>
                        </div>
                    </div>

                </div>

                {/* player game search */}
                <div className="wrap-game-search" id="wrap-game-search">
                    <div className="game-search">
                        <h4>球団を選択</h4>
                        <ul>
                            <li>
                                <img alt="icon" src="/img/Fighters.png" />
                                <span>巨人</span>
                            </li>
                            <li>
                                <img alt="icon" src="/img/Fighters.png" />
                                <span>巨人</span>
                            </li>
                            <li>
                                <img alt="icon" src="/img/Fighters.png" />
                                <span>巨人</span>
                            </li>
                            <li>
                                <img alt="icon" src="/img/Fighters.png" />
                                <span>巨人</span>
                            </li>
                            <li>
                                <img alt="icon" src="/img/Fighters.png" />
                                <span>巨人</span>
                            </li>
                            <li>
                                <img alt="icon" src="/img/Fighters.png" />
                                <span>巨人</span>
                            </li>
                            <li>
                                <img alt="icon" src="/img/Fighters.png" />
                                <span>巨人</span>
                            </li>
                            <li>
                                <img alt="icon" src="/img/Fighters.png" />
                                <span>巨人</span>
                            </li>
                            <li>
                                <img alt="icon" src="/img/Fighters.png" />
                                <span>巨人</span>
                            </li>
                            <li>
                                <img alt="icon" src="/img/Fighters.png" />
                                <span>巨人</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* player game search 1 */}
                <div className="wrap-game-search1" id="wrap-game-search1">
                    <div className="game-search1">
                        <h4>ゲームを選択</h4>
                        <div className="title-game-search">
                            <ul className="tab-game">
                                <li className="active-game-search" onClick={(e) => this.activeLi(e)}>セ・リーグ</li>
                                <li onClick={(e) => this.activeLi(e)}>セ・リーグ</li>
                            </ul>
                            <div>
                                <button>前の週</button>
                                <button>前日</button>
                                <button>今日</button>
                                <button>翌日</button>
                                <button>次の週</button>
                            </div>

                            <div>
                                <div>
                                    <input type="date" defaultValue="2019-08-06" className="time-option"></input>
                                </div>
                                <select>
                                    <option>全球団</option>
                                </select>
                            </div>
                        </div>
                        <div className="table-game-search">
                            <Table styleTh={true} showCheckbox={false} header={headerGame} itemOfPage={tableGame} showSearch={false} showPagination={false} />
                        </div>
                    </div>
                </div>
                {/* delete topic */}

                <div className="wrap-delete-topic" id="wrap-delete-topic">
                    <div className="delete-topic">
                        <h4>ワークスペースを削除</h4>
                        <p>このワークスペースを削除します。よろしいですか？</p>
                        <div>
                            <button onClick={() => this.hideDeleteTopic()}>キャンセル</button>
                            <button>削除</button>
                        </div>
                    </div>
                </div>


                {/* copy topic other */}
                <div className="wrap-copy-topic" id="wrap-copy-topic">
                    <div className="copy-topic">
                        <h4>他のワークスペースにコピー</h4>
                        <div>
                            <ul>
                                <li>ワークスペース名</li>
                                <li>ワークスペース名</li>
                                <li>ワークスペース名</li>
                                <li>ワークスペース名</li>
                                <li>ワークスペース名</li>
                                <li>ワークスペース名</li>
                                <li>ワークスペース名</li>
                            </ul>
                        </div>
                        <div>
                            <button onClick={() => this.hideCopyTopic()}>キャンセル</button>
                            <button>コピーする</button>
                        </div>
                    </div>
                </div>

                {/* player search */}
                <div className="wrap-player-search" id="wrap-player-search">
                    <div className="player-search">
                        <div>
                            <input type='text' placeholder="選手名" />
                            <img alt='search' src='/img/search_icon.png' />
                        </div>
                        <ul>
                            <li>選手名</li>
                            <li>選手名</li>
                            <li>選手名</li>
                        </ul>

                    </div>
                </div>
            </Fragment>
        )
    }
}
export default AdminDelivery