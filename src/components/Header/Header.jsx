import React, { useState ,useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../../assets/images/logo.png";
import "./header.scss";
import { HiShoppingCart } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { handleCategory } from '../../store/features/filterSlice';
import LoginPage from './LoginPage';
import About from './About'; // Assuming that About.js is in the same directory as the header component



const Header = () => {
    const [hamburger, setHamburger] = useState(true);
    const [nav, setNav] = useState(false);
    const cart = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const getTotalQuantity = () => {
        let total = 0;
        cart.forEach((item) => {
            total += item.quantity;
        });
        return total;
    };
    const getTotalPrice = () => {
        let total = 0;
        cart.forEach((item) => {
            total += Math.round(item.price) * item.quantity;
        });
        return total;
    };
    const changeCategory = (category) => {
        dispatch(handleCategory(category));
        navigate('/shop')
    }
    const closeHamburger = () => {
        setNav(false);
        setHamburger(true)
    }
    const openHamburger = () => {
        setNav(true);
        setHamburger(false)
    }
    const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user details from the server using the JWT token
    const token = localStorage.getItem('token');
    if (token) {
      fetch('/getUserDetails', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setUser(data);
        })
        .catch((error) => {
          console.error('Error fetching user details:', error);
        });
    }
  }, []);

    return (
        <header className='bg-success'>
            <div className="page-container">
                <div className="header-content">
                    <div className="header-left">
                        <div className="logo-part pe-4">
                            <Link to="/"><img src={logo} alt="logo" /></Link>
                        </div>
                        <ul className='dekstop-nav list-unstyled m-0'>
                            {/* <li><button className='clean-button' onClick={() => { changeCategory("All") }}>All Products</button></li> */}
                            <li><button className='clean-button' onClick={() => { changeCategory("Seeds") }}>Seeds</button></li>
                            <li><button className='clean-button' onClick={() => { changeCategory("Fertilizers") }}>Fertilizers</button></li>
                            <li><button className='clean-button' onClick={() => { changeCategory("Grains") }}>Grains</button></li>
                            <li><button className='clean-button' onClick={() => { changeCategory("Equipments") }}>Equipments</button></li>
                            <li><Link to="./LoginPage"><p>Login</p></Link></li>
                            <li><Link to="./About"><p>About Us</p></Link></li>
                            <li><Link to="./Contact"><p>Contact Us</p></Link></li><li>
                           {user && (
        <div>
          <p> name:{user.username}</p>
          {/* Add more user details here */}
        </div>
        
      )}</li>
                        </ul>
                        
                    </div>
                    
                    <div className="header-right">
                        <p className='price'>₹ {getTotalPrice()}.00</p>
                        <div className='cart'>
                            <Link to="/cart"><HiShoppingCart /></Link>
                            <p className='cart-quantity'>{getTotalQuantity()}</p>
                        </div>
                       
                        
                    </div>
                </div>
            </div>
            <ul className={nav ? 'mobile-nav open-nav  list-unstyled m-0' : 'mobile-nav list-unstyled m-0'}>
                {/* <li><button className='clean-button' onClick={() => { changeCategory("All Products"); closeHamburger() }}>All Products</button></li> */}
                <li><button className='clean-button' onClick={() => { changeCategory("Seeds"); closeHamburger() }}>Seeds</button></li>
                <li><button className='clean-button' onClick={() => { changeCategory("Fertilizers"); closeHamburger() }}>Fertilizers</button></li>
                <li><button className='clean-button' onClick={() => { changeCategory("Grains"); closeHamburger() }}>Grains</button></li>
                <li><button className='clean-button' onClick={() => { changeCategory("Equipments"); closeHamburger() }}>Equipments</button></li>

            </ul>
        </header>
    )
}

export default Header;