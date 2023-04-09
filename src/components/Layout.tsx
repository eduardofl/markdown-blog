import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  const sections = [{ title: 'About', url: '/about' }];

  const social = [
    { name: 'GitHub', url: 'https://github.com/eduardofl' },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/eduardofonteslourenco/',
    },
  ];

  return (
    <>
      <Header title="Blog" sections={sections} />
      <main>{children}</main>
      <Footer social={social} />
    </>
  );
};

export default Layout;
