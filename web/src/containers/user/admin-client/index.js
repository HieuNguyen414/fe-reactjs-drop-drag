import React, { Fragment } from 'react';
import './style.scss';
import Table from './../../../components/table/index';
import Button from '../../../components/button';

const header = ['名前','ログインID',''];


const table = [
    {
        item : [
            {
                text : 'なまえ'
            },
            {
                text : 'loginid'
            },
            {
                action : ['設定変更', '削除']
            }
        ]
    },
    {
        item : [
            {
                text : 'なまえ'
            },
            {
                text : 'loginid'
            },
            {
                action : ['設定変更', '削除']
            }
        ]
    },{
        item : [
            {
                text : 'なまえ'
            },
            {
                text : 'loginid'
            },
            {
                action : ['設定変更', '削除']
            }
        ]
    },{
        item : [
            {
                text : 'なまえ'
            },
            {
                text : 'loginid'
            },
            {
                action : ['設定変更', '削除']
            }
        ]
    },{
        item : [
            {
                text : 'なまえ'
            },
            {
                text : 'loginid'
            },
            {
                action : ['設定変更', '削除']
            }
        ]
    },{
        item : [
            {
                text : 'なまえ'
            },
            {
                text : 'loginid'
            },
            {
                action : ['設定変更', '削除']
            }
        ]
    },{
        item : [
            {
                text : 'なまえ'
            },
            {
                text : 'loginid'
            },
            {
                action : ['設定変更', '削除']
            }
        ]
    },{
        item : [
            {
                text : 'なまえ'
            },
            {
                text : 'loginid'
            },
            {
                action : ['設定変更', '削除']
            }
        ]
    },
]
class AdminClient extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            
        }
    }

    addData = () => {
        const addIndividual = document.getElementById('wrap-individual-add');
        addIndividual.style.display = 'block';
    }

    showDeleteUser = (e, k) => {
        const userDelete = document.getElementById('wrap-user-delete');
        if (k === 0) {
            userDelete.style.display = 'block';
        }
    }

    hideDeleteUser = () => {
        const userDelete = document.getElementById('wrap-user-delete');
        userDelete.style.display = 'none';
    }

    hideAddIndividual = () => {
        const addIndividual = document.getElementById('wrap-individual-add');
        addIndividual.style.display = 'none';
    }
    
    render() {
        return (
            <Fragment>
                <div className="admin-individual">
                    <div className="individual-title">
                        <h4>顧客</h4>
                        <div>
                            <button>企業</button>
                            <button>個人</button>
                        </div>
                        <div>
                            <div className="search">
                                <input type='text' placeholder="検索"  />
                                <img alt="search" src="/img/search_silver.png" />
                            </div>
                            <Button addData={() => this.addData()} title="新規作成" showIcon={true} />
                        </div>
                    </div>

                    <div className="individual-content">
                        <div>
                            <Table actionItemDropdownDot={(e, k) => this.showDeleteUser(e, k)}  showCheckbox={false} showPaginationTop={true}  header={header} itemOfPage={table} />
                        </div>
                    </div>
                </div>  
            
                <div className="wrap-user-delete" id="wrap-user-delete">
                    <div className="user-delete">
                        <h4>ユーザーの削除</h4>
                        <p>このユーザーを削除します。本当によろしいですか？</p>
                        <div>
                            <div>
                                <label>ログインID : </label>
                                <span>loginid</span>
                            </div>
                            <div>
                                <label>所属企業 : </label>
                                <span>企業名</span>
                            </div>
                            <div>
                                <label>所属グループ : </label>
                                <span>グループ名</span>
                            </div>

                        </div>
                        <div>
                            <button onClick={() => this.hideDeleteUser()}>キャンセル</button>
                            <button>削除</button>
                        </div>
                    </div>
                </div>
            
                <div className="wrap-individual-add" id="wrap-individual-add">
                    <div className="individual-add">
                        <h4>個人利用者追加</h4>
                        <div>
                            <div>
                                <label>ログインID</label>
                                <input type="text" placeholder="loginid" />
                            </div>
                            <div>
                                <label>名前</label>
                                <input type="text" placeholder="菅野 智之" />
                            </div>
                            <div>
                                <label>パスワード</label>
                                <input type="password" placeholder="********" />
                            </div>
                        </div>
                        <div>
                            <button onClick={() => this.hideAddIndividual()}>キャンセル</button>
                            <button>追加</button>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default AdminClient;