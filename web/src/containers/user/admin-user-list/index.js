import React, { Fragment } from 'react';
import './style.scss';
import Table from '../../../components/table';
import Button from '../../../components/button';


const header = ['名前', 'ログインID', 'グループ名', '備考', ''];
const header1 = ['グループ名', '人数', '']

const table = [
    {
        item: [
            {
                text: '名前'
            },
            {
                text: 'idname'
            },
            {
                text: 'group'
            },
            {
                text: 'フリーテキスト'
            },
            {
                action: ['設定変更', '削除']
            }
        ]
    },
    {
        item: [
            {
                text: '名前'
            },
            {
                text: 'idname'
            },
            {
                text: 'group'
            },
            {
                text: 'フリーテキスト'
            },
            {
                action: ['設定変更', '削除']
            }
        ]
    },
    {
        item: [
            {
                text: '名前'
            },
            {
                text: 'idname'
            },
            {
                text: 'group'
            },
            {
                text: 'フリーテキスト'
            },
            {
                action: ['設定変更', '削除']
            }
        ]
    },
    {
        item: [
            {
                text: '名前'
            },
            {
                text: 'idname'
            },
            {
                text: 'group'
            },
            {
                text: 'フリーテキスト'
            },
            {
                action: ['設定変更', '削除']
            }
        ]
    },
    {
        item: [
            {
                text: '名前'
            },
            {
                text: 'idname'
            },
            {
                text: 'group'
            },
            {
                text: 'フリーテキスト'
            },
            {
                action: ['設定変更', '削除']
            }
        ]
    },
    {
        item: [
            {
                text: '名前'
            },
            {
                text: 'idname'
            },
            {
                text: 'group'
            },
            {
                text: 'フリーテキスト'
            },
            {
                action: ['設定変更', '削除']
            }
        ]
    },
    {
        item: [
            {
                text: '名前'
            },
            {
                text: 'idname'
            },
            {
                text: 'group'
            },
            {
                text: 'フリーテキスト'
            },
            {
                action: ['設定変更', '削除']
            }
        ]
    },
    {
        item: [
            {
                text: '名前'
            },
            {
                text: 'idname'
            },
            {
                text: 'group'
            },
            {
                text: 'フリーテキスト'
            },
            {
                action: ['設定変更', '削除']
            }
        ]
    },
    {
        item: [
            {
                text: '名前'
            },
            {
                text: 'idname'
            },
            {
                text: 'group'
            },
            {
                text: 'フリーテキスト'
            },
            {
                action: ['設定変更', '削除']
            }
        ]
    },
    {
        item: [
            {
                text: '名前'
            },
            {
                text: 'idname'
            },
            {
                text: 'group'
            },
            {
                text: 'フリーテキスト'
            },
            {
                action: ['設定変更', '削除']
            }
        ]
    },
    {
        item: [
            {
                text: '名前'
            },
            {
                text: 'idname'
            },
            {
                text: 'group'
            },
            {
                text: 'フリーテキスト'
            },
            {
                action: ['設定変更', '削除']
            }
        ]
    },
    {
        item: [
            {
                text: '名前',
            },
            {
                text: 'idname',
            },
            {
                text: 'group',
            },
            {
                text: 'フリーテキスト',
            },
            {
                action: ['設定変更', '削除']
            }
        ],

    }
]

const table1 = [
    {
        item: [
            {
                text: '人数'
            },
            {
                text: '12'
            },
            {
                action: [
                    'グループ名変更',
                    '編集',
                    '削除'
                ]
            }
        ]
    },
    {
        item: [
            {
                text: '人数'
            },
            {
                text: '12'
            },
            {
                action: [
                    'グループ名変更',
                    '編集',
                    '削除'
                ]
            }
        ]
    },
    {
        item: [
            {
                text: '人数'
            },
            {
                text: '12'
            },
            {
                action: [
                    'グループ名変更',
                    '編集',
                    '削除'
                ]
            }
        ]
    },
    {
        item: [
            {
                text: '人数'
            },
            {
                text: '12'
            },
            {
                action: [
                    'グループ名変更',
                    '編集',
                    '削除'
                ]
            }
        ]
    },
    {
        item: [
            {
                text: '人数'
            },
            {
                text: '12'
            },
            {
                action: [
                    'グループ名変更',
                    '編集',
                    '削除'
                ]
            }
        ]
    },
    {
        item: [
            {
                text: '人数'
            },
            {
                text: '12'
            },
            {
                action: [
                    'グループ名変更',
                    '編集',
                    '削除'
                ]
            }
        ]
    }
]

const arrButton = [
    'ユーザーを追加', 'グループを追加'
]

