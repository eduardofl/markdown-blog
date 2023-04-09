import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from './Link';

const Footer = (props: FooterProps) => {
  const { social } = props;

  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 3 }}>
      <Container
        maxWidth="sm"
        disableGutters
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        {social.map((network, index) => (
          <>
            {index !== 0 && <Typography variant="caption">•</Typography>}
            <Link
              variant="subtitle1"
              href={network.url}
              key={network.name}
              target="_blank"
              rel="noreferrer"
              sx={{ color: 'rgb(0 0 0 / 60%)', mx: 0.5 }}
            >
              {network.name.toLowerCase()}
            </Link>
          </>
        ))}
      </Container>
    </Box>
  );
};

interface FooterProps {
  social: ReadonlyArray<{
    name: string;
    url: string;
  }>;
}

export default Footer;
