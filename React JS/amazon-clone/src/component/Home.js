import React from 'react'
import './Home.css';
import Product from './Product';
import Checkout from './Checkout';
function Home() {
    const imgUrl1 = 'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_5Y400_.jpg';
  return (
    <div className='home'>
     <div className='home__container'>
        <img className='home__image' src='https://m.media-amazon.com/images/I/717OO5QwJnL._SX3000_.jpg' alt=''/>
        
        <div className='home__row'>
        <Product
         id="123123123"
         title="The lean startup" 
         price={29.99} 
         image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_5Y400_.jpg" 
         rating={5}
         />
        <Product 
        id= "147147"
        title="Kenwood kMix Stand Mixer for Baking, Styling Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Liter Glass Bowl"
        price = {230}
        image = 'https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg'
        />
        
        </div>

        <div className='home__row'>
            <Product 
            id='369369'
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            />
            <Product 
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            />
            <Product 
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            />
        </div>

        <div className='home__row'>
           <Product 
           id="90829332"
           title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
           price={1094.98}
           rating={4}
           image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
           />
        </div>
     </div>
     <button className='checkout_section' onClick='Checkout'>Click Here to checkout</button>
    </div>
  )
}

export default Home
