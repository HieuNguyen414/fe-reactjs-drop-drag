import React, { Component, Fragment } from "react";
import { withLocalize } from "react-localize-redux";
import "./style.scss";
import Table from "../../../components/table";
import Button from "../../../components/button";
import AdminUserSetting from "./admin-user-setting";
import AdminUserAdd from "./admin-user-add";
import AdminUserDelete from "./admin-user-delete";
// import Pagination from "../../../components/pagination";

const header = ['名前', 'ログインID', '権限', '']
const dataAdminUser = []

for (let i = 0; i < 20; i++) {
    dataAdminUser.push(
        {
            item: [
                { text: 'スタッフ名' },
                { text: 'idname' },
                { text: '運用管理者' },
                {
                    action: [
                        '設定変更', '削除'
                    ]
                }
            ]
        }
    )
}

class AdminUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModalAdd: false,
            showModalSetting: false,
            showModalDelete: false
        }
    }

    addData = () => {
        this.setState({ showModalAdd: true })
    }

    handleActionTable = (key, val) => {
        console.log(key, val);
        val === 0 && this.setState({ showModalSetting: true })
        val === 1 && this.setState({ showModalDelete: true })
    }

    render() {
        return (
            <Fragment>
                <div className="admin-user">
                    <div className="block-title">
                        <h2 className="block-title__text--main">スタッフ</h2>
                        <div className="search-custom">
                            <input type="text" className="searchbox" placeholder="検索" />
                            <Button showIcon={true} title="新規作成" addData={() => this.addData()} />
                        </div>
                    </div>

                    <div className="block-content">
                        <div className="wrapper">
                            <Table header={header}
                                showPaginationTop={true}
                                showCheckbox={false}
                                actionItemDropdownDot={this.handleActionTable}
                                showSearch={false}
                                itemOfPage={dataAdminUser} />
                        </div>
                    </div>
                    {this.state.showModalAdd ? <AdminUserAdd onClose={() => this.setState({ showModalAdd: false })} /> : ''}
                    {this.state.showModalSetting ? <AdminUserSetting onClose={() => this.setState({ showModalSetting: false })} /> : ''}
                    {this.state.showModalDelete ? <AdminUserDelete onClose={() => this.setState({ showModalDelete: false })} /> : ''}
                </div>
            </Fragment>
        )
    }
}

export default withLocalize(AdminUser);