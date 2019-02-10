import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import Page from '../components/Page';
import YandexMap from '../components/YandexMap';

export default class Map extends React.PureComponent<RouteComponentProps, {}> {
    render() {
        return (
            <Page header="Map">
                <YandexMap />
            </Page>
        );
    }
}
