import * as React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from 'components/Home';
import Header from 'components/Header';
import Product from 'components/Product';
import Helemt from 'components/Helmet';

function RootRouter(): React.ReactElement {
    return (
        <HashRouter>
            <Helemt />
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/products" exact component={Product} />
                <Route path="/cart" exact component={Home} />
                <Redirect path="*" to="/" />
            </Switch>
        </HashRouter>
    );
}

export default RootRouter;
