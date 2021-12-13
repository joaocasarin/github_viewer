import React from 'react';
import Main from './components/Main/Main';
import Card from './components/Card/Card';
import Title from './components/Title/Title';
import Information from './components/Information/Information';

const App = () => (
    <Main>
        <Card>
            <Title variant='h3'>Github Viewer</Title>
            <Information />
        </Card>
    </Main>
);

export default App;
