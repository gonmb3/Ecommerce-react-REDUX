import "../styles/products.css"
import { Link } from 'react-router-dom';
import { useState , useEffect} from 'react';

import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions";



const ShowProducts = () => {
  const [ data, setData] =  useState([]);
  const [ filter, setFilter] =  useState(data);
  const [ loading, setLoading] =  useState(false);


       /*GET PRODUCTS FROM API*/
       useEffect(() => {
        const getProducts = async () => {
            setLoading(true)
            const resp = await fetch("https://fakestoreapi.com/products")
            const products = await resp.json();
            
            setData(products)
            setFilter(products);
           
        }
        setLoading(false)
        getProducts();
    }, []);


        {/*FILTER PRODUCTS FUNCTION------*/ }
        const filterProduct = (category) => {
          const filterList = data.filter(c => c.category === category);
              setFilter(filterList)
       }

       const dispatch = useDispatch();

       const addProduct = (product) => {
        dispatch(addToCart(product))
       }



  return (
    <div className='container'>
      {/*FILTER BUTTONS ------*/}
      <h4>FILTERS</h4>
      <div className="buttons">
  
        <button className='btn' type="submit" onClick={() => setFilter(data)}>All</button>
        <button className='btn' type="submit" onClick={() => filterProduct("men's clothing")}>Men´s Clothing</button>
        <button className='btn' type="submit" onClick={() => filterProduct("women's clothing")}>Woman´s Clothing</button>
        <button className='btn' type="submit" onClick={() => filterProduct("electronics")}>Electronics</button>
        <button className='btn' type="submit" onClick={() => filterProduct("jewelery")}>Jewelery</button>
      </div>


      <div className="cards">{/*PRODUCTS  CARD------*/}
        {
          filter.map(product => (
           
          <div className="card" key={product.id}>
          <Link to={`/product/${product.id}`} >
                <div className="card-header">
                  <img src={product.image} alt="" />
                </div>
                <div className="card-body">
                  <h3 className="title">{product.title.substring(0, 15)}...</h3>
                  <div className="other">
                    <span>Rate:{product.rating.rate} </span>
                    <span>${product.price}</span>
                  </div>
                </div>
                </Link>
                <div className="card-footer">
                  <Link 
                 onClick={() => addProduct(product) }
                   className="buyNow">Add to Cart</Link>
                </div>

              </div>
           

          ))
        }
      </div>



    </div>
  )
}

export default ShowProducts