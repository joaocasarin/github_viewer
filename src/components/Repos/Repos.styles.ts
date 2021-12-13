import { Box, Link } from '@mui/material';
import { styled } from '@mui/material/styles';

export const NewLink = styled(Link)({
    fontFamily: 'Fira Sans',
    color: '#373737',
    fontWeight: 'bold',
    transitionDuration: '0.3s',
    transitionProperty: 'color',
    transitionTimingFunction: 'ease-in-out',
    '&:hover': {
        color: '#65499c'
    }
});

export const Wrapper = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
});
