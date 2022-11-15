import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

// To link through pages without reloading!
import { Link } from 'react-router-dom';

// import for "Add to Basket" functionality
import { useStateValue } from './StateProvider'

// for firebase authentication
import { auth } from '../firebase';



function Header() {
    // grab the basket and dynamically change the basket value in the header
    const [{ basket, user }, dispatch] = useStateValue();

    //to display/switch between sign-in & sign-out on the header
    const handleAuthentication = () => {
        if (user) {
            auth.signOut()
        }
    }

    return (
        <div className='header'>
            {/* link to homepage */}
            <Link to='/'>
                <img className='header_logo' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon" />
            </Link>

            <div className="header_search">
                <input type="text" className='searchInput' />
                <SearchIcon className='header_searchIcon' />
            </div>

            <div className="header_nav">
                {/* if there's not a user, it will redirect to login page (!user) */}
                <Link to={!user && '/login'}>
                    <div onClick={handleAuthentication} className="header_options">
                        <span className='header_option1'>
                            Hello Guest
                        </span>
                        <span className='header_option2'>
                            {/* if the user is signed in, it will say 'sign-out' or else 'sign-in' */}
                            {user ? 'Sign out' : 'Sign in'}
                        </span>
                    </div>
                </Link>

                <div className="header_options">
                    <span className='header_option1'>
                        Returns
                    </span>
                    <span className='header_option2'>
                        & Orders
                    </span>
                </div>

                <div className="header_options">
                    <span className='header_option1'>
                        Your
                    </span>
                    <span className='header_option2'>
                        Prime
                    </span>
                </div>

                {/* link to basket/cart */}
                <Link to='/checkout'>
                    <div className="shoppingBag">
                        <ShoppingBagIcon className='cart' />
                        <span className='header_option2 cartCount'>{basket?.length}</span>
                    </div>
                </Link>
            </div>

        </div >
    )
}

export default Header