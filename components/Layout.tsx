import Header from "./Header";
import Footer from "./Footer";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Layout = ({ children }) => {
  const sections = [
    { title: 'About', url: '/about' },
  ];

  const social = [
    { name: 'GitHub', icon: GitHubIcon, url: 'https://github.com/eduardofl' },
    { name: 'Twitter', icon: TwitterIcon, url: '#' },
    { name: 'LinkedIn', icon: LinkedInIcon, url: 'https://www.linkedin.com/in/eduardofonteslourenco/' },
  ];

  return (
    <div>
      <Header title="Blog" sections={sections} />
      {children}
      <Footer social={social} />
    </div>
  );
};

export default Layout;