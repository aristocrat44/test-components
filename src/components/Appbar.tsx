import { AppBar as MuiAppBar, AppBarProps } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';

interface exAppBarProps extends AppBarProps {
  toggleMenu: () => void;
  header: string;
  content: JSX.Element;
}

const Appbar = ({ toggleMenu, header, content }: exAppBarProps) => {
  return (
    <>
      <MuiAppBar>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={() => toggleMenu()}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            {header}
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>{content}</Box>
        </Toolbar>
      </MuiAppBar>
    </>
  );
};

export default Appbar;
