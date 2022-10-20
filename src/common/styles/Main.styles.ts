import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Main = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
    height: '100vh',
});

export const BoardCont = styled(Box)({
    maxWidth: 'calc(100vw - 80px)',
    overflow: 'auto',
    position: 'relative',
});
