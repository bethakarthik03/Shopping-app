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
import BagsStyli from "./components/BagsStyli.jsx";
import BagsTommy from "./components/BagsTommy.jsx";
import BagsZouk from "./components/BagsZouk.jsx";
import BagsMouchi from "./components/BagsMouchi.jsx";
import ShoesCampus from "./components/ShoesCampus.jsx";
import ShoesPuma from "./components/ShoesPuma.jsx";
import ShoesRedTape from "./components/ShoesRedTape.jsx";
import ShoesReebok from "./components/ShoesReebok.jsx";
import Checkout from "./components/Checkout.jsx";


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
                <Route path="/bagsstyli" element={<BagsStyli />}/>
                <Route path="/bagstommy" element={<BagsTommy />}/>
                <Route path="/bagszouk" element={<BagsZouk />}/>
                <Route path="/bagsmouchi" element={<BagsMouchi />}/>
                <Route path="/shoescampus" element={<ShoesCampus />}/>
                <Route path="/shoespuma" element={<ShoesPuma />}/>
                <Route path="/shoesredtape" element={<ShoesRedTape />}/>
                <Route path="/shoesreebok" element={<ShoesReebok />}/>
                <Route path="/checkout" element={<Checkout />} />
              </Routes>
            </Router>
          </CartlistProvider>
        </WishlistProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
