import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Layout from '../components/Layout';
import '../styles/globals.css';

const theme = createTheme({
  palette: {
    mode: 'light',
  },
  typography: {
    fontFamily: 'sans-serif',
  },
});

const MyApp = ({ Component, pageProps }): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default MyApp;
