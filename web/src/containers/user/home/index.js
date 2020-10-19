import React, { useState, useEffect } from 'react';
import { withLocalize } from 'react-localize-redux';
import './styles.scss';
import { timer, formatDateTimeFull } from '../../../common/services/timesServices';

const Home = React.memo(({ translate }) => {
    useEffect(() => {
        timer();
    }, [])
    return (
        <div className="content-home">
            <h3> Introduce PBN</h3>
            <p id="clock"></p>
            <p>{formatDateTimeFull()}</p>
        </div>
    )
})

export default withLocalize(Home);