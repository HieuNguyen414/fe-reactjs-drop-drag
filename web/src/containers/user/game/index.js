import React, { Fragment } from 'react';
import './style.scss';
import Table from './../../../components/table/index';

const header = ['打者', '被打率', '打数', '被安打', '被本塁打', '奪三振', '与四球', '与死球'];

const table = [
    {
        item: [
            {
                text: '中日の打者名',
                img: '/img/TIgers.png'
            },
            {
                text: '.234'
            },
            {
                text: '26'
            },
            {
                text: '26'
            },
            {
                text: '0'
            },
            {
                text: '0'
            },
            {
                text: '0'
            },
            {
                text: '0'
            }

        ]
    },{
        item: [
            {
                text: '中日の打者名',
                img: './img/Group (1).png'
            },
            {
                text: '.234'
            },
            {
                text: '26'
            },
            {
                text: '26'
            },
            {
                text: '0'
            },
            {
                text: '0'
            },
            {
                text: '0'
            },
            {
                text: '0'
            }

        ]
    },
    {
        item: [
            {
                text: '中日の打者名',
                img: './img/Group (1).png'
            },
            {
                text: '.234'
            },
            {
                text: '26'
            },
            {
                text: '26'
            },
            {
                text: '0'
            },
            {
                text: '0'
            },
            {
                text: '0'
            },
            {
                text: '0'
            }

        ]
    },
    {
        item: [
            {
                text: '中日の打者名',
                img: './img/Group (1).png'
            },
            {
                text: '.234'
            },
            {
                text: '26'
            },
            {
                text: '26'
            },
            {
                text: '0'
            },
            {
                text: '0'
            },
            {
                text: '0'
            },
            {
                text: '0'
            }

        ]
    },
    {
        item: [
            {
                text: '中日の打者名',
                img: './img/Group (1).png'
            },
            {
                text: '.234'
            },
            {
                text: '26'
            },
            {
                text: '26'
            },
            {
                text: '0'
            },
            {
                text: '0'
            },
            {
                text: '0'
            },
            {
                text: '0'
            }

        ]
    },
    {
        item: [
            {
                text: '中日の打者名',
                img: './img/Group (1).png'
            },
            {
                text: '.234'
            },
            {
                text: '26'
            },
            {
                text: '26'
            },
            {
                text: '0'
            },
            {
                text: '0'
            },
            {
                text: '0'
            },
            {
                text: '0'
            }

        ]
    },
    {
        item: [
            {
                text: '中日の打者名',
                img: './img/Group (1).png'
            },
            {
                text: '.234'
            },
            {
                text: '26'
            },
            {
                text: '26'
            },
            {
                text: '0'
            },
            {
                text: '0'
            },
            {
                text: '0'
            },
            {
                text: '0'
            }

        ]
    },
    {
        item: [
            {
                text: '中日の打者名',
                img: './img/Group (1).png'
            },
            {
                text: '.234'
            },
            {
                text: '26'
            },
            {
                text: '26'
            },
            {
                text: '0'
            },
            {
                text: '0'
            },
            {
                text: '0'
            },
            {
                text: '0'
            }

        ]
    },
    {
        item: [
            {
                text: '中日の打者名',
                img: './img/Group (1).png'
            },
            {
                text: '.234'
            },
            {
                text: '26'
            },
            {
                text: '26'
            },
            {
                text: '0'
            },
            {
                text: '0'
            },
            {
                text: '0'
            },
            {
                text: '0'
            }

        ]
    },
    {
        item: [
            {
                text: '中日の打者名',
                img: './img/Group (1).png'
            },
            {
                text: '.234'
            },
            {
                text: '26'
            },
            {
                text: '26'
            },
            {
                text: '0'
            },
            {
                text: '0'
            },
            {
                text: '0'
            },
            {
                text: '0'
            }

        ]
    },
    {
        item: [
            {
                text: '中日の打者名',
                img: './img/Group (1).png'
            },
            {
                text: '.234'
            },
            {
                text: '26'
            },
            {
                text: '26'
            },
            {
                text: '0'
            },
            {
                text: '0'
            },
            {
                text: '0'
            },
            {
                text: '0'
            }

        ]
    },
    {
        item: [
            {
                text: '中日の打者名',
                img: './img/Group (1).png'
            },
            {
                text: '.234'
            },
            {
                text: '26'
            },
            {
                text: '26'
            },
            {
                text: '0'
            },
            {
                text: '0'
            },
            {
                text: '0'
            },
            {
                text: '0'
            }

        ]
    },
    {
        item: [
            {
                text: '中日の打者名',
                img: './img/Group (1).png'
            },
            {
                text: '.234'
            },
            {
                text: '26'
            },
            {
                text: '26'
            },
            {
                text: '0'
            },
            {
                text: '0'
            },
            {
                text: '0'
            },
            {
                text: '0'
            }

        ]
    },
    {
        item: [
            {
                text: '中日の打者名',
                img: './img/Group (1).png'
            },
            {
                text: '.234'
            },
            {
                text: '26'
            },
            {
                text: '26'
            },
            {
                text: '0'
            },
            {
                text: '0'
            },
            {
                text: '0'
            },
            {
                text: '0'
            }

        ]
    },
    {
        item: [
            {
                text: '中日の打者名',
                img: './img/Group (1).png'
            },
            {
                text: '.234'
            },
            {
                text: '26'
            },
            {
                text: '26'
            },
            {
                text: '0'
            },
            {
                text: '0'
            },
            {
                text: '0'
            },
            {
                text: '0'
            }

        ]
    }
];

