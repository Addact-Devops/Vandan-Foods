import { Fragment } from 'react/jsx-runtime';
import { Footer } from './components/organisms/Footer';
import { Header } from './components/organisms/Header';

export default function Home() {
  return (
    <Fragment>
      <Header />
      <Footer />
    </Fragment>
  );
}
