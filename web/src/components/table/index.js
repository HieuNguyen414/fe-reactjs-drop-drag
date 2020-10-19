import React, { Component } from 'react';
import './styles.scss';
import Common from '../../common/services/loadingServices';
import Loading from '../loading';
import Pagination from '../pagination'

const defaultProps = {
    showCheckbox: true,
    showcheckAll: false,
    centerItem: true,
    showAction: false,
    showPagination: true,
    showPaginationTop: false,
    isShowOptionTable: false
}

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageOfItems: [],
            show: false,
            isShowDropdown: false,
            header: null
        };
        this.common = Common;
    }

    onChangePage = (pageOfItems) => {
        this.setState({ pageOfItems: pageOfItems });
    }

    UNSAFE_componentWillMount = () => {
        this.setState({ pageOfItems: this.props.itemOfPage, header: this.props.header });
    }

    UNSAFE_componentWillReceiveProps = (nextProps) => {
        this.setState({ pageOfItems: nextProps.itemOfPage, header: nextProps.header });
    }


    handleCheckAll(ev) {
        var table = document.getElementById('myTable');
        var checkboxes = table.querySelectorAll('input[type=checkbox]');
        var val = checkboxes[0].checked;
        for (var i = 0; i < checkboxes.length; i++) checkboxes[i].checked = val;
        // this.props.handleCheckAll(ev);
    }

    // handleCheck(ev) {
    //     console.log(ev);
    // }

    handleModal(ev) {
        const modal = document.getElementById('idModal');
        ev === 'open' ? modal.classList.add('show') : modal.classList.remove('show');
    }

    // handleConfirmModal(ev) {
    //     console.log(ev);
    // }

    showLoading = () => {
        this.setState({
            show: true
        })
        this.common.showLoading();
    }

    hide = () => {
        this.common.hideLoading();
    }

    changeShowDropdown = (e) => {
        const selectDropdown = e.target.parentNode.firstChild.nextSibling;
        if (this.state.isShowDropdown) {
            selectDropdown.style.display = 'none';
            this.setState({
                isShowDropdown: false
            })
        } else {
            selectDropdown.style.display = 'block';
            this.setState({
                isShowDropdown: true
            })
        }
    }

    offDropdown = (e, key, item) => {
        const selectDropdown = e.target.parentNode;
        selectDropdown.style.display = 'none';

        this.props.actionItemDropdownDot(e, key, item);
    }

    itemInTable = (data) => {
        if (data.item) {
            return data.item.map((val, i) => {
                if (typeof val.text == 'object') {
                    if (val.link) {
                        return <td className="border-0" key={i}>
                            <div onClick={this.props.openLink} className="link-double link">
                                <span>{val.text.name}</span>
                                <span>{val.text.action}</span>
                            </div>
                        </td>
                    } else {
                        return <td className="border-0 " key={i}>
                            <div className="link-double">
                                <span>{val.text.name}</span>
                                <span>{val.text.action}</span>
                            </div>
                        </td>
                    }
                } if (val.action) {
                    if (typeof val.action == 'object') {
                        return <td className="border-0 w-4" key={i}>
                        <div className="btn-group dropdown-dot">
                            <img src="/img/more_vert_24px.png" alt="dot" className=" dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={(e) => this.changeShowDropdown(e)} />
                            <div className="dropdown-menu dropdown-menu-right">
                                {val.action.map((value, key) => {
                                    return <button key={key.toString()} className="dropdown-item" type="button" onClick={(e) => this.offDropdown(e, key, data.item)}>{value}</button>
                                })}
                            </div>
                        </div>
                    </td>
                    } else {
                        return <td className="border-0 w-4" key={i}>
                                    <div className="btn-group dropdown-dot">
                                        <img src={val.action} alt="copy" className="" onClick={(e) => this.actionOther(e)} />
                                    </div>
                                </td>
                    }
                    
                } else {
                    return (
                        <td className="border-0 isIcon" key={i}>
                            <div className={`flex-table  ${val.img ? 'justify-left-table' : 'justify-center-table'}`}>
                                {val.img ? <span> <img className="icon mr-1" src={val.img} alt="" /> </span> : ''}
                                {val.dot ? <span className={`dot dot-${val.dot} mr-1`}></span> : ''}
                                {val.position ? <span className={`position mr-1`}>{val.position}</span> : ''}
                                <span>{val.text}</span>
                            </div>
                        </td>
                    )
                }
            })
        }
    }

    actionOther = (e) => {
        
    }

    render() {

        const { showCheckbox, showPaginationTop, showAction, showPagination, showcheckAll, centerItem, getData, isShowOptionTable, titleTable, styleTh } = this.props;
        const header = this.props.header;
        return (
            <div className=" wrap-table"  >
                {
                    titleTable
                        ? <div className={`title-table d-flex align-items-center ` + (titleTable ? titleTable.pl : '')}>
                            {titleTable
                                ? titleTable.dot
                                    ? <div className={"title-circle " + (titleTable.background)}></div>
                                    : false
                                : ''}

                            {titleTable
                                ? <p className="mb-0 title-text">{titleTable.text}</p>
                                : ''}
                        </div>
                        : null
                }

                {showPaginationTop ?
                    <Pagination
                        pageSize={5}
                        showPagination={showPaginationTop}
                        items={this.state.pageOfItems}
                        onChangePage={this.onChangePage} />
                    : ''}

                <table id="myTable" >
                    <thead>
                        <tr className="header">
                            {showCheckbox && showcheckAll ?
                                <td className="check">
                                    {/* <div>
                                        <input
                                            type="checkbox"
                                            onClick={() => this.handleCheckAll(this.state.pageOfItems)} />
                                    </div> */}
                                    <div className="md-checkbox-custom">
                                        <input type="checkbox" value="check" />
                                        <label></label>
                                    </div>
                                </td> : null}

                            {header.map((items, index) => (
                                styleTh
                                    ? <th key={index.toString()} >{items}</th>
                                    : <th key={index.toString()} className={!styleTh ? 'border-0 text-center' : ''} >
                                        <span className={!styleTh ? 'span-th' : ''}>{items}</span>
                                    </th>
                            ))}
                            {showAction ?
                                <td> </td> : null}
                        </tr>

                    </thead>
                    <tbody>
                        {this.state.pageOfItems && this.state.pageOfItems.map((items, index) => (
                            <tr className={centerItem ? 'item-center' : 'item-left'} key={index.toString()}>
                                {showCheckbox ?
                                    <td className="check border-0">
                                        <div className="md-checkbox-custom">
                                            <input id={index} type="checkbox" />
                                            {/* <input id={index} type="checkbox" onClick={(event) => { this.handleCheck(items) }} /> */}
                                            <label htmlFor={index}></label>
                                        </div>
                                    </td> : null}

                                {this.itemInTable(items)}
                            </tr>
                        ))}
                    </tbody>
                </table>
                {showPagination ?
                    <Pagination
                        pageSize={5}
                        showPagination={showPagination}
                        items={this.state.pageOfItems}
                        onChangePage={this.onChangePage} /> : ''}

                {isShowOptionTable ?
                    <div className="p-1">
                        <button onClick={() => this.handleModal('open')} className="btn btn-primary">alert</button>
                        <button onClick={this.showLoading} className="btn btn-primary">show-loading</button>
                        <button onClick={this.hide} className="btn btn-primary">hide-loading</button>
                        <button onClick={getData} className="btn btn-primary">Get data</button>
                    </div> : ''}

                <Loading show={this.state.show} />
            </div>
        )
    }
}

Table.defaultProps = defaultProps;
export default Table