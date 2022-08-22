import React from 'react'
import "./Checkout.css"
// import Header from './Header'
// import { Link } from 'react-router-dom'
import Subtotal from './Subtotal'

function Checkout() {
  return (
    <div className='checkout'>
    
     <div className='checckout__left'>
      <img className='checkout__ad' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"/>
      <div>
        <h2 className='checkout__title'>
          Your shoping Basket
        </h2>
      </div>
     </div>
     <div className='checkout__right'>
      <Subtotal />

     </div>
    </div>
  )
}

export default Checkout
