import * as React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../GlobalStyles';
import Header from '../Header';

const AppContainer = styled.div`
    width: 100%;
    height: 100%;
`;

function App(): React.ReactElement {
    return (
        <AppContainer>
            <GlobalStyles />
            <Header />
        </AppContainer>
    );
}

export default App;
