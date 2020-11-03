import React from 'react';

import '../../styleGlobal.css';
import './style.css';

import Header from '../Header/index.jsx';
import Section from '../Section/index.jsx';

export default props => {
    return(
        <div className="container">
            <div className="header">
                <Header />

            </div>

            <Section />

        </div>

    );
};