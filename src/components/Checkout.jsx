import "../styles/checkout.css"
import { Link } from 'react-router-dom';
import { useSelector} from 'react-redux';

const Checkout = () => {

    const state = useSelector(state => state.handleCart);

    var total = 0;

    const itemList = (item) => {
        total = total + item.price;
        return(
            <div className="totalContent">
               <img style={{width:30}} src={item.image} alt={item.title} />
                <span>${Math.ceil(item.price)}</span>
            </div>
        )
    }
    

  return (
    <div className='container checkoutItems'>
        <div className="row">
            <div className="col">
                <div className="form">
                    <label htmlFor="name">Name</label>
                    <input type="text" id='name'/>
                </div>
                <div className="form">
                    <label htmlFor="address">Address</label>
                    <input type="text" id='address' />
                </div>
                <div className="form">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" id='phone' />
                </div>

               <div className="form">
                 <Link className='checkout' to ="/checkout">
                     Checkout
                    </Link>
               </div>

          
            </div>
            <div className="col">
                <div className="totalCart">
                    <h2>Your Cart : <span>{state.length}</span></h2>
                    <div className="totalInfo">
                        <div className="">
                        {
                            state.map(itemList)
                        }
                        </div>
                    </div>
                    <div className="total">
                        <p>TOTAL: </p>
                        <span>${total}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Checkout