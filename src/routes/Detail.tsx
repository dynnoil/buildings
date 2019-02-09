import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import Page from '../components/Page';
import { PostState, post } from '../store/post/reducer';
import { AppState } from '../store/reducer';
import { ThunkDispatch } from 'redux-thunk';
import { fetchBuildingPost } from '../store/post/actions';
import { connect } from 'react-redux';

interface StateProps {
    post: PostState;
}

interface DispatchProps {
    fetchPost: (id: string) => void;
}

export class Detail extends React.PureComponent<RouteComponentProps & StateProps & DispatchProps> {

    componentDidMount() {
        const postId = this.props.match.params['id'];
        if (this.props.post.id !== postId) {
            this.props.fetchPost(this.props.match.params['id']);
        }
    }

    render() {
        return (
            <Page header="Details">
                {this.props.post.error && (
                    <div className="alert alert-danger" role="alert">
                        {this.props.post.error.message}
                    </div>
                )}
                {this.props.post.isFetching && (
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                )}
                {this.props.post.post && (
                    <div>{this.props.post.post.content}</div>
                )}
            </Page>
        );
    }
}

const mapStateToProps = (state: AppState): StateProps => ({
    post: state.post
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => ({
    fetchPost: (id) => dispatch(fetchBuildingPost(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
