import { createTheme as createMuiTheme } from '@mui/material';
import { darkPalette, lightPalette } from './palette';

export const createTheme = (mode: 'dark' | 'light') => {
  const palette = mode === 'dark' ? darkPalette : lightPalette;

  // Create base theme
  const baseTheme = createMuiTheme({
    palette,
  });

  // Inject base theme to be used in components
  return createMuiTheme(baseTheme);
};
