import PageTitle from '../components/PageTitle';

import Container from '@mui/material/Container';

const About = (): JSX.Element => {
  return (
    <>
      <PageTitle>Sobre - Blog Markdown</PageTitle>
      <Container disableGutters maxWidth="md" sx={{ marginX: 'auto' }}>
        <h1>About Component</h1>
        <p>Paragraph describing who is writting.</p>
      </Container>
    </>
  );
};

export default About;
