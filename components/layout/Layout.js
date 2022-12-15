import Navbar from './Navbar';
// import styles from '../../styles/layout/layout.module.css'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />

      {children}
    </>
  );
};

export default Layout;
