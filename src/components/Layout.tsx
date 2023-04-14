import Header from './Header';
import Footer from './Footer';
import { Container } from '@mui/material';

const Layout = ({ children, mode, toggleMode }) => {
  const title = 'Markdown';

  const social = [
    { name: 'GitHub', url: 'https://github.com/eduardofl' },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/eduardofonteslourenco/',
    },
  ];

  return (
    <Container disableGutters maxWidth="sm" sx={{ py: 5, px: 2 }}>
      <Header title={title} mode={mode} toggleMode={toggleMode} />
      <main>{children}</main>
      <Footer social={social} />
    </Container>
  );
};

export default Layout;
