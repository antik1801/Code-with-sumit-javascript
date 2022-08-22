import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div className='header'>
     
      <img className='header_logo' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' />
 
      <div className='header_search'>
      <input className='header_searchInput' type="text" />
      <SearchIcon className='header_searchIcon' />
      {/* logo */}
      </div>
      <div className='header_nav'>
        <div className='header_option'>
          <span className='header_optionOne'>
            Hello Antik
          </span>
          <span className='header_optionTwo'>
            Sign in
          </span>
        </div>
        <div className='header_option'>
        <span className='header_optionOne'>
           Returns
          </span>
          <span className='header_optionTwo'>
            & Orders
          </span>
        </div>
        <div className='header_option'>
        <span className='header_optionOne'>
           Your
          </span>
          <span className='header_optionTwo'>
            Prime
          </span>
        </div>
        <div className='header_optionBasket'>
          <ShoppingBasketIcon />
          <span className='header_optionLineTwo header_basketCount'>0</span>
        </div>
      </div>
    </div>
  )
}

export default Header
