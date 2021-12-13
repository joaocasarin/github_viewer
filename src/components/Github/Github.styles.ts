import { CSSProperties } from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(Box)({
    width: '100%',
    height: '325px',
    display: 'flex',
    justifyContent: 'space-around'
});

export const Info = styled(Typography)({
    fontWeight: 'bold',
    fontFamily: 'Fira Sans',

    padding: '0.1rem',

    color: '#373737'
});

export const BoxStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
};
