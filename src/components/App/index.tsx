import * as React from 'react';
import GlobalStyles from 'components/GlobalStyles';
import RootRouter from 'components/Router';

function App(): React.ReactElement {
    return (
        <>
            <GlobalStyles />
            <RootRouter />
        </>
    );
}

export default App;
