import { PaletteMode } from '@mui/material';
import * as tokens from './tokens';

const lightModePalette = {
  primary: {
    main: tokens.LIGHT_MODE_PRIMARY_COLOR_DARK,
    light: tokens.LIGHT_MODE_PRIMARY_COLOR_LIGHT,
    dark: tokens.LIGHT_MODE_PRIMARY_COLOR_DARK,
  },
  background: {
    paper: tokens.LIGHT_MODE_BACKGROUND_COLOR_PAPER,
  },
};

const darkModePalette = {
  primary: {
    main: tokens.DARK_MODE_PRIMARY_COLOR_MAIN,
    light: tokens.DARK_MODE_PRIMARY_COLOR_LIGHT,
    dark: tokens.DARK_MODE_PRIMARY_COLOR_DARK,
  },
  background: {
    default: tokens.DARK_MODE_BACKGROUND_COLOR_DEFAULT,
    paper: tokens.DARK_MODE_BACKGROUND_COLOR_PAPER,
  },
};

export const getThemeTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light' ? lightModePalette : darkModePalette),
  },
  typography: {
    fontFamily: 'sans-serif',
  },
});
