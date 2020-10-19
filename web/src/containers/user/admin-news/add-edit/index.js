import React, { Component } from "react";
import "./style.scss";
import { withLocalize } from "react-localize-redux";
import SearchAutoComplete from "../../../../components/search-autocomplete";

class OptionAdminNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDropdown: false,
            infomation: '',
        }
    }

    onChange = (ev) => {
        ev ? this.setState({ showDropdown: true }) : this.setState({ showDropdown: false });
    }

    clickItemDropdown = (e) => {
        console.log(e);
    }

    onChangeDataInput = (event) => {
        let name = event.target.name
        let value = event.target.value
        this.setState({
            [name]: value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
    }

    render(){
        let pathname = this.props.history.location.pathname;
        let searchAdd = pathname.search('/add')
        let isAdd = searchAdd > 0 ? true : false 
        
        return(
            <div className="news">
                <div className="block-title">
                    <img src="/img/arrow_back.png" alt="Arrow Icon" onClick={() => {this.props.history.goBack()}} />
                    <h2 className="block-title__text--main">{isAdd ? '新規お知らせの追加' : 'お知らせの編集'}</h2>
                </div>

                <form className="block-content" onSubmit={this.onSubmit}>
                    <section className="left">
                        <h4 className="title">お知らせ内容</h4>
                        <textarea className="textarea" 
                            name="infomation"
                            value={this.state.infomation}
                            onChange={this.onChangeDataInput}
                        ></textarea>
                    </section>
                    <section className="right">
                        <div className="right-top">
                            <h4 className="title">宛先指定</h4>
                            <SearchAutoComplete showDropdown={this.state.showDropdown} onChange={this.onChange} clickItemDropdown={this.clickItemDropdown} />
                        </div>
                        <div className="right-bottom">
                            <h4 className="title">公開設定</h4>
                            <h4 className="title no-border">公開日時</h4>
                            <div className="form-date">
                                <input type="date" defaultValue="2019-12-12" className="time-option" />
                                <span>@</span>
                                <input type="number" max="24" defaultValue="12" className="hour-option" />
                                <input type="number" max="60" defaultValue="34" className="minute-option" />
                            </div>
                            <div className="block-button">
                                <button>お知らせを削除</button>
                                <button type="submit">{isAdd ? '変更する' : '変更する'}</button>
                            </div>
                        </div>
                    </section>
                </form>
            </div>
        )
    }
}

export default withLocalize(OptionAdminNews);