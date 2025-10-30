import {React,useState} from 'react'
import {FaSearch,FaTimes,FaBars, FaHeart, FaShoppingBag} from 'react-icons/fa'
import { useAuth } from './Authcontent';
import { useWishlist } from './WishlistContext';
import { useCartlist } from './CartlistContext';
import { useNavigate } from "react-router-dom";
import logo from '../Assets/Nykaalogo.png'
import puma from '../Assets/puma.jpeg'
import puma1 from '../Assets/puma1.jpeg'
import puma2 from '../Assets/puma2.jpeg'
import puma3 from '../Assets/puma3.jpeg'
import './styli.css'

const Puma = () => {
    const navigate = useNavigate();
      const { isAuthenticated, login, logout } = useAuth();
      const { addToWishlist, wishlistItems } = useWishlist();
      const { addToCartlist, cartlistItems } = useCartlist();
      const wishlistCount = wishlistItems.length;
      const cartlistCount = cartlistItems.length;
       const [menuOpen, setMenuOpen] = useState(false);

      const product = {
        id: 2,
        name: "Smashic Unisex White Sneakers",
        img: puma,
        price: "₹2,250"
      };

      const handleAddToWishlist = () => {
        addToWishlist(product);
        navigate("/wishlist");
      };
       
      const handleLogout = () => {
        logout();
        navigate("/");
      };
    
      const handleLogin = () => {
        login()
        navigate("/");
      };
  return (
    <div>
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div> 
            <nav >
                <button className="hamburger-button" onClick={() => setMenuOpen(!menuOpen)} style={{backgroundColor:"transparent"}}>
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
        <div className="product-container">
            <div className="product-images">
                <div className="thumbnail-gallery">
                    <img src={puma} alt="styli" />
                    <img src={puma1} alt="styli" />
                    <img src={puma2} alt="styli" />
                    <img src={puma3} alt="styli" />
                </div>
                <div className="main-image">
                    <img src={puma} alt="styli" />
                </div>
            </div>
            <div className="product-details">
                <p className='tag'>BestSeller</p>
                <h2 className='product-title'>Smashic Unisex White Sneakers</h2>
                <div className="rating-section">
                    <span className='rating'>3.9</span>
                    <span class="reviews">Based on 1541 ratings</span>
                </div>
                <div class="price-box">
                    <span class="price">₹2,250</span> &nbsp; &nbsp;
                    <span class="discount">50% Off</span>
                </div>
                <div className="size-section">
                    <h4>Select Size</h4>
                    <button>30</button>
                    <button>32</button>
                    <button>34</button>
                    <button>36</button>
                    <button>38</button>
                </div>
                <div class="action-buttons">
                    <button class="wishlist-btn" onClick={handleAddToWishlist}>♡ Add to Wishlist</button>
                    <button class="bag-btn" onClick={() => addToCartlist(product)}>Add to Bag</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Puma