import * as React from 'react';

import './Grid.scss';

export default class Grid extends React.PureComponent<{}> {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="column">One</div>
                    <div className="column">Two</div>
                    <div className="column">Three</div>
                    <div className="column">Four</div>
                    <div className="column">Five</div>
                </div>
            </div>
        );
    }
}