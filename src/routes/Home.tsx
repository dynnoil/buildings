import * as React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Home.scss';
import Card from '../components/Card';
import Page from '../components/Page';
import { fetchBuildings } from '../store/buildings/actions';
import { AppState } from '../store/reducer';
import { ThunkDispatch } from 'redux-thunk';
import { BuildingsState } from '../store/buildings/reducer';

interface StateProps {
    buildings: BuildingsState;
}

interface DispatchProps {
    fetchBuildings: (pageSize: number, lastItemId?: string) => void;
}

export class Home extends React.PureComponent<RouteComponentProps & StateProps & DispatchProps> {
    static readonly DEFAULT_PAGE_SIZE = 15;

    componentDidMount() {
        if (this.props.buildings.receivedAt === null) {
            this.props.fetchBuildings(Home.DEFAULT_PAGE_SIZE);
        }
    }

    private loadMore = () => {
        const lastItemId = this.props.buildings.items.slice(-1)[0]._id;
        this.props.fetchBuildings(Home.DEFAULT_PAGE_SIZE, lastItemId);
    }

    render() {
        return (
            <Page header="Home">
                {this.props.buildings.error && (
                    <div className="alert alert-danger" role="alert">
                        {this.props.buildings.error.message}
                    </div>
                )}
                {this.props.buildings.items && (
                    <div className="card-columns">
                        {this.props.buildings.items.map(building => (
                            <Card key={building._id} title={building.name}
                                text={building.description} imageUrl={building.image}>
                                <Link className="btn btn-primary" to={`/details/${building._id}`} >Go somewhere</Link>
                            </Card>
                        ))}
                    </div>
                )}
                <div className="d-flex justify-content-center">
                    {this.props.buildings.isFetching && (
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    )}
                    {!this.props.buildings.isFetching && this.props.buildings.hasMore && (
                        <button type="button" className="btn btn-primary" onClick={this.loadMore}>More</button>
                    )}
                </div>
            </Page>
        );
    }
}

const mapStateToProps = (state: AppState): StateProps => ({
    buildings: state.buildings
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => ({
    fetchBuildings: (pageSize, lastItemId) => dispatch(fetchBuildings(pageSize, lastItemId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);