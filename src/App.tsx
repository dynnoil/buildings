import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import './App.scss';
import Navbar from './components/Navbar';
import ErrorBoundary from './components/ErrorBoundary';

const Home = React.lazy(() => import(/* webpackChunkName: "home" */ './routes/Home'));
const Detail = React.lazy(() => import(/* webpackChunkName: "detail" */ './routes/Detail'));

ReactDOM.render(
    <ErrorBoundary>
        <Router>
            <React.Suspense fallback={<div>Loading..</div>}>
                <Navbar>
                    <Link to="/">Home</Link>
                    <Link to="/buildings/1">Buildings</Link>
                </Navbar>
                <Switch>
                    <Route exact path="/" render={props => <Home {...props} />} />
                    <Route path="/buildings/:id" render={props => <Detail {...props} />} />
                </Switch>
            </React.Suspense>
        </Router>
    </ErrorBoundary>,
    document.getElementById('app')
);
