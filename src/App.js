/**
 * 
 * App component
 * @author - NA 
 * @date - 26th March, 2024
 * 
 */
// GENERIC IMPORT
// import {Box} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Timelock from './view/pages/timelock';
import Header from './view/pages/common/header';
import theme from './theme'; 

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <Timelock/>
    </ThemeProvider>
  );
}

export default App;
