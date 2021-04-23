import Layout from '../components/Layout';
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {

  String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
