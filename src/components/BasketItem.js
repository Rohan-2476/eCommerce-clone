import React from 'react'
import "./BasketItem.css"
import { useStateValue } from './StateProvider';
// import {reducer} from './Reducer';

function BasketItem({ id, image, title, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }

    return (
        <div className='basketItem'>
            <img className='basketItem_img' src={image} alt="" />

            <div className="basketItem_info">
                <p className='basketItem_title'>{title}</p>
                <p>{id}</p>

                <p>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="basketItem_rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>

                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>

        </div>
    )
}

export default BasketItem