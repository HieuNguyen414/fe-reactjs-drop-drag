import React, { Fragment } from 'react';
import './style.scss';
import {
    connect
} from 'react-redux';
import 'rc-datepicker/lib/style.css';

const headerResult = [
    {
        text : '順位'
    },
    {
        text : '選手',
        
    },
    {
        text : '総投球数',
        icon : '/img/ic_arrow_down.png'
    },
    {
        text : '投球'
    },
    {
        text : '平均'
    },
    {
        text : '最高'
    },
    {
        text : '投球'
    },
    {
        text : '平均'
    },
    {
        text : '最高'
    },
    {
        text : '投球'
    },
    {
        text : '平均'
    },
    {
        text : '平均'
    },
    {
        text : '最高'
    },
    {
        text : '最高'
    },
    {
        text : '投球'
    },
    {
        text : '平均'
    },
    {
        text : '平均'
    },
    {
        text : '最高'
    },
    {
        text : '平均'
    },
    {
        text : '平均'
    },
    {
        text : '最高'
    }
]

const header = [
    {
        text : '順位'
    },
    {
        text : '選手',
        
    },
    {
        text : '総投球数',
        icon : '/img/ic_arrow_down.png'
    },
    {
        text : '投球'
    },
    {
        text : '平均'
    },
    {
        text : '最高'
    },
    {
        text : '投球'
    },
    {
        text : '平均'
    },
    {
        text : '最高'
    },
    {
        text : '投球'
    },
    {
        text : '平均'
    },
    {
        text : '平均'
    },
    {
        text : '最高'
    },
    {
        text : '投球'
    },
    {
        text : '平均'
    },
    {
        text : '投球'
    },
    {
        text : '平均'
    },
    {
        text : '平均'
    },
    {
        text : '最高'
    },
    {
        text : '投球'
    },
    {
        text : '平均'
    },
    {
        text : '投球'
    },
    {
        text : '平均'
    },
    {
        text : '平均'
    },
    {
        text : '最高'
    },
    {
        text : '投球'
    },
    {
        text : '平均'
    },{
        text : '投球'
    },
    {
        text : '平均'
    },
    {
        text : '平均'
    }
];

const tableResult = [
    {
        item: [
            {
                text: '1'
            },
            {
                text: '菅野 智之',
                img: '/img/Hawks.png'
            },
            {
                text: '326'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            }
        ]
    },
    {
        item: [
            {
                text: '1'
            },
            {
                text: '菅野 智之',
                img: '/img/Hawks.png'
            },
            {
                text: '326'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            }
        ]
    },
    {
        item: [
            {
                text: '1'
            },
            {
                text: '菅野 智之',
                img: '/img/Hawks.png'
            },
            {
                text: '326'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            }
        ]
    },
    {
        item: [
            {
                text: '1'
            },
            {
                text: '菅野 智之',
                img: '/img/Hawks.png'
            },
            {
                text: '326'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            }
        ]
    },
    {
        item: [
            {
                text: '1'
            },
            {
                text: '菅野 智之',
                img: '/img/Hawks.png'
            },
            {
                text: '326'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            }
        ]
    },
    {
        item: [
            {
                text: '1'
            },
            {
                text: '菅野 智之',
                img: '/img/Hawks.png'
            },
            {
                text: '326'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            }
        ]
    },
    {
        item: [
            {
                text: '1'
            },
            {
                text: '菅野 智之',
                img: '/img/Hawks.png'
            },
            {
                text: '326'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            }
        ]
    }
]

