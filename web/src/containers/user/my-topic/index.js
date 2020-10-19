import React, { Fragment } from 'react';
import './style.scss';
import Table from './../../../components/table/index';
import Button from '../../../components/button';

const header = ['タイトル','ワークスペース','ワークスペース','対象', '作成日時', '更新日時', ''];


const table = [
    {
        item : [
            {
                text : 'Topicsタイトル'
            },
            {
                text : 'ワークスペース名'
            },
            {
                text : 'Game Topics'
            },
            {
                text : '8/3 巨人 - 中日'
            },
            {
                text : '2019/11/23 12:34'
            },
            {
                text : '2019/11/23 12:34'
            },
            {
                action : ['ワークスペースにコピー','複製','編集','削除']
            }
        ]
    },
    {
        item : [
            {
                text : 'Topicsタイトル'
            },
            {
                text : 'ワークスペース名'
            },
            {
                text : 'Game Topics'
            },
            {
                text : '8/3 巨人 - 中日'
            },
            {
                text : '2019/11/23 12:34'
            },
            {
                text : '2019/11/23 12:34'
            },
            {
                action : ['ワークスペースにコピー','複製','編集','削除']
            }
        ]
    },
    {
        item : [
            {
                text : 'Topicsタイトル'
            },
            {
                text : 'ワークスペース名'
            },
            {
                text : 'Game Topics'
            },
            {
                text : '8/3 巨人 - 中日'
            },
            {
                text : '2019/11/23 12:34'
            },
            {
                text : '2019/11/23 12:34'
            },
            {
                action : ['ワークスペースにコピー','複製','編集','削除']
            }
        ]
    },
    {
        item : [
            {
                text : 'Topicsタイトル'
            },
            {
                text : 'ワークスペース名'
            },
            {
                text : 'Game Topics'
            },
            {
                text : '8/3 巨人 - 中日'
            },
            {
                text : '2019/11/23 12:34'
            },
            {
                text : '2019/11/23 12:34'
            },
            {
                action : ['ワークスペースにコピー','複製','編集','削除']
            }
        ]
    },
    {
        item : [
            {
                text : 'Topicsタイトル'
            },
            {
                text : 'ワークスペース名'
            },
            {
                text : 'Game Topics'
            },
            {
                text : '8/3 巨人 - 中日'
            },
            {
                text : '2019/11/23 12:34'
            },
            {
                text : '2019/11/23 12:34'
            },
            {
                action : ['ワークスペースにコピー','複製','編集','削除']
            }
        ]
    },
    {
        item : [
            {
                text : 'Topicsタイトル'
            },
            {
                text : 'ワークスペース名'
            },
            {
                text : 'Game Topics'
            },
            {
                text : '8/3 巨人 - 中日'
            },
            {
                text : '2019/11/23 12:34'
            },
            {
                text : '2019/11/23 12:34'
            },
            {
                action : ['ワークスペースにコピー','複製','編集','削除']
            }
        ]
    }
]
class MyTopic extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            
        }
    }

    addData = () => {

    }

    actionItemDropdownDot = (_k, v) => {
        const addToWorkspace = document.getElementById('wrap-add-workspace');
        if (v === 0) {
            addToWorkspace.style.display = 'block';
        }
    }

    hideTopicAddWorkspace = () => {
        const addToWorkspace = document.getElementById('wrap-add-workspace');
        addToWorkspace.style.display = 'none';
    }
    
    render() {
        return (
            <Fragment>
                <div className="wrap-my-topic">
                    <div className="title-my-topic">
                        <h1>My Topics</h1>
                        <div className="title-right">
                            <div className="search ">
                                <input type="text" />
                                <img alt="search" src="/img/search_silver.png"  />
                            </div>
                            <Button addData={() => this.addData()} title='Topicsを作成' showIcon={true} urlIcon="/img/plus_icon.png" />
                        </div>
                    </div>
                    <div className="content-my-topic">
                        <div>
                            <Table actionItemDropdownDot={this.actionItemDropdownDot} header={header} itemOfPage={table} showPaginationTop={true} showCheckbox={false}   />
                        </div>
                    </div>
                </div>

                <div className="wrap-add-workspace" id="wrap-add-workspace">
                    <div className="topic-add-workspace">
                        <h4>ワークスペースに追加</h4>
                        <ul>
                            <li>ワークスペース名</li>
                            <li>ワークスペース名</li>
                            <li>ワークスペース名</li>
                            <li>ワークスペース名</li>
                            <li>ワークスペース名</li>
                            <li>ワークスペース名</li>
                            <li>ワークスペース名</li>
                            <li>ワークスペース名</li>
                        </ul>
                        <div>
                            <button onClick={() => this.hideTopicAddWorkspace()}>キャンセル</button>
                            <button>決定</button>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default MyTopic;