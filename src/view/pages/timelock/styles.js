import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flex: 1,
        gap: '16px',
        flexDirection: 'column',
    },
    formBox: {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        margin: '16px'
    },
    formField: {
        margin: '0 0'
    },
    title: {
        fontSize: '17px',
        fontWeight: 600,
        marginBottom: '12px'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        flex: 1
    },
    btn: {
        display: 'inline-block',
        width: '140px',
        textTransform: 'none !important',
        fontSize: '14px !important',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        }
    },
    output: {
        overflowWrap:' break-word',
    },
    copyIcon: {
        marginLeft: '8px',
        cursor: 'pointer'
    }
}));
  
export default useStyles;