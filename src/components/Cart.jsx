import React from 'react'
import { useSelector, useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteFromCart } from '../redux/actions';

import "../styles/cart.css"


const Cart = () => {
    const state = useSelector(state => state.handleCart);

  return (
    <div className='cart container'>
       <div className="">
         <div className="row">
            {state.length === 0 && <div className='empty'><h2>Your Cart is Empty!</h2></div>}
             {state.length !== 0 && state.map(cartItems)}
             {state.length !== 0 && <Checkout className=''/>}
         </div>
       </div>
    </div>
  )
}

const cartItems = (cartItem) =>{

    const dispatch = useDispatch();

    const handleDelete = (item) => {
        dispatch(deleteFromCart(item))
    }

    return(
        <div className="col colItem" key={cartItem.id}>
            <div className="topCol">
                <button
                onClick={() => handleDelete(cartItem)}
                >
                    X
                </button>
            </div>
            <div className="middleCol">
                <div className="left">
                        <img src={cartItem.image} alt={cartItem.title} />
                </div>

                <div className="right">
                    <h3>{cartItem.title}</h3>
                    <span>${cartItem.price}</span>
                </div>
            </div>
        </div>
    )
}

const  Checkout = () => {

    return (
            <div className='col '>
                    <Link className='checkout' to ="/checkout">
                        Proceed to Checkout
                    </Link>
            </div>
    )
}




export default Cart