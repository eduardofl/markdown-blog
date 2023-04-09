import Head from 'next/head';

import Container from '@mui/material/Container';

const About = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Sobre - Blog Markdown</title>
      </Head>
      <Container disableGutters maxWidth="md" sx={{ marginX: 'auto' }}>
        <h1>About Component</h1>
        <p>Paragraph describing who is writting.</p>
      </Container>
    </>
  );
};

export default About;
