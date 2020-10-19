import React, { useState } from "react";
import { withLocalize } from "react-localize-redux";
import "./style.scss";
import { Route, Link, useHistory, useRouteMatch } from "react-router-dom";

const TabLinks = ({ label, to, activeOnlyWhenExact, canEdit }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => {
                var active = match ? 'active li' : 'li';
                return (
                    <li className={active}>
                        <Link to={to} className="btn-link" contentEditable={canEdit} suppressContentEditableWarning={true}>
                            {label}
                        </Link>
                    </li>
                );
            }}
        />
    );
};

function TabPlayer() {
    let { url } = useRouteMatch();
    const history = useHistory();
    const [menus] = useState([
        { name: '基本情報', to: `${url}`, exact: true },
        { name: '条件別成績', to: `${url}/performance-by-condition`, exact: false },
        { name: 'Game Logs', to: `${url}/game-logs`, exact: false },
        { name: '年度別成績', to: `${url}/performance-by-year`, exact: false },
        { name: 'DS様 Topics', to: `${url}/ds-topic`, exact: false },
        { name: 'User Topics', to: `${url}/user-topic`, exact: false, canEdit: true },
    ])
    const [canAddNewTab, changeStatus] = useState(true)
    const addNewTab = () => {
        menus.push({ name: 'Type Name Topic', to: `${url}/add-topic`, exact: false, canEdit: true })
        changeStatus(false)
        history.push(`${url}/add-topic`);
    }

    const showTabs = (menus) => {
        var result = null;
        if(menus.length > 0){
            result = menus.map((menu, index) => {
                return (
                    <TabLinks 
                        key={index}
                        label={menu.name}
                        to={menu.to}
                        activeOnlyWhenExact={menu.exact}
                        canEdit={menu.canEdit}
                    />
                );
            });
        }
        return result;
    }

    return (
        <div className="tab">
            <ul className="ul">
                {showTabs(menus)}
                {canAddNewTab &&
                    <li className="li" onClick={addNewTab}>
                        <span className="btn-link">
                            <img src="/img/add_circle_24px.png" alt="alt-text"></img>
                        </span>
                    </li>
                }
            </ul>
        </div>
    )
}

export default withLocalize(TabPlayer);