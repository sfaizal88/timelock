/**
 * 
 * Timelock component
 * @author - NA 
 * @date - 26th March, 2024
 * 
 */
// GENERIC IMPORT
import React, {useState} from 'react';
import {Box, TextField, Button} from '@mui/material';

// OTHER COMPONENT, HOOK, CONTEXT
import useTimelockHook from './useTimelockHook';

// STYLE IMPORT
import useStyles from './styles';

const Timelock = () => {
    // DECLARE STYLE
    const classes = useStyles();

    // DECLARE STATUS
    const {randomNo, setRandomNo} = useState();
    const {amount, setAmount} = useState();
    const {recipientAddress, setRecipientAddress} = useState();

    // HOOKS
    const {prepareData, generateSalt} = useTimelockHook();

    return (
        <Box>       
            <Box display={'flex'} flex={1} gap={2}>
                <Box flex={1} className={classes.formBox}>
                    <Box className={classes.title}>Prepare data</Box>
                    <form className={classes.form}>
                        <TextField size='small' value={recipientAddress} onChange={(event) => setRecipientAddress(event.target.value)} label='Recipient Address' fullWidth/>
                        <TextField size='small' value={amount} onChange={(event) => setAmount(event.target.value)} label='Amount' fullWidth/>
                        <Button size='small' className={classes.btn} variant="contained" onClick={prepareData}>Prepare Data</Button>
                    </form>
                </Box>
                <Box flex={1} className={classes.formBox}>
                    <Box className={classes.title}>Generate salt</Box>
                        <form  className={classes.form}>
                        <TextField size='small' value={randomNo} onChange={(event) => setRandomNo(event.target.value)} label='Random no' fullWidth/>
                        <Button size='small' className={classes.btn} variant="contained" onClick={generateSalt}>Generate</Button>
                        </form>
                </Box>
            </Box>
        </Box>
    )
}

export default Timelock;