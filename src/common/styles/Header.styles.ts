import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles'

export const HeaderCont = styled(Box)({
    backgroundColor: '#fff',
    minWidth: 500,
    padding: 12,
    border: '1px solid #1976d2',
    borderRadius: 8,
    margin: '8px 0',
});

export const LevelBtn = styled(Button)(
    ({ isActive } : { isActive: boolean }) => ({
        backgroundColor: isActive ? 'green' : 'primary',
        textTransform: 'none',
        margin: '4px',

        '&:hover': {
            backgroundColor: 'primary',
        },
    })
);