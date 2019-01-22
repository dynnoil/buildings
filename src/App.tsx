import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import './App.scss';

const Home = React.lazy(() => import(/* webpackChunkName: "home" */ './routes/Home'));
const Detail = React.lazy(() => import(/* webpackChunkName: "detail" */ './routes/Detail'));

ReactDOM.render(
    <Router>
        <React.Suspense fallback={<div>Loading..</div>}>
            <ul role="nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/buildings/1">Buildings</Link></li>
            </ul>
            <Switch>
                <Route exact path="/" render={props => <Home {...props} />} />
                <Route path="/buildings/:id" render={props => <Detail {...props} />} />
            </Switch>
        </React.Suspense>
    </Router>,
    document.getElementById('app')
);
