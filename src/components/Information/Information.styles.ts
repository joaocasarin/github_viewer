import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(Box)({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
});

export const NewButton = styled(Button)({
    backgroundColor: '#9575cd',
    '&:hover': {
        backgroundColor: '#65499c'
    },
    marginLeft: '10px'
});

export const Form = styled('form')({
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px'
});
