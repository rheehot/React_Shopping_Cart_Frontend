import * as React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../Home';
import Header from '../Header';

const RootRouter: React.FC = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/products" component={Home} />
            <Route path="/cart" component={Home} />
            <Redirect path="*" to="/" />
        </Switch>
    </BrowserRouter>
);

export default RootRouter;
