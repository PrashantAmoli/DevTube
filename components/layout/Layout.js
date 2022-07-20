import Navbar from './Navbar';
import Footer from './Footer';
// import styles from '../../styles/layout/layout.module.css'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />

      {children}

      <Footer />
    </>
  );
};

export default Layout;
