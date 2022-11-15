import React, { useReducer } from 'react'
import "./Product.css"
import reducer, { initialState } from './Reducer';
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating }) {
    // grab the specific product and add to the basket with addToBasket function below
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        // console.log("this is the basket>>>", basket)

        // dispatch the item in the dataLayer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };


    return (
        <div className='product'>

            <div className="product_info">
                {/* <h6>{id}</h6> */}
                <p>{title}</p>

                <p className='product_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="product_rating">
                    {/* <p>{rating} {rating} {rating} {rating}</p> (prop-focused stars)

                    This method works the same way as it does from below method */}

                    {Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>

                <img className="product_img" src={image} alt="Product_Image" />

            </div>

            <button onClick={addToBasket}>Add to Basket</button>

        </div>
    )
}

export default Product