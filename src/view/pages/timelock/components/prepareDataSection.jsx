/**
 * 
 * Prepare Data component
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

const PrepareDataSection = () => {
    // DECLARE STYLE
    const classes = useStyles();

    // DECLARE STATUS
    const [amount, setAmount] = useState('');
    const [recipientAddress, setRecipientAddress] = useState('');
    const [prepareDataResult, setPrepareDataResult] = useState('');

    // HOOKS
    const {prepareData} = useTimelockHook({setPrepareDataResult});

    return (
        <Box flex={1} className={classes.formBox}>
            <Box className={classes.title}>Prepare data</Box>
            {prepareDataResult && <Alert className={classes.output} icon={<CheckIcon fontSize="inherit" />} severity="success">{prepareDataResult}<i className={clsx(classes.copyIcon, "far fa-copy")} onClick={() => navigator.clipboard.writeText(prepareDataResult)}></i></Alert>}<br/>
            <form className={classes.form}>
                <Box className={classes.formField}>
                    <TextField size='small' value={recipientAddress} onChange={(event) => setRecipientAddress(event.target.value)} label='Recipient Address' fullWidth/>
                </Box>
                <Box className={classes.formField}>
                    <TextField size='small' value={amount} onChange={(event) => setAmount(event.target.value)} label='Amount' fullWidth/>
                </Box>
                <Button size='small' className={classes.btn} variant="contained" onClick={() => prepareData(recipientAddress, amount)}>Prepare Data</Button>
            </form>
        </Box>
    )
}

export default PrepareDataSection;