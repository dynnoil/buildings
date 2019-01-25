import * as React from 'react';

export interface Props {
    children?: React.ReactNode;
}

export interface State {
    error: Error;
    errorInfo: React.ErrorInfo;
}

export default class ErrorBoundary extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        // Catch errors in any components below and re-render with error message
        this.setState({ error, errorInfo });
        // You can also log error messages to an error reporting service here
    }

    render() {
        if (this.state.errorInfo) {
            return (
                <div>
                    <h2>Something went wrong.</h2>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo.componentStack}
                    </details>
                </div>
            );
        }
        return this.props.children;
    }
}