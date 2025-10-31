import {React,useState} from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaTimes, FaBars, FaSearch, FaShoppingBag  } from "react-icons/fa";
import { useAuth } from "./Authcontent";
import { useWishlist } from "./WishlistContext";
import { useCartlist } from "./CartlistContext";
import logo from '../Assets/Nykaalogo.png'
import './cart.css'
const Cart = () => {
  const navigate = useNavigate();
  const { isAuthenticated, login, logout } = useAuth();
  const { wishlistItems } = useWishlist();
  const { cartlistItems, removeFromCartlist } = useCartlist();
   const [menuOpen, setMenuOpen] = useState(false);
   const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleLogin = () => {
    login()
    navigate("/");
  };
   const wishlistCount = wishlistItems.length;
   const cartlistCount = cartlistItems.length;
  return (
    <div>
      <div className="navbar" >  
                              <div className="logo">
                                  <img src={logo} alt="logo" />
                               </div> 
                              <nav >
                                  <button className="hamburger-button" onClick={() => setMenuOpen(!menuOpen)} >
                              {menuOpen ? <FaTimes /> : <FaBars />}
                            </button>
                              <div className={`side-menu ${menuOpen ? 'open' : ''}`}>
                                  <div className="menu-item" onClick={() => { 
                              navigate("/home"); 
                              setMenuOpen(false); 
                          }}
                          >
                          Home
                              
                          </div>
                            </div>
                            {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)}></div>}
                              </nav>
                              <div className="nav-search">
                                  <input type="text" placeholder='search products...' />
                                  <FaSearch className='search-icon'/>
                              </div>
                              
                              <div className="nav-buttons">
                              {isAuthenticated ? (
                              <>
                                  <div className="icon-btn" onClick={() => navigate("/wishlist")}>
                                  <FaHeart className="icon" />
                                  <span className="badge">{wishlistCount}</span>
                                  </div>
                                  <div className="icon-btn" onClick={() => navigate("/cart")}>
                                  <FaShoppingBag className="icon" />
                                  <span className="badge">{cartlistCount}</span>
                                  </div>
                                  <button onClick={handleLogout} className="logout-btn">Logout</button>
                              </>
                              ) : (
                              <>
                                  <button onClick={handleLogin} className="login-btn">Login</button>
                                  <button onClick={() => navigate("/signup")} className="signup-btn">SignUp</button>
                              </>
                          )}
                          </div>
                  </div>
      <div className="cart-container">
      <h2>Your Cart</h2>

      <div className="cart-items">
        {cartlistItems.map(item => (
          <div className="cart-card" key={`${item.id}-${item.selectedSize}`}>
            <img src={item.img} alt={item.name} />

            <div className="cart-details">
              <h3>{item.name}</h3>
              <p>Size: {item.selectedSize}</p>
              <div className="quantity-control">
                <button className="quantity-btn">-</button>
                <span>1</span>
                <button className="quantity-btn">+</button>
              </div>
            </div>

            <button className="remove-btn" onClick={() => removeFromCartlist(item.id)}>Remove</button>
          </div>
        ))}
      </div>

      <div className="checkout-section">
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
    </div>
  );
};

export default Cart;