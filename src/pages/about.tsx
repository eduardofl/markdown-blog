import PageBody from '../components/PageBody';
import PageTitle from '../components/PageTitle';

const About = (): JSX.Element => {
  return (
    <>
      <PageTitle>Sobre - Blog Markdown</PageTitle>
      <PageBody>
        <h1>About Component</h1>
        <p>Paragraph describing who is writting.</p>
      </PageBody>
    </>
  );
};

export default About;