const header2 = ['試合', '勝利', '敗戦', '引分', '得点', '失点', '安打', '本塁打', '三振', '四球', '死球', '死球', '盗塁', '失策', '打率', '防御率'];
const header3 = ['日付', '勝敗', 'スコア', '先発', '責任投手', '球場', '開始時間'];

const table2 = [
    {
        item : [
            {
                text : 20
            },
            {
                text : 20
            },
            {
                text : 20
            },
            {
                text : 20
            },
            {
                text : 20
            },
            {
                text : 20
            },
            {
                text : 20
            },
            {
                text : 20
            },
            {
                text : 20
            },
            {
                text : 20
            },
            {
                text : 20
            },
            {
                text : 20
            },
            {
                text : 20
            },
            {
                text : 20
            },
            {
                text : 20
            },
            {
                text : 20
            },
        ]
    }
]

const table3 = [
    {
        item : [
            {
                text : '10日（日）'
            },
            {
                text : '10日（日）'
            },
            {
                text : '1-3'
            },
            {
                text : '今村'
            },
            {
                text : '勝：今村　S：桜井'
            },
            {
                text : '甲子園'
            },
            {
                text : '13:00'
            }
        ]
    }
]

const tab = [
    '先発情報', '対戦成績', 'Game Topics', 'DS Topics', '菅野 Topics名', '阿部 慎之助'
]

const titleTable = {
    text : 'サマリー',
    pl : 'pl-16'
}

