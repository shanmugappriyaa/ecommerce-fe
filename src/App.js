import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Wishlist from "./pages/Wishlist";
import OurStore from "./pages/OurStore";
import Login from "./pages/Login";
import Forgetpassword from "./pages/Forgetpassword";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import UpdateProfile from "./pages/updateProfile";
import MyOrder from "./pages/MyOrder";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="product" element={<OurStore />} />
            <Route path="myorders" element={<MyOrder/>} />
            <Route path="product/:id" element={<SingleProduct />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="cart" element={<Cart />} />
            <Route path="login" element={<Login />} />
            <Route path="forgot-password" element={<Forgetpassword />} />
            <Route path="sign-up" element={<Signup />} />
            <Route path="reset-password/:id" element={<ResetPassword />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="my-profile" element={<UpdateProfile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
