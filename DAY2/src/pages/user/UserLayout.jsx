import PropTypes from 'prop-types';
import Navbar from '../../components/ui/Navbar';
 import Footer from '../../components/ui/Footer';
 import Home from './Home';
const UserLayout = ({ children }) => {
  return (
    <div className="user_container">
      <header>
        <Navbar />
      </header>
      <main>
        <Home/>
        {children}
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

UserLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserLayout;
