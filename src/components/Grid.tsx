import * as React from 'react';

import './Grid.scss';

export default class Grid extends React.PureComponent<{}> {
    render() {
        return (
            <div className="grid-container">
                <div>One</div>
                <div>Two</div>
                <div>Three</div>
                <div>Four</div>
                <div>Five</div>
            </div>
        );
    }
}