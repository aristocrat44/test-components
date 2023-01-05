import React from 'react';
import createTheme from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';

export interface LayoutProps {
  children: React.ReactNode;
}

const ThemeWrapper = ({ children }: LayoutProps) => {
  return (
    <div>
      <ThemeProvider theme={createTheme('dark')}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </div>
  );
};

export default ThemeWrapper;
