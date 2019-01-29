import * as React from 'react';

export interface Props {
    header: string;
}

export default class Page extends React.Component<Readonly<Props>> {
    render() {
        return (
            <div className="container">
                <h1>{this.props.header}</h1>
                {this.props.children}
            </div>
        );
    }
}
