import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <header className="body-font bg-gray-900">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/app-project/user/home" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <FontAwesomeIcon icon={faGift}  style={{ color: 'white' }} />
          <span className="ml-3 text-white text-xl">GiftWonders</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/app-project/user/home" className="mr-5 text-white text-white">Home</Link>
          <Link to="/app-project/user/about" className="mr-5 text-white text-white">About</Link>
          <Link to="/app-project/user/shop" className="mr-5 text-white text-white">Shop</Link>
          <Link to="/app-project/user/profile" className="mr-5 text-white text-white">Profile</Link>
          <Link to="/app-project/user/cart" className="mr-5 text-white text-white">
            <FontAwesomeIcon icon={faShoppingCart} />
          </Link>
        </nav>
        <button className="inline-flex items-center bg-white text-gray-900 border-0 py-1 px-3 focus:outline-none hover:bg-white rounded text-base mt-4 md:mt-0">
          <Link to="/app-project/login">Logout</Link>
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
