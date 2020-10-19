import React from 'react';
import './styles.scss';

const Loading = (props) => (
  <div>
    <div className={props.show ? 'load' : ''}>
      <div id="loading">
        <div className="loader"></div>
      </div>
    </div>
  </div>
);

export default Loading;
