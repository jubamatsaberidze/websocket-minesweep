import { useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { HeaderCont, LevelBtn } from "../styles/Header.styles"
import { useSelector, useDispatch } from 'react-redux';
import { startGame } from '../../store/reducers/startReducer';
import { initializeGame, restartGame } from '../../store/reducers/gameReducers';
import { RootState } from '../../store/store';

const Header = () => {
    const dispatch = useDispatch();
    const optionState = useSelector((state: RootState) => state.option)

    useEffect(() => {
        dispatch(initializeGame());
    }, [dispatch]);

    const handleChooseLevel = (level: number) => {
        if (level === optionState.level) return;
        dispatch(startGame(level));
        dispatch(restartGame());

    };
    const restart = () => {
        dispatch(startGame(optionState.level));
        dispatch(restartGame());
    }
  return (
        <Box display='flex' flexDirection='column'>
            <Typography variant='h4' textAlign='center'>
                Choose Game Level.
            </Typography>
            <HeaderCont>
            <Box display="flex" flexDirection='row' justifyContent="space-between">
                <LevelBtn                         
                    variant='contained'
                    isActive={optionState.level === 1}
                    onClick={() => handleChooseLevel(1)}
                >
                    1
                </LevelBtn>
                <LevelBtn                         
                    variant='contained'
                    isActive={optionState.level === 2}
                    onClick={() => handleChooseLevel(2)}
                >
                    2
                </LevelBtn>
                <LevelBtn                         
                    variant='contained'
                    isActive={optionState.level === 3}
                    onClick={() => handleChooseLevel(3)}
                >
                    3
                </LevelBtn>
                <LevelBtn                         
                    variant='contained'
                    isActive={optionState.level === 4}
                    onClick={() => handleChooseLevel(4)}
                >
                    4
                </LevelBtn>
                <Button variant='outlined' onClick={restart}>Restart</Button>
            </Box>
        </HeaderCont>
        </Box>

  )
}

export default Header