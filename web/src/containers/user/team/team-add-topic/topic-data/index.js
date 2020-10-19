import React, { Component } from "react";
import { withLocalize } from "react-localize-redux";
import "./style.scss";

class TopicData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "内角"
        }
    }

    onChangeInput = () => {
        return 0;
    }

    showItemDetail = () => {
        var element = document.getElementById("back");
        element.classList.add("show");
    }

    hideItemDetail = () => {
        var element = document.getElementById("back");
        element.classList.remove("show");
    }

    render(){
        return(
            <div className="topic-data">
                <div className="front">
                    <h4 className="title">打撃</h4>
                    <ul className="dropdown-menu">
                        <li className="item" onClick={this.showItemDetail} >打撃成績</li>
                        <li className="item" onClick={this.showItemDetail} >打球割合</li>
                        <li className="item" onClick={this.showItemDetail} >スイング系</li>
                        <li className="item" onClick={this.showItemDetail} >その他</li>
                        <li className="item" onClick={this.showItemDetail} >ビジュアル</li>
                        <li className="item" onClick={this.showItemDetail} >カスタムレポート</li>
                    </ul>
                    <h4 className="title mt-24">投球</h4>
                    <ul className="dropdown-menu">
                        <li className="item" onClick={this.showItemDetail} >打撃成績</li>
                        <li className="item" onClick={this.showItemDetail} >打球割合</li>
                        <li className="item" onClick={this.showItemDetail} >スイング系</li>
                        <li className="item" onClick={this.showItemDetail} >その他</li>
                        <li className="item" onClick={this.showItemDetail} >ビジュアル</li>
                        <li className="item" onClick={this.showItemDetail} >カスタムレポート</li>
                    </ul>
                </div>

                <div className="back" id="back">
                    <h4 className="title"><span onClick={this.hideItemDetail} ></span>打撃成績</h4>
                    <span className="sub-title">ドラッグ&ドロップで左の枠に追加します</span>
                    <div className="block-form">
                        <input className="form-input" value={this.state.inputValue} onChange={this.onChangeInput} />
                        <input className="form-input" value={this.state.inputValue} onChange={this.onChangeInput} />
                        <input className="form-input" value={this.state.inputValue} onChange={this.onChangeInput} />
                        <input className="form-input" value={this.state.inputValue} onChange={this.onChangeInput} />
                        <input className="form-input" value={this.state.inputValue} onChange={this.onChangeInput} />
                        <input className="form-input" value={this.state.inputValue} onChange={this.onChangeInput} />
                        <input className="form-input" value={this.state.inputValue} onChange={this.onChangeInput} />
                        <input className="form-input" value={this.state.inputValue} onChange={this.onChangeInput} />
                        <input className="form-input" value={this.state.inputValue} onChange={this.onChangeInput} />
                        <input className="form-input" value={this.state.inputValue} onChange={this.onChangeInput} />
                        <input className="form-input" value={this.state.inputValue} onChange={this.onChangeInput} />
                        <input className="form-input" value={this.state.inputValue} onChange={this.onChangeInput} />
                        <input className="form-input" value={this.state.inputValue} onChange={this.onChangeInput} />
                        <input className="form-input" value={this.state.inputValue} onChange={this.onChangeInput} />
                        <input className="form-input" value={this.state.inputValue} onChange={this.onChangeInput} />
                        <input className="form-input" value={this.state.inputValue} onChange={this.onChangeInput} />
                        <input className="form-input" value={this.state.inputValue} onChange={this.onChangeInput} />
                        <input className="form-input" value={this.state.inputValue} onChange={this.onChangeInput} />
                        <input className="form-input" value={this.state.inputValue} onChange={this.onChangeInput} />
                        <input className="form-input" value={this.state.inputValue} onChange={this.onChangeInput} />
                    </div>
                </div>
            </div>
        )
    }
}

export default withLocalize(TopicData);