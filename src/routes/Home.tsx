import * as React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Home.scss';
import Card from '../components/Card';
import Page from '../components/Page';
import { fetchBuildings } from '../actions/actions';
import { BuildingsState, AppState } from '../reducers/root';
import { ThunkDispatch } from 'redux-thunk';

interface StateProps {
    buildings: BuildingsState;
}

interface DispatchProps {
    fetchBuildings: () => void;
}

class Home extends React.PureComponent<RouteComponentProps & StateProps & DispatchProps> {

    componentDidMount() {
        this.props.fetchBuildings();
    }

    render() {
        return (
            <Page header="Home">
                {this.props.buildings.isFetching &&
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>}
                {this.props.buildings.error &&
                    <div className="alert alert-danger" role="alert">
                        {this.props.buildings.error.message}
                    </div>
                }
                {this.props.buildings.response &&
                    <div className="card-columns">
                        {this.props.buildings.response.map(building => (
                            <Card key={building.id} title={building.name}
                                text={building.description} imageUrl={building.image}>
                                <Link className="btn btn-primary" to={`/buildings/${building.id}`} >Go somewhere</Link>
                            </Card>
                        ))}
                    </div>
                }
            </Page>
        );
    }
}

const mapStateToProps = (state: AppState): StateProps => ({
    buildings: state.buildings
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => ({
    fetchBuildings: () => dispatch(fetchBuildings())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);