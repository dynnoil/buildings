import * as React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.scss';

export default class Navbar extends React.PureComponent<{}> {
    render() {
        return (
            <div className="navbar">
                <div className="navbar-links">
                    {this.props.children}
                </div>
            </div>
        );
    }
}