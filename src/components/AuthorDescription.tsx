import { Container, Typography } from '@mui/material';
import Image from 'next/image';

import Link from './Link';

const AuthorDescription = (): JSX.Element => {
  const AUTHOR_LINKEDIN_URL =
    'https://www.linkedin.com/in/eduardofonteslourenco/';
  const AUTHOR_DISPLAY_NAME = 'Eduardo Lourenço';
  const AUTHOR_PICTURE_PATH = '/eduardofl.jpg';
  const IMAGE_SIZE = 75;

  return (
    <Container
      disableGutters
      sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}
    >
      <div
        style={{
          borderRadius: '50%',
          overflow: 'hidden',
          width: IMAGE_SIZE,
          height: IMAGE_SIZE,
        }}
      >
        <Image
          src={AUTHOR_PICTURE_PATH}
          alt="Picture of the author"
          width={IMAGE_SIZE}
          height={IMAGE_SIZE}
        />
      </div>
      <div style={{ marginLeft: 15 }}>
        <Typography>
          Blog pessoal por
          <Link
            color="primary"
            href={AUTHOR_LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            sx={{ ml: 0.5 }}
          >
            {AUTHOR_DISPLAY_NAME}
          </Link>
          .
        </Typography>
        <Typography>Repositório de estudos e ideias.</Typography>
      </div>
    </Container>
  );
};

export default AuthorDescription;
