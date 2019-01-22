import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import './Home.scss';

export default class Home extends React.PureComponent<RouteComponentProps> {
    render() {
        return <div className="container">{JSON.stringify(this.props)}</div>;
    }
}