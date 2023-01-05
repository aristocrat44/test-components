import { OutlinedInput } from '@mui/material';
import Container from './components/Container';
import { Button } from './index';
import MuiIcons from './icons';
import Typography from './components/Typography';
import Drawer from './components/Drawer';
import { useState } from 'react';
import Appbar from './components/Appbar';
import Popover from './components/Popover';

function App() {
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const { AddIcon } = MuiIcons();

  const handlePopoverClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div className="App">
      <Appbar
        toggleMenu={() => setToggleDrawer(!toggleDrawer)}
        header="Miferia"
        content={
          <ul>
            <li>hellow</li>
          </ul>
        }
      />
      <Button
        label="Open Drawer"
        onClick={() => setToggleDrawer(!toggleDrawer)}
      />
      <OutlinedInput size="small" onClick={() => alert('hellow')} />
      <Container>
        <AddIcon />
      </Container>
      <Typography>Typography</Typography>

      <Drawer open={toggleDrawer} toggle={setToggleDrawer}>
        <ul>
          <li>One</li>
          <li>Two</li>
        </ul>
      </Drawer>
      <Button label="open pop" onClick={handlePopoverClick} />
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        contents={<>hello</>}
      />
    </div>
  );
}

export default App;
