import React, { Fragment } from 'react';
import './styles.scss';

const data = [
    {
        name : '企業名企業名企業名企業名企業名企業名',
        code : '企業コード',
        quantity : '7人のユーザー'
    },
    {
        name : '企業名企業名企業名企業名企業名企業名',
        code : '企業コード',
        quantity : '7人のユーザー'
    },
    {
        name : '企業名企業名企業名企業名企業名企業名',
        code : '企業コード',
        quantity : '7人のユーザー'
    },
    {
        name : '企業名企業名企業名企業名企業名企業名',
        code : '企業コード',
        quantity : '7人のユーザー'
    },
    {
        name : '企業名企業名企業名企業名企業名企業名',
        code : '企業コード',
        quantity : '7人のユーザー'
    },
    {
        name : '企業名企業名企業名企業名企業名企業名',
        code : '企業コード',
        quantity : '7人のユーザー'
    },
    {
        name : '企業名企業名企業名企業名企業名企業名',
        code : '企業コード',
        quantity : '7人のユーザー'
    },
    {
        name : '企業名企業名企業名企業名企業名企業名',
        code : '企業コード',
        quantity : '7人のユーザー'
    },
    {
        name : '企業名企業名企業名企業名企業名企業名',
        code : '企業コード',
        quantity : '7人のユーザー'
    },
    {
        name : '企業名企業名企業名企業名企業名企業名',
        code : '企業コード',
        quantity : '7人のユーザー'
    },
    {
        name : '企業名企業名企業名企業名企業名企業名',
        code : '企業コード',
        quantity : '7人のユーザー'
    },
    {
        name : '企業名企業名企業名企業名企業名企業名',
        code : '企業コード',
        quantity : '7人のユーザー'
    },
    {
        name : '企業名企業名企業名企業名企業名企業名',
        code : '企業コード',
        quantity : '7人のユーザー'
    }
]

class AdminCompany extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isShowDropdown : false
        }
    }

    changeShowDropdown = (e) => {
        const selectDropdown = e.target.parentNode.firstChild.nextSibling;
        if (this.state.isShowDropdown) {
            selectDropdown.style.display = 'none';
            this.setState({
                isShowDropdown : false
            })
        } else {
            selectDropdown.style.display = 'block';
            this.setState({
                isShowDropdown : true
            })
        }
    }

    offDropdown = (e) => {
        const selectDropdown = e.target.parentNode;
        selectDropdown.style.display = 'none';
    }

    render() {
        return (
            <Fragment>
                <div className="admin--company">
                    <div className="admin--company-title d-flex justify-content-between align-items-center">
                        <h3>顧客</h3>
                        <div className="title-middle">
                            <button>企業</button>
                            <button>個人</button>
                        </div>
                        <div className="title-end d-flex">
                            <div className="search-company position-relative d-flex align-items-center">
                                <input type="text" placeholder="検索" />
                                <img alt="search" src="/img/search_silver.png" className="position-absolute" />
                            </div>
                            <button className="add">
                               新規作成
                            </button>
                        </div>
                    </div>
            
            
                    <div className="wrap-items-company">
                    <div className="admin--company-content d-flex flex-wrap ">
                        {
                            data.map((value, index) => {
                                return (
                                    <div className="items-company " key={index}>
                                        <h4 className="name-company">{value.name}</h4>
                                        <p className="code-company">{value.code}</p>
                                        <div className="d-flex justify-content-between">
                                            <label className="quantity-user">{value.quantity}</label>

                                            <div className=" dropdown-dot" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <img src="/img/more_vert_24px.png" alt="dot" className=" multi-dot" onClick={(e) => this.changeShowDropdown(e)}  />
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <button onClick={(e) => this.offDropdown(e)} className="dropdown-item" type="button">編集</button>
                                                    <button onClick={(e) => this.offDropdown(e)} className="dropdown-item" type="button">削除</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    </div>
                    
                </div>
            </Fragment>
        )
    }
}
export default AdminCompany