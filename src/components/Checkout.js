import React from 'react'
import "./Checkout.css"
import Subtotal from "./Subtotal"
import BasketItem from './BasketItem'
import { useStateValue } from './StateProvider';


function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className='checkout'>

            <div className="checkout_left">

                <img className='checkout_ad' src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/GiftCards/LPAIndia/Header/170_AP_1500x300.jpg" alt="" />

                <div className="checkout_title">
                    <h3> Hello, {user?.email}</h3>      {/* displays the user's name/email in the checkout page */}

                    <h2>Your Shopping Basket</h2>
                </div>

                <div className="basketItem_checkout">
                    {basket.map(item => (
                        <BasketItem
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            rating={item.rating}
                            price={item.price}
                        />
                    ))}
                </div>

            </div>

            <div className="checkout_right">
                <Subtotal />
            </div>

        </div>
    )
}

export default Checkout