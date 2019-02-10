import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import './App.scss';
import Navbar from './components/Navbar';
import ErrorBoundary from './components/ErrorBoundary';
import root from './store/reducer';

const store = createStore(
    root,
    applyMiddleware(thunk, logger)
);

const Home = React.lazy(() => import(/* webpackChunkName: "home" */ './routes/Home'));
const Detail = React.lazy(() => import(/* webpackChunkName: "detail" */ './routes/Detail'));
const Editor = React.lazy(() => import(/* webpackChunkName: "editor" */ './routes/Editor'));
const Map = React.lazy(() => import(/* webpackChunkName: "map" */ './routes/Map'));

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <Router>
                <React.Suspense fallback={<div>Loading..</div>}>
                    <Navbar>
                        <NavLink exact to="/">Home</NavLink>
                        <NavLink exact to="/map">Map</NavLink>
                        <NavLink to="/editor">Editor</NavLink>
                    </Navbar>
                    <Switch>
                        <Route exact path="/" render={props => <Home {...props} />} />
                        <Route exact path="/map" render={props => <Map {...props} />} />
                        <Route exact path="/editor" render={props => <Editor {...props} />} />
                        <Route path="/details/:id" render={props => <Detail {...props} />} />
                    </Switch>
                </React.Suspense>
            </Router>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('app')
);
