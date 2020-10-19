import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const propTypes = {
    items: PropTypes.array.isRequired,
    onChangePage: PropTypes.func.isRequired,
    initialPage: PropTypes.number,
    pageSize: PropTypes.number,
    showPagination: PropTypes.bool
}

const defaultProps = {
    initialPage: 1,
    pageSize: 10,
    showPagination: true
}


class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = { pager: {} };
    }

    UNSAFE_componentWillMount() {
        if (this.props.items && this.props.items.length) {
            this.setPage(this.props.initialPage);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.items !== prevProps.items) {
            this.setPage(this.props.initialPage);
        }
    }

    setPage(page) {
        var { items, pageSize, showPagination } = this.props;
        var pager = this.state.pager;
        if (page < 1 || page > pager.totalPages) {
            return;
        }
        pager = this.getPager(items.length, page, pageSize, showPagination);
        // var pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);
        this.setState({ pager: pager });
        // this.props.onChangePage(pageOfItems);
    }

    getPager(totalItems, currentPage, pageSize, showPagination) {
        currentPage = currentPage || 1;
        pageSize = pageSize || 10;
        var totalPages = Math.ceil(totalItems / pageSize);
        var startPage, endPage;
        if (totalPages <= 10) {
            startPage = 1;
            endPage = totalPages;
        } else {
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        var pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages,
            showPagination: showPagination
        };
    }

    render() {
        var pager = this.state.pager;
        if (!pager.pages || pager.pages.length <= 1) {
            return null;
        }
        return (
            <nav>
                {pager.showPagination ?
                    <ul className="pagination">
                        <li className={`page-item ${pager.currentPage === 1 ? 'disabled' : ''}`} onClick={() => this.setPage(1)}>
                            <span className="page-link">最初へ</span>
                        </li>
                        <li className={`page-item ${pager.currentPage === 1 ? 'disabled' : ''}`} onClick={() => this.setPage(pager.currentPage - 1)}>
                            <span className="page-link">前へ</span>
                        </li>
                        {pager.pages.map((page, index) =>
                            <li key={index} className={pager.currentPage === page ? 'active' : ''} onClick={() => this.setPage(page)}>
                                <span className="page-link" >{page}</span>
                            </li>
                        )}
                        <li className={`page-item ${pager.currentPage === pager.totalPages ? 'disabled' : ''}`} onClick={() => this.setPage(pager.currentPage + 1)}>
                            <span className="page-link">次へ</span>
                        </li>
                        <li className={`page-item ${pager.currentPage === pager.totalPages ? 'disabled' : ''}`} onClick={() => this.setPage(pager.totalPages)}>
                            <span className="page-link">最後へ</span>
                        </li>
                    </ul> : ''
                }
            </nav>
        );
    }
}
Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;
export default Pagination;