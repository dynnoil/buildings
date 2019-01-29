import * as React from 'react';

export interface Props {
    title: string;
    text: string;
    imageUrl: string;
}

export default class Card extends React.PureComponent<Readonly<Props>> {
    render() {
        return (
            <div className="card">
                <img src={this.props.imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.text}</p>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
