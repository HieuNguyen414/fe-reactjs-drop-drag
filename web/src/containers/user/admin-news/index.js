import React, { Component } from "react";
import "./style.scss";
import { withLocalize } from "react-localize-redux";
// import Pagination from "../../../components/pagination";
import Table from "../../../components/table";

const header = ['お知らせ内容', '配信先', '公開日時', '']
const dataAdminNews = []

for (let i = 0; i < 10; i++) {
    dataAdminNews.push(
        {
            item: [
                { text: '内容が入ります。内容が入ります。内容が入ります。内容が入ります。内容が入り...' },
                { text: '配信先, 配信先, 配信先, 配信先, 配信先, 配信先, ' },
                { text: '2019/12/12 12:34' },
                {
                    action: [
                        '編集', '削除'
                    ]
                }
            ]
        }
    )
}

class AdminNews extends Component {    

    navigateAddNew = () => {
        this.props.history.push('/admin-news/add')
    }

    actionItemDropdownDot = (event, key, item) => {
        key === 0 ? this.navigateEditNew(item) : this.deleteNew(item)
    }

    navigateEditNew = (item) => {
        this.props.history.push('/admin-news/edit')
    }

    deleteNew = (item) => {
        console.log("Delete");
    }

    render() {
        return (
            <div className="admin-news">
                <div className="block-title">
                    <h2 className="block-title__text--main">お知らせ配信</h2>
                    <div className="block-title__control">
                        <input type="text" className="searchbox" placeholder="検索" />
                        <button type="button" className="button" onClick={this.navigateAddNew} >新規作成</button>
                    </div>
                </div>

                <div className="block-content">
                    <div className="wrapper">
                        <Table showPagination={true} actionItemDropdownDot={this.actionItemDropdownDot} showPaginationTop={true} header={header} showCheckbox={false} showSearch={false} itemOfPage={dataAdminNews} />
                    </div>
                </div>
            </div>
        )
    }
}

export default withLocalize(AdminNews);