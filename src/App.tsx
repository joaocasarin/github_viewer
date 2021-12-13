import React from 'react';
import styled from 'styled-components';
import Card from './components/Card/Card';
import Information from './components/Information/Information';

const Main = styled.main`
    height: 100vh;
    width: 100%;
    background-color: #9575cd;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

const Title = styled.p`
    font-size: 3rem;
    color: #373737;
    font-weight: bold;
    font-family: 'Fira Sans', sans-serif;
`;

const App = () => (
    <Main>
        <Card>
            <Title>Github Viewer</Title>
            <Information />
        </Card>
    </Main>
);

export default App;
