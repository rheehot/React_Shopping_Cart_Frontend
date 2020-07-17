import * as React from 'react';
import RootRouter from 'components/Router';
import GlobalStyles from 'components/GlobalStyles';

function App(): React.ReactElement {
    return (
        <React.StrictMode>
            <GlobalStyles />
            <RootRouter />
        </React.StrictMode>
    );
}

export default App;
