import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from './Link';


const Copyright = () => {
  const copyrightText = 'Blog do Druida';
  const year = new Date().getFullYear();

  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {`${copyrightText} © ${year}.`}
    </Typography>
  );
};

const Footer = (props: FooterProps) => {
  const { social } = props;

  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
      <Container maxWidth="lg">
        <Container sx={{ display: 'flex', justifyContent: 'center' }}>
          {social.map((network) => (
            <Link
              display="flex"
              variant="body1"
              href={network.url}
              key={network.name}
              target="_blank"
              rel="noreferrer"
              sx={{ color: 'rgb(0 0 0 / 60%)', mx: 0.5 }}
            >
              <network.icon />
            </Link>
          ))}
        </Container>
        <Copyright />
      </Container>
    </Box>
  );
};

interface FooterProps {
  social: ReadonlyArray<{
    icon: React.ElementType;
    name: string;
    url: string;
  }>;
};

export default Footer;
