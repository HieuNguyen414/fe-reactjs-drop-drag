import React, { Component } from "react";
import { withLocalize } from "react-localize-redux";
import "./style.scss";

class PopupFilter extends Component {

    handleChange = (e, value) => {
        console.log(value);
    }

    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <h3 className="title-popup">グラフ設定</h3>
                    <div className="line-1">
                        <div>
                            <p className="title-select">X軸</p>
                            <select className="form-control">
                                <option>シーズン</option>
                                <option>シーズン</option>
                                <option>シーズン</option>
                                <option>シーズン</option>
                            </select>
                        </div>
                        <div>
                            <p className="title-select">Y軸</p>
                            <select className="form-control">
                                <option>シーズン</option>
                                <option>シーズン</option>
                                <option>シーズン</option>
                                <option>シーズン</option>
                            </select>
                        </div>
                        <div>
                            <p className="title-select">目盛</p>
                            <select className="form-control">
                                <option>試合</option>
                                <option>試合</option>
                                <option>試合</option>
                                <option>試合</option>
                            </select>
                        </div>
                    </div>
                    <div className="line-2">
                        <p className="title-select">対象</p>
                        <select className="form-control">
                            <option>試合</option>
                            <option>試合</option>
                            <option>試合</option>
                            <option>試合</option>
                        </select>
                    </div>
                    <input type="text" className="input-form" name="name" value={'菅野 智之'} placeholder="Placeholder" onChange={this.handleChange} />
                    <input type="text" className="input-form" placeholder="Placeholder" />
                    <div className="button">
                        <p onClick={this.props.closePopup}>キャンセル</p>
                        <p>更新</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default withLocalize(PopupFilter);