import * as React from 'react';
import Box from '@mui/material/Box';
import CircleIcon from '@mui/icons-material/Circle';
import Link from './Link';

const Footer = (props: FooterProps) => {
  const { social } = props;

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}
    >
      {social.map((network, index) => (
        <Box key={network.name} sx={{ display: 'flex', alignItems: 'center' }}>
          {index !== 0 && <CircleIcon color="primary" sx={{ fontSize: 5 }} />}
          <Link
            variant="subtitle1"
            color="primary"
            href={network.url}
            target="_blank"
            rel="noreferrer"
            sx={{ mx: 0.5 }}
          >
            {network.name.toLowerCase()}
          </Link>
        </Box>
      ))}
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
