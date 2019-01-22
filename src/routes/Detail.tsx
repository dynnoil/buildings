import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export default class Detail extends React.PureComponent<RouteComponentProps> {
    render() {
        return (
            <div>{JSON.stringify(this.props)}</div>
        );
    }
}