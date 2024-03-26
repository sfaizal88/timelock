import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    formBox: {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        margin: '16px'
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
        fontSize: '14px !important'
    }
}));
  
export default useStyles;