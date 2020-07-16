import * as React from 'react';
import styled from 'styled-components';
import { FaCircleNotch } from 'react-icons/fa';

const LoadingContainer = styled.div<LoadingProp>`
    opacity: ${(prop) => (prop.isLoading ? 0.4 : 0)};
    z-index: ${(prop) => (prop.isLoading ? 99 : -99)};
    display: ${(prop) => (prop.isLoading ? 'flex' : 'none')};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
`;

const LoadingIcon = styled(FaCircleNotch)`
    fill: #fff;
    width: 5%;
    height: auto;
    animation: rotate 1s linear infinite;

    @keyframes rotate {
        to {
            transform: rotate(360deg);
        }
    }
`;

const LoadingText = styled.div`
    font-size: 2.5rem;
    color: #fff;
    margin: 10px;
`;

type LoadingProp = {
    isLoading: boolean;
};

function Loading({ isLoading }: LoadingProp): React.ReactElement {
    return (
        <LoadingContainer isLoading={isLoading}>
            <LoadingIcon />
            <LoadingText>Loading...</LoadingText>
        </LoadingContainer>
    );
}

export default Loading;
