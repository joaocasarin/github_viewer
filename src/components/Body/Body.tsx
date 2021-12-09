/* eslint-disable react/jsx-props-no-spreading */
import { Card } from '@mui/material';
import React from 'react';
import Github from '../Github/Github';

const Body = () => (
    <main
        style={{
            height: '100vh',
            backgroundColor: '#8200BD',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}
    >
        <Card
            sx={{
                minHeight: '200px',
                width: '700px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                paddingY: '1rem'
            }}
        >
            <Github />
        </Card>
    </main>
);

export default Body;
