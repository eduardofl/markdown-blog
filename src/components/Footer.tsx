import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from './Link';

const Footer = (props: FooterProps) => {
  const { social } = props;

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        py: 3,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}
    >
      {social.map((network, index) => (
        <>
          {index !== 0 && (
            <Typography variant="caption" color="primary">
              •
            </Typography>
          )}
          <Link
            variant="subtitle1"
            color="primary"
            href={network.url}
            key={network.name}
            target="_blank"
            rel="noreferrer"
            sx={{ mx: 0.5 }}
          >
            {network.name.toLowerCase()}
          </Link>
        </>
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
