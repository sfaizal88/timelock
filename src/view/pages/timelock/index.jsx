/**
 * 
 * Timelock component
 * @author - NA 
 * @date - 26th March, 2024
 * 
 */
// GENERIC IMPORT
import React from 'react';
import {Box} from '@mui/material';

// OTHER COMPONENT, HOOK, CONTEXT
import GenerateSaltSection from './components/generateSaltSection';
import PrepareDataSection from './components/prepareDataSection';

// STYLE IMPORT
import useStyles from './styles';

const Timelock = () => {
    // DECLARE STYLE
    const classes = useStyles();

    return (
        <Box>       
            <Box className={classes.container}>
                <GenerateSaltSection/>
                <PrepareDataSection/>
            </Box>
        </Box>
    )
}

export default Timelock;