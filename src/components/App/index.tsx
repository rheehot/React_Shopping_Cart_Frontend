import * as React from 'react';
import GlobalStyles from '../GlobalStyles';
import RootRouter from '../Router';

function App(): React.ReactElement {
    return (
        <>
            <GlobalStyles />
            <RootRouter />
        </>
    );
}

export default App;
