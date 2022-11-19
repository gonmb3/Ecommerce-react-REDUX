import {
  BsFillTelephoneFill,
  BsEnvelopeFill, 
  BsFacebook, BsInstagram,
   BsTwitter
} from "react-icons/bs"

import { Link } from "react-router-dom"
import { useSelector } from 'react-redux';




 
 
const Header = () => {

  const state = useSelector(state => state.handleCart)

  return (
    <>
        <div className='header'>
            <div className="container">
              <div className="top row">
                                          {    /*CONTACT*/    }
                <div className="col">
                  <div className="topDiv">
                    <span><BsFillTelephoneFill size={15} /> +312 -555-555</span>
                  </div>

                  <div className="topDiv">
                    <span><BsEnvelopeFill size={15} /> email@email.com</span>
                  </div>

                </div>
                <div className="col">
                                 {    /*SOCIALS ICONS*/    }
                <div className="topDiv">

                <a href="https://www.facebook.com/" target="_BLANK"><BsFacebook className="icon black" size={15} /> </a>
                <a href="https://www.facebook.com/" target="_BLANK"><BsInstagram className="icon black" size={15} /> </a>
                <a href="https://www.facebook.com/" target="_BLANK"><BsTwitter className="icon black" size={15} />  </a>
                     
                 </div>

                </div>
              </div>

              <div className="middle row">  
                <div className="col">            {    /*LOGO*/    }
                  <Link to="/"><h1 className="logo">GZM Store</h1></Link>
                </div>
                <div className="col">
                  <div className="nav">              {    /*NAV LINKS*/    }
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/products">Products</Link>
                      </li>
          
             
                    </ul>
                  </div>
                </div>                     {    /*LOGIN, REGISTER CART -----*/    }
                <div className="col">
                  <div className="buttons">
                  <Link to="/cart">Cart ({state.length})</Link>
                 </div>
                </div>

              </div>
            </div>
        </div>
    </>
  )
}

export default Header