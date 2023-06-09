import { useMemo, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Layout from '../components/Layout';
import '../styles/globals.css';
import { PaletteMode } from '@mui/material';
import { getThemeTokens } from '../styles/theme';

const MyApp = ({ Component, pageProps }): JSX.Element => {
  const [mode, setMode] = useState<PaletteMode>('light');

  const toggleMode = (prevMode: PaletteMode) => {
    setMode(prevMode === 'light' ? 'dark' : 'light');
  };

  const theme = useMemo(() => createTheme(getThemeTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout mode={mode} toggleMode={toggleMode}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default MyApp;
