import * as React from 'react';
import { NavLinkProps } from 'react-router-dom';

import './Navbar.scss';

export interface Props {
    children?: React.ReactElement<NavLinkProps>[];
}

export default class Navbar extends React.Component<Readonly<Props>> {

    static defaultProps: Props = {
        children: []
    };

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Buildings</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav">
                        {this.props.children.map((navlink, index) =>
                            <li key={index} className="nav-item">
                                {React.cloneElement(navlink, { className: 'nav-link' })}
                            </li>
                        )}
                    </div>
                </div>
            </nav>
        );
    }
}