import { Card } from '@mui/material';
import { styled } from '@mui/material/styles';

const CardComponent = styled(Card)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    height: '500px',
    width: '800px',

    padding: '20px',

    backgroundColor: '#ede7f6',

    borderRadius: '10px',
    boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.1)'
});

export default CardComponent;
