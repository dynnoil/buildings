import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import Page from '../components/Page';

export default class Detail extends React.PureComponent<RouteComponentProps> {
    render() {
        return (
            <Page header="Details">
                {this.props.match.params['id']}
            </Page>
        );
    }
}