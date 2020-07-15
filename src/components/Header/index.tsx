import * as React from 'react';
import styled from 'styled-components';
import logoImage from '../../assets/images/logo.png';

const HeaderContainer = styled.div`
    height: 60px;
    width: 100%;
    padding: 0 3rem;
    box-shadow: 1px 1px 3px 2px rgba(0, 0, 0, 0.12);
`;

const LogoImageContainer = styled.div`
    width: 150px;
    height: 60px;
    display: flex;
    align-items: center;
`;

const LogoImage = styled.img`
    max-width: 100%;
    height: auto;
`;

function Header(): React.ReactElement {
    return (
        <HeaderContainer>
            <LogoImageContainer>
                <LogoImage src={logoImage} />
            </LogoImageContainer>
        </HeaderContainer>
    );
}

export default Header;
