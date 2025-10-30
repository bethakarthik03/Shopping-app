import {React,useState} from 'react'
import {FaSearch,FaTimes,FaBars, FaHeart, FaShoppingBag} from 'react-icons/fa'
import { useAuth } from './Authcontent';
import { useWishlist } from './WishlistContext';
import { useCartlist } from './CartlistContext';
import { useNavigate } from "react-router-dom";
import logo from '../Assets/Nykaalogo.png'
import libas from '../Assets/libas1.jpeg'
import './styli.css'
import libas1 from '../Assets/libas1.jpeg'
import libas2 from '../Assets/libas2.jpeg'
import libas3 from '../Assets/libas3.jpeg'
const WomenLibas = () => {
    const navigate = useNavigate();
      const { isAuthenticated, login, logout } = useAuth();
      const { addToWishlist, wishlistItems } = useWishlist();
      const { addToCartlist, cartlistItems } = useCartlist();
      const wishlistCount = wishlistItems.length;
      const cartlistCount = cartlistItems.length;
       const [menuOpen, setMenuOpen] = useState(false);

      const product = {
        id: 3,
        name: "Women Libas Dress",
        img: libas,
        price: "₹613"
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
                    <img src={libas} alt="libas" />
                    <img src={libas1} alt="libas" />
                    <img src={libas2} alt="libas" />
                    <img src={libas3} alt="libas" />
                </div>
                <div className="main-image">
                    <img src={libas} alt="libas" />
                </div>
            </div>
            <div className="product-details">
                <p className='tag'>BestSeller</p>
                <h2 className='product-title'>Women Libas Dress</h2>
                <div className="rating-section">
                    <span className='rating'>3.8</span>
                    <span class="reviews">Based on 63 ratings</span>
                </div>
                <div class="price-box">
                    <span class="price">₹613</span> &nbsp; &nbsp;
                    <span class="discount">65% Off</span>
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

export default WomenLibas
