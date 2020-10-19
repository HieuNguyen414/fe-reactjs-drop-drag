import React from 'react';
import { withLocalize } from 'react-localize-redux';
import './styles.scss';

const PageError = (props) => (
  <div className="page-error">
    <span>無効です</span>
  </div>
);

export default withLocalize(PageError);