const table = [
    {
        item: [
            {
                text: '1'
            },
            {
                text: '菅野 智之',
                img: '/img/Hawks.png'
            },
            {
                text: '326'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            }
        ]
    },
    {
        item: [
            {
                text: '1'
            },
            {
                text: '菅野 智之',
                img: '/img/Hawks.png'
            },
            {
                text: '326'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            }
        ]
    },
    {
        item: [
            {
                text: '1'
            },
            {
                text: '菅野 智之',
                img: '/img/Hawks.png'
            },
            {
                text: '326'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            }
        ]
    },
    {
        item: [
            {
                text: '1'
            },
            {
                text: '菅野 智之',
                img: '/img/Hawks.png'
            },
            {
                text: '326'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            }
        ]
    },
    {
        item: [
            {
                text: '1'
            },
            {
                text: '菅野 智之',
                img: '/img/Hawks.png'
            },
            {
                text: '326'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            }
        ]
    },
    {
        item: [
            {
                text: '1'
            },
            {
                text: '菅野 智之',
                img: '/img/Hawks.png'
            },
            {
                text: '326'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            }
        ]
    },
    {
        item: [
            {
                text: '1'
            },
            {
                text: '菅野 智之',
                img: '/img/Hawks.png'
            },
            {
                text: '326'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            }
        ]
    },
    {
        item: [
            {
                text: '1'
            },
            {
                text: '菅野 智之',
                img: '/img/Hawks.png'
            },
            {
                text: '326'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            },
            {
                text: '100'
            }
        ]
    },

]



const custome = [
    {
        id: 1,
        res: '項目'
    },
    {
        id: 2,
        res: '項目'
    },
    {
        id: 3,
        res: '項目'
    }
]

