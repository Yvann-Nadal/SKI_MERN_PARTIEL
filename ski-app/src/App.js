import { BrowserRouter } from 'react-router-dom';
import MainRouter from './app/routing/MainRouter';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Rubik'
    ].join(','),
  },
});

function App() {
  return (

    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <MainRouter />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
