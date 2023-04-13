import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from './Link';
import { Container } from '@mui/material';

const Header = (props: HeaderProps) => {
  const { sections, title } = props;

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
      <div>
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
          </Link>
        ))}
      </div>
    </Toolbar>
  );
};

interface HeaderProps {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
}

export default Header;