class Game extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            isShowGame2: false,
            statusSubmenu : false
        }
    }

    activeLi = (e, i) => {
        const select = e.target.parentNode.childNodes;
        for (let i = 0; i < select.length; i++) {
            select[i].style.color = '#6E7F8A';
            select[i].style.borderBottom = 'none';
        }
        e.target.style.color = '#3D3DF2';
        e.target.style.borderBottom = '4px solid #3D3DF2';
        if (i === 1) {
            this.setState({
                isShowGame2: true
            });
        } else if (i === 0) {
            this.setState({
                isShowGame2: false
            });
        }
    }

    showGame1 = () => {
        return (
            <div className="game-1">
                <div>
                    <div>
                        <h4>打者別成績</h4>
                    </div>
                    <div>
                        <Table showPagination={false} showCheckbox={false} header={header} itemOfPage={table} />
                    </div>
                </div>
                <div>
                    <div>
                        <h4>打者別成績</h4>
                        <p>先発：菅野 智之</p>
                    </div>
                    <div>
                        <Table showPagination={false} showCheckbox={false} header={header} itemOfPage={table} />
                    </div>
                </div>
            </div>
        )
    }

    showGame2 = () => {
        return (<div className="game-2">
            <div>
                <h4>対戦</h4>
                <div>
                    <button>巨人</button>
                    <button>阪神</button>
                </div>
            </div>
            <div>
                <div>
                    <Table showPagination={false}  titleTable={titleTable} header={header2} itemOfPage={table2} showCheckbox={false}/>
                </div>
                
                <div>
                    <h4>対戦成績(公式戦) </h4>
                    <h4>3月</h4>
                    <Table showPagination={false}  header={header3} itemOfPage={table3} showCheckbox={false} />
                    <h4>4月</h4>
                    <Table showPagination={false} header={header3} itemOfPage={table3} showCheckbox={false} />
                </div>
            </div>
        </div>)
    }

    showSubmenuPlus= () => {
        const subMenu = document.getElementById('sub-menu-plus');
        
        if (!this.state.statusSubmenu) {
            subMenu.style.display = 'block';
            this.setState({
                statusSubmenu : true
            });
        } else {
            this.setState({
                statusSubmenu : false
            });
            subMenu.style.display = 'none';
        }
    }

    showSelectGame = () => {
        const selectGame = document.getElementById('wrap-select-game');
        selectGame.style.display = 'block';
    }

    hideSelectGame = () => {
        const selectGame = document.getElementById('wrap-select-game');
        selectGame.style.display = 'none';
    }

    render() {
        return (
            <Fragment>
                <div className="wrap-game">
                    <div className="title-game">
                        <h3>巨人 - 中日 21回戦</h3>
                        <div>
                            <button>試合結果</button>
                            <button>分析</button>
                        </div>
                    </div>

                    <div className="content-game">
                        <div className="title-match">
                            <div className="people1">
                                <span>先攻</span>
                                <h4>読売ジャイアンツ</h4>
                                <div>
                                    <label>先発</label>
                                    <p>菅野 智之</p>
                                </div>
                            </div>
                            <div className="time-match">
                                <div>
                                    <img alt='logo-people' src="/img/TIgers.png" />
                                    <span>vs</span>
                                    <img alt='logo-people' src="/img/Hawks.png" />
                                </div>
                                <small>2020年9月4日(火)18:00 前橋</small>
                            </div>
                            <div className="people2">
                                <span>先攻</span>
                                <h4>読売ジャイアンツ</h4>
                                <div>
                                    <label>先発</label>
                                    <p>菅野 智之</p>
                                </div>
                            </div>
                        </div>

                        <div className="tab-content-game">
                            <div>
                                <ul>
                                    {
                                        tab.map((val, i) => {
                                            return (
                                                <li key={i} onClick={(e) => this.activeLi(e, i)}>{val}</li>
                                            )
                                        })
                                    }
                                </ul>
                                <div onClick={() => this.showSubmenuPlus()}>
                                    <img alt="plus" src="/img/plus_icon.png" />

                                    <ul id="sub-menu-plus">
                                        <li>Game Topicsを追加</li>
                                        <li onClick={() => this.showSelectGame()}>既存Topicsを追加</li>
                                    </ul>
                                </div>
                            </div>

                            <div>
                                {
                                    this.state.isShowGame2
                                        ? this.showGame2()
                                        : this.showGame1()
                                }
                            </div>
                        </div>
                    </div>
                </div>

                {/* game info select topic */}
                <div className="wrap-select-game" id="wrap-select-game">
                    <div className="select-game-info">
                        <h4>既存Topicsから追加</h4>
                        <div>
                            <div>
                                <input type='text' placeholder='' />
                                <img alt='search' src='/img/search_silver.png' />
                            </div>
                            <ul>
                                <li>Topics名 選手名</li>
                                <li>Topics名 選手名</li>
                                <li>Topics名 選手名</li>
                                <li>Topics名 選手名</li>
                                <li>Topics名 選手名</li>
                                <li>Topics名 選手名</li>
                                <li>Topics名 選手名</li>
                                <li>Topics名 選手名</li>
                            </ul>
                        </div>
                        <div>
                            <button onClick={() => this.hideSelectGame()}>キャンセル</button>
                            <button>決定</button>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Game;