import React, { Component } from "react";
import { withLocalize } from "react-localize-redux";
import "./style.scss";
import PitcherContent from "./pitcher-content";
import BatterContent from "./batter-content";

class PerformanceByCondition extends Component {

    openTab = (e, tabName) => {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(tabName).style.display = "block";
        e.currentTarget.className += " active";
    }

    render() {
        return (
            <div className="condition">
                <div className="condition-control">
                    <select className="form-control">
                        <option>2019</option>
                        <option>2018</option>
                        <option>2017</option>
                        <option>2016</option>
                    </select>

                    <div className="wrapper-tab">
                        <button className="tablinks active" onClick={(e) => this.openTab(e, 'pitcher')} id="defaultOpen" >投手</button>
                        <button className="tablinks" onClick={(e) => this.openTab(e, 'batter')} >打者</button>
                    </div>
                </div>

                <div className="condition-content">
                    <div id="pitcher" className="tabcontent">
                        <PitcherContent />
                    </div>

                    <div id="batter" className="tabcontent">
                        <BatterContent />
                    </div>
                </div>
            </div>
        )
    }
}

export default withLocalize(PerformanceByCondition);