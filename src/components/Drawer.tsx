import * as React from 'react';
import {
  Drawer as MuiDrawer,
  Box,
  Divider,
  IconButton,
  DrawerProps,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export interface exDrawerProps extends DrawerProps {
  toggle: (open: boolean) => void;
}

const Drawer = ({ children, open, toggle }: exDrawerProps) => {
  const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    toggle(!open);
  };

  return (
    <MuiDrawer
      anchor="left"
      open={open}
      onClose={(e) => toggleDrawer(e as React.KeyboardEvent | React.MouseEvent)}
    >
      <IconButton onClick={() => toggle(!open)}>
        <CloseIcon />
      </IconButton>
      <Divider />
      <Box>{children}</Box>
    </MuiDrawer>
  );
};

export default Drawer;
