import Header from './Header';
import Footer from './Footer';
import { Container } from '@mui/material';

const Layout = ({ children }) => {
  const title = 'Markdown';
  const sections = [{ title: 'About', url: '/about' }];

  const social = [
    { name: 'GitHub', url: 'https://github.com/eduardofl' },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/eduardofonteslourenco/',
    },
  ];

  return (
    <Container disableGutters maxWidth="sm" sx={{ py: 5, px: 2 }}>
      <Header title={title} sections={sections} />
      <main>{children}</main>
      <Footer social={social} />
    </Container>
  );
};

export default Layout;
