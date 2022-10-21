import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

type Status = 'success' | 'failed' | 'default';
export const CellBox= styled(Box)(
  ({ status, disabled }: { status: Status; disabled: boolean }) => ({
    width: 30,
    height: 30,
    minWidth: 30,
    border: `${
      status === 'success' ? '1px solid #1876d2 !important' : '1px solid'
    }`,
    borderColor: '#1876d2',
    borderRadius: 4,
    margin: 0.5,
    backgroundColor:
      status === 'failed'
        ? '#ff0000'
        : status === 'success'
        ? '#ffffff'
        : 'lightblue',
    cursor: 'pointer',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: disabled ? 0.4 : 1,

    '&:hover':
      disabled || status !== 'default' ? {} : { backgroundColor: '#1879d2', },
  })
);