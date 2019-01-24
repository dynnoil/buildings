import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import './Home.scss';
import Grid from '../components/Grid';

export default class Home extends React.PureComponent<RouteComponentProps> {
    render() {
        return (
            <div className="container">
                <Grid />
            </div>
        );
    }
}