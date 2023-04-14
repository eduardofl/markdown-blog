import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from './Link';

import { PaletteMode } from '@mui/material';
import TogglePalleteMode from './TogglePalleteMode';

const Header = (props: HeaderProps) => {
  const { title, mode, toggleMode } = props;

  return (
    <Toolbar
      component="header"
      disableGutters
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 5,
      }}
    >
      <Typography
        component="h1"
        variant="h3"
        color="inherit"
        align="center"
        noWrap
      >
        <Link href="/" sx={{ textDecoration: 'none', color: 'inherit' }}>
          {title}
        </Link>
      </Typography>
      <TogglePalleteMode mode={mode} toggleMode={toggleMode} />
    </Toolbar>
  );
};

interface HeaderProps {
  title: string;
  mode: PaletteMode;
  toggleMode: (mode: PaletteMode) => void;
}

export default Header;