class AdminUserList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isShowDropdown: false,
            isShowTable: true
        }
    }

    activeButton = (e, boolean) => {
        const parent = document.getElementById('title-middle');
        parent.childNodes.forEach((val) => {
            val.style.color = '#6E7F8A';
            val.style.backgroundColor = '#E8ECEF';
        })
        e.target.style.color = 'white';
        e.target.style.backgroundColor = '#3D3DF2';

        if (boolean) {
            this.setState({
                isShowTable: true
            })
        } else {
            this.setState({
                isShowTable: false
            })
        }
    }

    showTable = () => {
        if (this.state.isShowTable) {
            return (
                <div className="user-list">
                    <Table showPagination={true} showPaginationTop={true} header={header} showCheckbox={false} showSearch={false} itemOfPage={table} actionItemDropdownDot={(e, k) => this.actionItemDropdownDot(e, k)} />
                </div>
            )
        } else {
            return (
                <div className="group-list">
                    <Table showPagination={true} showPaginationTop={true} header={header1} showCheckbox={false} showSearch={false} itemOfPage={table1} actionItemDropdownDot={(e, k) => this.actionItemDropdownDot2(e, k)} />
                </div>
            )
        }
    }

    actionItemDropdownDot = (e, k) => {
        console.log(k)
        const companySetting = document.getElementById('wrap-company-setting');
        if (k === 0) {
            companySetting.style.display = 'block';
        }
    }

    actionItemDropdownDot2 = (e, k) => {
        const addToGroup = document.getElementById('add-user-group');
        console.log(k)
        if (k===0) {
            addToGroup.style.display = 'block';
        }
    }

    hideCompanySetting = () => {
        const companySetting = document.getElementById('wrap-company-setting');
        companySetting.style.display = 'none';
    }

    hideAddGroup = () => {
        const addGroup = document.getElementById('wrap-add-group');
        addGroup.style.display = 'none';
    }

    eventItemInButton = (i) => {
        console.log(i)
        const addGroup = document.getElementById('wrap-add-group');
        if (i === 0) {
            this.showAddCompany();
        } else {
            addGroup.style.display = 'block';
        }
    }

    addData = () => {
        const addUser = document.getElementById('wrap-add-user');
        addUser.style.display = 'block';
        addUser.style.top = '50vh';
        addUser.style.transform = 'translate(-50%, -50%)';

    }

    hideAddUser = () => {
        const addUser = document.getElementById('wrap-add-user');
        addUser.style.display = 'none';
    }

    showButton = () => {
        if (this.state.isShowTable) {
            return (
                <Button showIcon={true} title="新規追加" addData={() => this.addData()} />
            )
        } else {
            return (
                <Button indexEvent={(i) => this.eventItemInButton(i)} showIcon={true} isDropdown={true} itemDropdown={arrButton} title="新規追加" />
            )
        }
    }

    showAddCompany = () => {
        const add = document.getElementById('wrap-add-company');
        add.style.display = 'block';
    }

    hideAddCompany = () => {
        const add = document.getElementById('wrap-add-company');
        add.style.display = "none";
    }

    hideAddToGroup = () => {
        const addToGroup = document.getElementById('add-user-group');
        addToGroup.style.display = 'none';
    }

    render() {
        return (
            <Fragment>
                <div className="client--list">
                    <div className="client--list-top">
                        <div className="title-left">
                            <img src="/img/ic_back.png" alt="back" />
                            <h4>企業名</h4>
                        </div>
                        <div className="title-middle" id="title-middle">
                            <button onClick={(e) => this.activeButton(e, true)}>個人</button>
                            <button onClick={(e) => this.activeButton(e, false)}>グループ</button>
                        </div>
                        <div style={{display: 'flex'}}>
                            <div className="search-custom">
                                <input type="text" className="searchbox" placeholder="検索" />
                                {/* <button type="button" className="button">新規作成</button> */}
                            </div>
                            {
                                this.showButton()
                            }
                        </div>
                    </div>

                    <div className="client--list-bottom">
                        {
                            this.showTable()
                        }
                    </div>
                </div>
                {/* add company */}
                <div id="wrap-add-company">
                    <div className="add-company">
                        <h4>企業追加</h4>
                        <div>
                            <label>企業名</label>
                            <input type='text' placeholder="A新聞社" />
                        </div>
                        <div>
                            <label>企業コード</label>
                            <input type='text' placeholder="123456789" />
                        </div>
                        <div className="group-btn-add">
                            <button onClick={() => this.hideAddCompany()}>キャンセル</button>
                            <button>追加</button>
                        </div>
                    </div>
                </div>

                {/* add group */}

                <div id="wrap-add-group">
                    <div className="add-group">
                        <h4>グループ追加</h4>
                        <div>
                            <input type="text" placeholder="グループ名" />
                        </div>
                        <div className="group-btn-add">
                            <button onClick={() => this.hideAddGroup()}>キャンセル</button>
                            <button>追加</button>
                        </div>
                    </div>
                </div>

                {/* add user to group */}
                <div id="add-user-group">
                    <div className="user-to-group">
                        <p>グループのユーザーを選択</p>
                        <ul>
                            <li>
                                <span>グループのユーザーを選択</span>
                                <div className="md-checkbox-custom">
                                    <input id="n2" type="checkbox" />
                                    <label htmlFor="n2"></label>
                                </div>

                            </li>
                            <li>
                                <span>グループのユーザーを選択</span>
                                <div className="md-checkbox-custom">
                                    <input id="n3" type="checkbox" />
                                    <label htmlFor="n3"></label>
                                </div>

                            </li>
                            <li>
                                <span>グループのユーザーを選択</span>
                                <div className="md-checkbox-custom">
                                    <input id="n3" type="checkbox" />
                                    <label htmlFor="n3"></label>
                                </div>

                            </li>
                            <li>
                                <span>グループのユーザーを選択</span>
                                <div className="md-checkbox-custom">
                                    <input id="n3" type="checkbox" />
                                    <label htmlFor="n3"></label>
                                </div>

                            </li>
                            <li>
                                <span>グループのユーザーを選択</span>
                                <div className="md-checkbox-custom">
                                    <input id="n3" type="checkbox" />
                                    <label htmlFor="n3"></label>
                                </div>

                            </li>
                            <li>
                                <span>グループのユーザーを選択</span>
                                <div className="md-checkbox-custom">
                                    <input id="n3" type="checkbox" />
                                    <label htmlFor="n3"></label>
                                </div>

                            </li>
                            <li>
                                <span>グループのユーザーを選択</span>
                                <div className="md-checkbox-custom">
                                    <input id="n3" type="checkbox" />
                                    <label htmlFor="n3"></label>
                                </div>

                            </li>
                        </ul>
                        <div className="group-btn">
                            <button onClick={() => this.hideAddToGroup()}>キャンセル</button>
                            <button>追加</button>
                        </div>
                    </div>
                </div>

                {/* setting company */}

                <div className="wrap-company-setting" id="wrap-company-setting">
                    <div className="company-setting">
                        <h4>編集</h4>
                        <div>
                            <label>名前</label>
                            <div>
                                <input placeholder="菅野 智之" type="text" />
                            </div>
                        </div>
                        <div>
                            <label>パスワード</label>
                            <div>
                                <input placeholder="********" type="password" />
                            </div>

                        </div>
                        <div>
                            <label>名前</label>
                            <div>
                                <select>
                                    <option>Bグループ</option>
                                </select>
                            </div>

                        </div>
                        <div>
                            <label></label>
                            <div>
                                <select>
                                    <option>Bグループ</option>
                                </select>
                                <div>
                                    <img src="/img/ic_delete2.png" alt="remove" />
                                </div>

                            </div>

                        </div>
                        <div>
                            <label></label>
                            <div>
                                <button>グループを追加</button>
                            </div>

                        </div>
                        <div>
                            <label>備考</label>
                            <div>
                                <textarea></textarea>
                            </div>
                        </div>
                        <div>
                            <button onClick={() => this.hideCompanySetting()}>キャンセル</button>
                            <button>変更</button>
                        </div>
                    </div>
                </div>


                {/* add user */}

                <div className="wrap-add-user" id="wrap-add-user">
                    <div className="add-user">
                        <h4>利用者追加</h4>
                        <div>
                            <label>名前</label>
                            <div>
                                <input placeholder="菅野 智之" type="text" />
                            </div>
                        </div>
                        <div>
                            <label>パスワード</label>
                            <div>
                                <input placeholder="********" type="password" />
                            </div>

                        </div>
                        <div>
                            <label>グループ</label>
                            <div>
                                <select>
                                    <option>Bグループ</option>
                                </select>
                            </div>

                        </div>
                        <div>
                            <label></label>
                            <div>
                                <select>
                                    <option>Bグループ</option>
                                </select>
                                <div>
                                    <img src="/img/ic_delete2.png" alt="remove" />
                                </div>

                            </div>

                        </div>
                        <div>
                            <label></label>
                            <div>
                                <button>グループを追加</button>
                            </div>

                        </div>
                        <div>
                            <label>備考</label>
                            <div>
                                <textarea></textarea>
                            </div>
                        </div>
                        <div>
                            <button onClick={() => this.hideAddUser()}>キャンセル</button>
                            <button>変更</button>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default AdminUserList