class LeaderBoard extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            selectedDate: '2019/8/6',
            isShowLeaderBoard: true,
            isShowIndividual: false,
            isShowTitleSearch: true,
            isEditInput: false
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange(date) {
        this.setState({
            selectedDate: date
        });
    }

    showLeaderBoard = (e, i) => {
        e.target.style.color = 'white';
        e.target.style.backgroundColor = '#3D3DF2';
        e.target.style.border = '1px solid #3D3DF2';
        if (i === 0) {
            this.setState({
                isShowLeaderBoard: true,
                isShowIndividual: false,
                isShowTitleSearch: true
            });
            e.target.parentNode.lastChild.style.backgroundColor = '#F2F5F7';
            e.target.parentNode.lastChild.style.color = '#6E7F8A';
            e.target.parentNode.lastChild.style.border = '1px solid #D1D9DE';

        } else {
            this.setState({
                isShowLeaderBoard: false,
                isShowIndividual: false,
                isShowTitleSearch: false
            });
            e.target.parentNode.firstChild.style.backgroundColor = '#F2F5F7';
            e.target.parentNode.firstChild.style.color = '#6E7F8A';
            e.target.parentNode.firstChild.style.border = '1px solid #D1D9DE';
        }

        e.target.parentNode.parentNode.firstChild.nextSibling.firstChild.style.backgroundColor = '#3D3DF2';
        e.target.parentNode.parentNode.firstChild.nextSibling.firstChild.style.color = 'white';
        e.target.parentNode.parentNode.firstChild.nextSibling.firstChild.style.border = '1px solid #3D3DF2';
        e.target.parentNode.parentNode.firstChild.nextSibling.lastChild.style.backgroundColor = '#F2F5F7';
        e.target.parentNode.parentNode.firstChild.nextSibling.lastChild.style.color = '#6E7F8A';
        e.target.parentNode.parentNode.firstChild.nextSibling.lastChild.style.border = '1px solid #D1D9DE';

    }

    showIndividual = (e, i) => {
        e.target.style.color = 'white';
        e.target.style.backgroundColor = '#3D3DF2';
        e.target.style.border = '1px solid #3D3DF2';
        if (i === 1) {
            e.target.parentNode.firstChild.style.backgroundColor = '#F2F5F7';
            e.target.parentNode.firstChild.style.color = '#6E7F8A';
            e.target.parentNode.firstChild.style.border = '1px solid #D1D9DE';
            this.setState({
                isShowIndividual: true,
                isShowTitleSearch: true

            })
        } else {
            e.target.parentNode.parentNode.firstChild.firstChild.style.backgroundColor = '#3D3DF2';
            e.target.parentNode.parentNode.firstChild.firstChild.style.color = 'white';
            e.target.parentNode.parentNode.firstChild.firstChild.style.border = '1px solid #3D3DF2';
            e.target.parentNode.parentNode.firstChild.lastChild.style.backgroundColor = '#F2F5F7';
            e.target.parentNode.parentNode.firstChild.lastChild.style.color = '#6E7F8A';
            e.target.parentNode.parentNode.firstChild.lastChild.style.border = '1px solid #D1D9DE';
            e.target.parentNode.lastChild.style.backgroundColor = '#F2F5F7';
            e.target.parentNode.lastChild.style.color = '#6E7F8A';
            e.target.parentNode.lastChild.style.border = '1px solid #D1D9DE';
            this.setState({
                isShowIndividual: false,
                isShowLeaderBoard: true
            })
        }
    }

    showItemSelect = () => {
        const itemSelect = document.getElementById('wrap-item-select');
        itemSelect.style.display = 'block';
    }

    hideItemSelect = () => {
        const itemSelect = document.getElementById('wrap-item-select');
        itemSelect.style.display = 'none';
    }

    showFilter = () => {
        const filter = document.getElementById('wrap-filter');
        filter.style.display = 'block';
    }

    hideFilter = () => {
        const filter = document.getElementById('wrap-filter');
        filter.style.display = 'none';
    }

    showCustomeAdd = () => {
        const customeAdd = document.getElementById('wrap-custome-add');
        customeAdd.style.display = 'block';
    }


    hideCustomeAdd = () => {
        const customeAdd = document.getElementById('wrap-custome-add');
        customeAdd.style.display = 'none';
    }

    showCustomeEdit = () => {
        const customeEdit = document.getElementById('wrap-custome-edit');
        customeEdit.style.display = 'block';
    }


    hideCustomeEdit = () => {
        const customeEdit = document.getElementById('wrap-custome-edit');
        customeEdit.style.display = 'none';
    }

    changeReadOnly = (e) => {
        this.setState({
            isEditInput: true
        });
        e.target.style.backgroundColor = '#F0F3F5';
        e.target.nextSibling.style.display = 'block';
    }

    render() {
        return (
            <Fragment>
                <div className="wrap-leader-board">
                    <div className="title-leader-board">
                        <h3>リーダーボード</h3>
                        <div>
                            <div>
                                <select>
                                    <option>新規カスタムレポート</option>
                                </select>
                            </div>
                            <button onClick={() => this.showCustomeAdd()}>保存</button>
                            <div onClick={() => this.showCustomeEdit()}>
                                <img alt='setting' src='/img/ic_setting.png' />
                            </div>
                            <div>
                                <img alt="download" src='/img/ic_download.png' />
                                <span>CSVダウンロード</span>
                            </div>
                        </div>

                    </div>

                    <div className="content-leader-board">
                        <div className="options-leader-board">
                            <div className="option-top">
                                <div>
                                    <button onClick={(e) => this.showLeaderBoard(e, 0)}>個人</button>
                                    <button onClick={(e) => this.showLeaderBoard(e, 1)}>チーム</button>
                                </div>
                                <div>
                                    <button onClick={(e) => this.showIndividual(e, 0)}>投手成績</button>
                                    <button onClick={(e) => this.showIndividual(e, 1)}>打撃成績</button>
                                </div>
                                <div>
                                    {
                                        this.state.isShowLeaderBoard
                                            ? <select>
                                                <option>被打率(走者・カウント・打順)</option>
                                            </select>
                                            : <select>
                                                <option>球速</option>
                                            </select>
                                    }

                                </div>
                                <div >
                                    <select>
                                        <option>2019年</option>
                                    </select>
                                    <select>
                                        <option>球団選択</option>
                                    </select>
                                </div>
                            </div>

                            {
                                this.state.isShowIndividual || this.state.isShowLeaderBoard
                                    ? (<div className="option-bottom">
                                        <div>
                                            <input type='text' placeholder="選手選択" />
                                            <img alt='search' src='/img/search_icon.png' />
                                        </div>
                                        <div>
                                            <div>
                                                <span>選手 名前</span>
                                                <img alt="delete" src="/img/ic_delete.png" />
                                            </div>
                                            <div>
                                                <span>選手 名前</span>
                                                <img alt="delete" src="/img/ic_delete.png" />
                                            </div>
                                            <div>
                                                <span>選手 名前</span>
                                                <img alt="delete" src="/img/ic_delete.png" />
                                            </div>
                                        </div>
                                    </div>)
                                    : null
                            }

                        </div>

                        <div className="table-leader-board">
                            <div className="content-table-leader">
                                <div className="table-head">
                                    <h4>{this.state.isShowIndividual ? '被打率(走者・カウント・打順)' : this.state.isShowLeaderBoard ? '被打率(走者・カウント・打順)' : '球速'}</h4>
                                    <div className="group-btn-head">
                                        <div onClick={() => this.showFilter()}>
                                            <img alt='list' src="/img/ic_list.png" />
                                            <span>絞り込み</span>
                                        </div>
                                        <div onClick={() => this.showItemSelect()}>
                                            <img alt='list' src="/img/ic_setting1.png" />
                                            <span>項目変更</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                {
                                    this.state.isShowIndividual
                                        ? (
                                            <div className="table-result">
                                                <table>
                                                <thead>
                                                    <tr>
                                                        <th colSpan="3"></th>
                                                        <th colSpan="2">ストレート</th>
                                                        <th colSpan="2">シュート</th>
                                                        <th colSpan="2">カットボール</th>
                                                        <th colSpan="2">フォーク</th>
                                                        <th colSpan="2">チェンジアップ</th>
                                                        <th colSpan="2">スライダー</th>
                                                        <th colSpan="2">カーブ</th>
                                                        <th colSpan="2">シンカー</th>
                                                        <th colSpan="2">その他</th>
                                                    </tr>
                                                    <tr>
                                                        {
                                                            headerResult.map((val, i) => {
                                                                return(
                                                                    <th key={i}>
                                                                        {
                                                                            val.icon
                                                                                ? <img alt="download" src={val.icon} />
                                                                                : null 
                                                                        }
                                                                        <span>{val.text}</span>
                                                                    </th>
                                                                )
                                                            })
                                                        }
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                        {
                                                            tableResult.map((value, index) => {
                                                                return(
                                                                    <tr key={index}>
                                                                        {
                                                                            value.item.map((v,i) => {
                                                                                return(
                                                                                    v.img 
                                                                                    ? <td key={i}>
                                                                                        <img alt='img' src={v.img} />
                                                                                        <span>{v.text}</span>
                                                                                    </td>
                                                                                    : <td key={i}>
                                                                                        {v.text}
                                                                                    </td>
                                                                                )
                                                                            })
                                                                        }
                                                                    </tr>
                                                                )
                                                            })
                                                        }
                                                </tbody>
                                            </table>
                                            </div>

                                            
                                        )
                                        : this.state.isShowLeaderBoard
                                            ? (
                                                <div className="table-team">
                                                    <table>
                                                    <thead>
                                                        <tr>
                                                            <th colSpan="3"></th>
                                                            <th colSpan="3">ストレート</th>
                                                            <th colSpan="3">シュート</th>
                                                            <th colSpan="3">カットボール</th>
                                                            <th colSpan="3">フォーク</th>
                                                            <th colSpan="3">チェンジアップ</th>
                                                            <th colSpan="3">スライダー</th>
                                                            <th colSpan="3">カーブ</th>
                                                            <th colSpan="3">シンカー</th>
                                                            <th colSpan="3">その他</th>
                                                        </tr>
                                                        <tr>
                                                            {
                                                                header.map((val, i) => {
                                                                    return(
                                                                        <th key={i}>
                                                                            {
                                                                                val.icon
                                                                                    ? <img alt="download" src={val.icon} />
                                                                                    : null 
                                                                            }
                                                                            <span>{val.text}</span>
                                                                        </th>
                                                                    )
                                                                })
                                                            }
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                            {
                                                                table.map((value, index) => {
                                                                    return(
                                                                        <tr key={index}>
                                                                            {
                                                                                value.item.map((v,i) => {
                                                                                    return(
                                                                                        v.img 
                                                                                        ? <td key={i}>
                                                                                            <img alt='img' src={v.img} />
                                                                                            <span>{v.text}</span>
                                                                                        </td>
                                                                                        : <td key={i}>
                                                                                            {v.text}
                                                                                        </td>
                                                                                    )
                                                                                })
                                                                            }
                                                                        </tr>
                                                                    )
                                                                })
                                                            }
                                                    </tbody>
                                                </table>
                                                </div>
                                            )
                                            : (
                                                <div className="table-team">
                                                    <table>
                                                    <thead>
                                                        <tr>
                                                            <th colSpan="3"></th>
                                                            <th colSpan="3">ストレート</th>
                                                            <th colSpan="3">シュート</th>
                                                            <th colSpan="3">カットボール</th>
                                                            <th colSpan="3">フォーク</th>
                                                            <th colSpan="3">チェンジアップ</th>
                                                            <th colSpan="3">スライダー</th>
                                                            <th colSpan="3">カーブ</th>
                                                            <th colSpan="3">シンカー</th>
                                                            <th colSpan="3">その他</th>
                                                        </tr>
                                                        <tr>
                                                            {
                                                                header.map((val, i) => {
                                                                    return(
                                                                        <th key={i}>
                                                                            {
                                                                                val.icon
                                                                                    ? <img alt="download" src={val.icon} />
                                                                                    : null 
                                                                            }
                                                                            <span>{val.text}</span>
                                                                        </th>
                                                                    )
                                                                })
                                                            }
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                            {
                                                                table.map((value, index) => {
                                                                    return(
                                                                        <tr key={index}>
                                                                            {
                                                                                value.item.map((v,i) => {
                                                                                    return(
                                                                                        v.img 
                                                                                        ? <td key={i}>
                                                                                            <img alt='img' src={v.img} />
                                                                                            <span>{v.text}</span>
                                                                                        </td>
                                                                                        : <td key={i}>
                                                                                            {v.text}
                                                                                        </td>
                                                                                    )
                                                                                })
                                                                            }
                                                                        </tr>
                                                                    )
                                                                })
                                                            }
                                                    </tbody>
                                                </table>
                                                </div>
                                                
                                            )
                                }
                                </div>
                                

                            </div>
                        </div>
                    </div>
                </div>

                {/* cpn item select */}
                <div className="wrap-item-select" id="wrap-item-select">
                    <div className="item-select">
                        <h4>項目カスタマイズ</h4>
                        <div>
                            <ul>
                                <li>ことができます</li>
                                <li>ことができます</li>
                                <li>ことができます</li>
                                <li>ことができます</li>
                                <li>ことができます</li>
                                <li>ことができます</li>
                                <li>ことができます</li>
                            </ul>
                            <div>
                                <div>
                                    <img src="/img/arrow_back.png" alt="arrow-top" />
                                </div>
                                <div>
                                    <img src="/img/arrow_back.png" alt="arrow-top" />
                                </div>
                            </div>
                            <ul>
                                <li>ことができます</li>
                                <li>ことができます</li>
                                <li>ことができます</li>
                                <li>ことができます</li>
                                <li>ことができます</li>
                                <li>ことができます</li>
                                <li>ことができます</li>
                            </ul>
                        </div>
                        <p>項目の表示順はドラッグ&ドロップで変更することができます</p>
                        <div>
                            <button onClick={() => this.hideItemSelect()}>キャンセル</button>
                            <button>更新</button>
                        </div>
                    </div>
                </div>


                {/* cpn filter */}
                <div className="wrap-filter" id="wrap-filter">
                    <div className="filter">
                        <h4>絞り込み条件</h4>
                        <div>
                            <select>
                                <option>シーズン</option>
                            </select>
                            <input type="text" placeholder='値' />
                            <img alt="delete" src="/img/ic_delete2.png" />
                        </div>
                        <button>条件を追加</button>
                        <div>
                            <button onClick={() => this.hideFilter()}>キャンセル</button>
                            <button>更新</button>
                        </div>
                    </div>
                </div>

                {/* cpn custome add */}
                <div className="wrap-custome-add" id="wrap-custome-add">
                    <div className="custome-add">
                        <h4>カスタムレポートを保存</h4>
                        <input type="text" placeholder="レポート名" />
                        <div>
                            <button onClick={() => this.hideCustomeAdd()}>キャンセル</button>
                            <button>更新</button>
                        </div>
                    </div>
                </div>


                {/* cpn custome add */}
                <div className="wrap-custome-edit" id="wrap-custome-edit">
                    <div className="custome-edit">
                        <h4>カスタムレポート管理</h4>
                        <ul>
                            {
                                custome.map((val, i) => {
                                    return (
                                        <li key={i.toString()}>
                                            <input onClick={(e) => this.changeReadOnly(e)} readOnly={!this.state.isEditInput} type="text" placeholder={val.res} />
                                            <img alt="delete" src="/img/ic_delete2.png" />
                                        </li>
                                    )
                                })
                            }

                        </ul>
                        <div>
                            <button onClick={() => this.hideCustomeEdit()}>キャンセル</button>
                            <button>更新</button>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeaderBoard)