import React, { Component } from "react";
import TopicData from './topic-data';
import { withLocalize } from "react-localize-redux";
import "./style.scss";
import PopupFilter from "../popup-filter";
import PopupChartSetting from "../popup-chart-setting";

class PlayerAddTopic extends Component {
    constructor() {
        super();
        this.state = {
            showPopupFilter: false,
            showPopupChartSetting: false,
        };
    }

    togglePopupFilter = () => {
        this.setState({
            showPopupFilter: !this.state.showPopupFilter
        })
    }

    togglePopupChartSetting = () => {
        this.setState({
            showPopupChartSetting: !this.state.showPopupChartSetting
        })
    }

    render() {
        return (
            <div className="add-topic">
                <div className="block-control">
                    <select className="form-control">
                        <option>作業中</option>
                        <option>作業中</option>
                        <option>作業中</option>
                        <option>作業中</option>
                    </select>
                    <div className="block-button">
                        <button type="button" className="btn-delete">Topicsを削除</button>
                        <button type="button" className="btn-copy">Topicsをコピー</button>
                    </div>
                </div>

                <div className="content">
                    <button type="button" className="label">データプールからドラッグ&ドロップで追加</button>
                    <input type="file" name="upload" id="upload" className="upload-box" placeholder="Upload File" />
                </div>
                <TopicData />

                {this.state.showPopupFilter ? 
                    <PopupFilter closePopup={this.togglePopupFilter} />
                    : null  
                }

                {this.state.showPopupChartSetting ? 
                    <PopupChartSetting closePopup={this.togglePopupChartSetting} />
                    : null  
                }

                <div className="block-button">
                    <button type="button" onClick={this.togglePopupFilter}>Open Popup Filter</button>
                    <button type="button" onClick={this.togglePopupChartSetting}>Open Popup Chart Setting</button>
                </div>
            </div>
        )
    }
}

export default withLocalize(PlayerAddTopic);