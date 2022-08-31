import '../styles/globals.scss';
import '../styles/Home.scss';
import '../styles/Nav.scss';
import '../styles/Footer.scss'
import '../styles/Contact.scss'
import '../styles/Error.scss'
import "../styles/swiper.scss";

import Layout from '../layouts/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
