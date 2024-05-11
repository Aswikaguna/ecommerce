import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./components/Header/CheckoutForm";
import LoginPage from './components/Header/LoginPage';
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Cart from "./pages/Cart/Cart";
import NotFound from "./pages/NotFound/NotFound";
import 'bootstrap/dist/css/bootstrap.css';
import Product from './pages/Product/Product';
import Connect from './components/Connect/Connect';

import SignupPage from './components/Header/SignupPage'
import About from './components/Header/About'
import Contact from './components/Header/Contact'
import PaymentPage from './components/Header/PaymentPage';


function App() {
  return (
    <>
      
      <Header />
      <main>
        <Routes>
        <Route path="/About" element={<About />} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/SignupPage" element={<SignupPage />} />
          <Route path="/" element={<Home />} />
          
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="PaymentPage"element={<PaymentPage/>}/>

        </Routes>
      </main>
      <Connect />
   
      <Footer />
    </>
  );
}

export default App;
