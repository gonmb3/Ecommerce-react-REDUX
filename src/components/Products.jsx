
import { useState , useEffect} from 'react';
import "../styles/products.css"
import Loading from './Loading';
import ShowProducts from './ShowProducts';

const Products = () => {

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
                setLoading(false)
            }
            getProducts();
        }, []);

  return (
    <div className='container products'>
        <div className="row rowTitle">
            <div className="col">
                <h1 className="title">Last Products</h1>
                <hr />
            </div>
        </div>

        <div className="row productsRow">
            <div className="col">
                    {
                        loading ? <Loading/> :
                         <ShowProducts
                         setFilter ={setFilter}
                          filter={filter
                        } data={data} />
                    }
            </div>
        </div>
    </div>
  )
}

export default Products