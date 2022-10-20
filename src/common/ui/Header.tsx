import { Box, Typography, Button } from '@mui/material';
import { HeaderCont } from "../styles/Header.styles"

const Header = () => {
  return (
        <Box display='flex' flexDirection='column'>
            <Typography variant='h4' textAlign='center'>
                Choose Game Level.
            </Typography>
            <HeaderCont>
            <Box display="flex" flexDirection='row' justifyContent="space-between">
                <Button                         
                    variant='contained'
                >
                    1
                </Button>
                <Button                         
                    variant='contained'
                >
                    2
                </Button>
                <Button                         
                    variant='contained'
                >
                    3
                </Button>
                <Button variant='outlined'>Restart</Button>
            </Box>
        </HeaderCont>
        </Box>

  )
}

export default Header