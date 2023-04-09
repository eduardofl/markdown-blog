import Layout from '../components/Layout';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }): JSX.Element => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
