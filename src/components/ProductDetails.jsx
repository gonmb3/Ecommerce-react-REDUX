import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect} from 'react';

import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions";

import { AiTwotoneStar, AiOutlineShoppingCart} from "react-icons/ai"
import Loading from './Loading';



const ProductDetails = () => {
    const { id } = useParams();
   
    const [ data, setData] =  useState([]);
    const [ loading, setLoading] =  useState(false);

    const dispatch = useDispatch();

    const addProduct = (product) => {
     dispatch(addToCart(product))
    }


    useEffect(() => {
        const getProducts = async () => {
            setLoading(true)
            const resp = await fetch(`https://fakestoreapi.com/products/${id}`)
            const products = await resp.json();

            setData(products)
            setLoading(false)
        }
        getProducts();
    }, [])

    


    return (
        <div className='container details'>
            <div className="row_details">
                {loading ? <Loading /> : (
                    <div className='product-details'>
                        <div className="col ">
                            <img src={data.image} alt={data.title} />
                        </div>
                        <div className="col">

                            <h2>{data.title}</h2>


                            <span >{data.category} </span> <br />

                            <div className='mt'>
                                <span className='mt'>Rating:  3 <AiTwotoneStar color="yellow" size={19} /> </span>
                            </div>
                            <p>{data.description}</p>


                            <span className='price'>$ {data.price} </span>
                           <div className="">
                           <button 
                           onClick={() => addProduct(data) }
                            className='addToCart'>
                                 <AiOutlineShoppingCart size={25}/>
                                  Add to Cart
                            </button>
                           </div>
                        </div>

                    </div>
                )}
            </div>

        </div>
    )
}

export default ProductDetails