/**
 * 
 * Generate Salt component
 * @author - NA 
 * @date - 26th March, 2024
 * 
 */
// GENERIC IMPORT
import clsx from 'clsx';
import React, {useState} from 'react';
import {Box, TextField, Button, Alert} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

// OTHER COMPONENT, HOOK, CONTEXT
import useTimelockHook from '../useTimelockHook';

// STYLE IMPORT
import useStyles from '../styles';

const GenerateSaltSection = () => {
    // DECLARE STYLE
    const classes = useStyles();

    // DECLARE STATUS
    const [randomNo, setRandomNo] = useState('');
    const [saltResult, setSaltResult] = useState('');

    // HOOKS
    const {generateSalt} = useTimelockHook({setSaltResult});

    return (
        <Box flex={1} className={classes.formBox}>
            <Box className={classes.title}>Generate salt</Box>
            {saltResult && <Alert className={classes.output} icon={<CheckIcon fontSize="inherit" />} severity="success">{saltResult}<i className={clsx(classes.copyIcon, "far fa-copy")} onClick={() => navigator.clipboard.writeText(saltResult)}></i></Alert>}
            <form  className={classes.form}>
            <TextField size='small' value={randomNo} onChange={(event) => setRandomNo(event.target.value)} label='Random no' fullWidth/>
            <Button size='small' className={classes.btn} variant="contained" onClick={generateSalt}>Generate</Button>
            </form>
        </Box>
    )
}

export default GenerateSaltSection;