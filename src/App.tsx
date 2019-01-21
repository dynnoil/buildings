import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Home = React.lazy(() => import(/* webpackChunkName: "home" */ './routes/Home'));

ReactDOM.render(
    <BrowserRouter>
        <React.Suspense fallback={<div>Loading..</div>}>
            <Switch>
                <Route exact path="/" component={() => <Home />} />
            </Switch>
        </React.Suspense>
    </BrowserRouter>,
    document.getElementById('app')
);
