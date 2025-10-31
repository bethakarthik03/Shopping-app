// import logo from './logo.svg';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/Authcontent";
import { WishlistProvider } from "./components/WishlistContext";
import { CartlistProvider } from "./components/CartlistContext.jsx";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Fpassword from "./components/Fpassword";
import ResetPassword from "./components/ResetPassword";
import Styli from "./components/Styli";
import Campus from "./components/Campus.jsx";
import Garage from "./components/Garage.jsx";
import Googlelogin from "./components/Googlelogin.jsx";
import Puma from "./components/Puma.jsx";
import Wishlist from "./components/Wishlist.jsx";
import Cart from "./components/Cart.jsx";
import WomenMabish from "./components/WomenMabish.jsx";
import WomenStylum from "./components/WomenStylum.jsx";
import WomenLibas from "./components/WomenLibas.jsx";
import WomenChaabra from "./components/WomenChaabra.jsx";
import KidsAj from "./components/KidsAj.jsx";
import KidsBitiya from "./components/KidsBitiya.jsx";
import KidsKisah from "./components/KidsKisah.jsx";
import KidsStylo from "./components/KidsStylo.jsx";


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <WishlistProvider>
          <CartlistProvider>
            <Router>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/home" element={<Home />} />
                <Route path="/fpassword" element={<Fpassword />} />
                <Route path="/rpassword" element={<ResetPassword />} />
                <Route path="/google-login" element={<Googlelogin />} />
                <Route path="/styli" element={<Styli />} />
                <Route path="/campus" element={<Campus />} />
                <Route path="/garage" element={<Garage />} />
                <Route path="/puma" element={<Puma />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/mabish" element={<WomenMabish />}/>
                <Route path="/stylum" element={<WomenStylum />}/>
                <Route path="/libas" element={<WomenLibas />}/>
                <Route path="/chaabra" element={<WomenChaabra />}/>
                <Route path="/kidsaj" element={<KidsAj />}/>
                <Route path="/kidsbitiya" element={<KidsBitiya />}/>
                <Route path="/kidskisah" element={<KidsKisah />}/>
                <Route path="/kidsstylo" element={<KidsStylo />}/>
              </Routes>
            </Router>
          </CartlistProvider>
        </WishlistProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
