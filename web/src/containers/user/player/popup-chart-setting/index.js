import React, { Component } from "react";
import { withLocalize } from "react-localize-redux";
import "./style.scss";

class PopupChartSetting extends Component {

    addCondition = (e) => {
        console.log(e);
    }

    removeCondition = (e) => {
        console.log(e);
    }

    render() {
        return (
            <div className='chart-setting popup'>
                <div className='popup_inner'>
                    <h3 className="title-popup">絞り込み条件</h3>
                    <div className="line-1">
                        <select className="form-control">
                            <option>シーズン</option>
                            <option>シーズン</option>
                            <option>シーズン</option>
                            <option>シーズン</option>
                        </select>
                        <input type="text" className="input-form" name="name" placeholder="値" />
                        <img onClick={this.removeCondition} src="/img/ic_delete2.png" alt="Alt text" />
                    </div>
                    <div className="line-2">
                        <button onClick={this.addCondition} >条件を追加</button>
                    </div>
                    <div className="line-3">
                        <div className="md-checkbox-custom">
                            <input id="i2" type="checkbox" />
                            <label htmlFor="i2">期間</label>
                        </div>
                        <input type="date" defaultValue="2019-08-06" className="time-option" />
                        <span>〜</span>
                        <input type="date" defaultValue="2019-08-06" className="time-option" />
                    </div>
                    <div className="button">
                        <p onClick={this.props.closePopup}>キャンセル</p>
                        <p>更新</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default withLocalize(PopupChartSetting);