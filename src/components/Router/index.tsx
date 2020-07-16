import * as React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from 'components/Home';
import Header from 'components/Header';
import Product from 'components/Product';

const RootRouter: React.FC = () => (
    <HashRouter>
        <Header />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/products" exact component={Product} />
            <Route path="/cart" exact component={Home} />
            <Redirect path="*" to="/" />
        </Switch>
    </HashRouter>
);

export default RootRouter;
