import React, { Component } from "react";
import "./style.scss";
import { withLocalize } from "react-localize-redux";
import TabPlayer from "./tab";
import { Switch, Route } from "react-router-dom";
import BasicInfomation from "./basic-infomation";
import PerformanceByCondition from "./performance-by-condition";
import GameLogs from "./game-logs";
import PerformanceByYear from "./performance-by-year";
import PlayerAddTopic from "./add-topic";
import { forEach } from 'lodash';

class Player extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rate: {
                contact: 10,
                ballZoneSwing: 30,
                stealSuccess: 50,
                firstStrikeSwing: 100,
                iso: 25,
                hittingSpeed: 99
            },
            player: {
                name: '坂本 勇人',
                image: '/img/Giants.png',
                nickname: '巨人',
                position: '内野手',
                bloodGroup: '右投右打',
                height: '186',
                weight: '83',
                old: '31',
                from: '光星学院高（甲',
                round: 'ドラフト2006年（高 1巡目',
                condition: '好調',
                status: '8/16（木）再登録可能　再調整',
            }
        }
    }


    navigateTeamReport = () => {
        this.props.history.push('/team-report');
    }

    componentDidMount() {
        let ovals = document.getElementsByClassName('oval');
        forEach(ovals, oval => {
            let percent = oval.getAttribute('data-percent')
            oval.style.left = `${percent}%`;
            oval.style.backgroundColor = percent < 33.33 ? "#3D3DF2" :
                percent < 66.66 ? "#6E7F8A" : "#FA3E3E"
        })
    }

    render() {
        return (
            <div className="player">
                <div className="block-title">
                    <img src={this.state.player.image} alt="Alt text" onClick={this.navigateTeamReport} />
                    <h2>{this.state.player.name}</h2>
                </div>
                <div className="block-general-info">
                    <div className="left">
                        <div className="wrap-img">
                            <img src="/img/assignment_ind_24px.png" alt="Alt text" />
                        </div>
                        <div className="wrap-content">
                            <p className="bold-text">{this.state.player.nickname} | {this.state.player.position} | {this.state.player.bloodGroup} | {this.state.player.height}cm | {this.state.player.weight}kg | {this.state.player.old}歳</p>
                            <p className="light-text">{this.state.player.from} | {this.state.player.round}</p>
                            <p className="label">{this.state.player.condition}</p>
                            <p className="status">{this.state.player.status}</p>
                        </div>
                    </div>
                    <div className="right">
                        <div className="area-1">
                            <p className="bold-text">能力値</p>
                            <div className="wrapper">
                                <span className="blue-text">Poor</span>
                                <span className="gray-text">Avg</span>
                                <span className="red-text">Great</span>
                            </div>
                        </div>
                        <div className="area-2">
                            <p className="light-text">コンタクト率</p>
                            <div className="line">
                                <span className="dot"></span>
                                <span className="dot"></span>
                                <span className="dot"></span>
                            </div>
                            <p className="oval" data-percent={this.state.rate.contact}></p>

                            <p className="light-text">ボールゾーンスイング率</p>
                            <div className="line">
                                <span className="dot"></span>
                                <span className="dot"></span>
                                <span className="dot"></span>
                            </div>
                            <p className="oval" data-percent={this.state.rate.ballZoneSwing}></p>

                            <p className="light-text">盗塁成功率</p>
                            <div className="line">
                                <span className="dot"></span>
                                <span className="dot"></span>
                                <span className="dot"></span>
                            </div>
                            <p className="oval" data-percent={this.state.rate.stealSuccess}></p>
                        </div>
                        <div className="area-3">
                            <p className="light-text">ファーストストライクスイング率</p>
                            <div className="line">
                                <span className="dot"></span>
                                <span className="dot"></span>
                                <span className="dot"></span>
                            </div>
                            <p className="oval" data-percent={this.state.rate.firstStrikeSwing}></p>

                            <p className="light-text">ISO</p>
                            <div className="line">
                                <span className="dot"></span>
                                <span className="dot"></span>
                                <span className="dot"></span>
                            </div>
                            <p className="oval" data-percent={this.state.rate.iso}></p>

                            <p className="light-text">打球速</p>
                            <div className="line">
                                <span className="dot"></span>
                                <span className="dot"></span>
                                <span className="dot"></span>
                            </div>
                            <p className="oval" data-percent={this.state.rate.hittingSpeed}></p>
                        </div>
                    </div>
                </div>
                <div className="block-tabs">
                    <TabPlayer />
                </div>
                <div className="block-content">
                    <Switch>
                        <Route path="/player" exact component={BasicInfomation} />
                        <Route path="/player/performance-by-condition" component={PerformanceByCondition} />
                        <Route path="/player/game-logs" component={GameLogs} />
                        <Route path="/player/performance-by-year" component={PerformanceByYear} />
                        {/* <Route path="/player/ds-topic" component={} />
                        <Route path="/player/user-topic" component={} /> */}
                        <Route path="/player/add-topic" component={PlayerAddTopic} />
                    </Switch>
                </div>
            </div>
        )
    }
}

export default withLocalize(Player);