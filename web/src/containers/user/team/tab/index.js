import React, { useState } from 'react';
import { withLocalize } from 'react-localize-redux';
import './style.scss';
import {
  Route, Link, useHistory, useRouteMatch,
} from 'react-router-dom';

const TabLinks = ({
  label, to, activeOnlyWhenExact, canEdit,
}) => (
  <Route
    path={to}
    exact={activeOnlyWhenExact}
    children={({ match }) => {
			  const active = match ? 'active li' : 'li';
			  return (
  <li className={active}>
    <Link to={to} className="btn-link" contentEditable={canEdit} suppressContentEditableWarning>
      {label}
    </Link>
  </li>
			  );
    }}
		/>
);

function Tab() {
  const { url } = useRouteMatch();
  const history = useHistory();
  const [menus] = useState([
    { name: '定型レポート', to: `${url}`, exact: true },
    { name: '投手一覧', to: `${url}/pitcher`, exact: false },
    { name: '野手一覧', to: `${url}/batter`, exact: false },
    { name: 'スタメン', to: `${url}/starter`, exact: false },
    { name: '公示', to: `${url}/public`, exact: false },
    { name: 'スケジュール', to: `${url}/schedule`, exact: false },
    { name: 'DS様 Topics', to: `${url}/ds-topic`, exact: false },
    {
      name: 'User Topics', to: `${url}/user-topic`, exact: false, canEdit: true,
    },
  ]);
  const [canAddNewTab, changeStatus] = useState(true);
  const addNewTab = () => {
    menus.push({
      name: 'Type Name Topic', to: `${url}/add-topic`, exact: false, canEdit: true,
    });
    changeStatus(false);
    history.push(`${url}/add-topic`);
  };

  const showTabs = (menus) => {
    let result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => (
        <TabLinks
          key={index.toString()}
          label={menu.name}
          to={menu.to}
          activeOnlyWhenExact={menu.exact}
          canEdit={menu.canEdit}
        />
      ));
    }
    return result;
  };

  return (
    <div className="tab">
      <ul className="ul">
        {showTabs(menus)}
        {canAddNewTab && (
        <li className="li" onClick={addNewTab}>
          <span className="btn-link">
            <img src="/img/add_circle_24px.png" alt="alt-text" />
          </span>
        </li>
        )}
      </ul>
    </div>
  );
}

export default withLocalize(Tab);
