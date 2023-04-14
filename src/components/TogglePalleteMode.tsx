import { PaletteMode } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const TogglePalleteMode = (props: TogglePalleteModeProps) => {
  const { mode, toggleMode } = props;

  return (
    <>
      {mode === 'light' ? (
        <IconButton onClick={() => toggleMode(mode)}>
          <DarkModeIcon />
        </IconButton>
      ) : (
        <IconButton onClick={() => toggleMode(mode)}>
          <LightModeIcon />
        </IconButton>
      )}
    </>
  );
};

interface TogglePalleteModeProps {
  mode: PaletteMode;
  toggleMode: (mode: PaletteMode) => void;
}

export default TogglePalleteMode;
