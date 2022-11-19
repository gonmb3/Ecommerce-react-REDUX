import { Link } from 'react-router-dom'
import {
  BsFacebook, BsInstagram,
   BsTwitter
} from "react-icons/bs"
import "../styles/footer.css"

const Footer = () => {
  return (
    <div className='footer container'>
        <div className="">
            <div className="row">
                <div className="col">
                   <Link to="/">
                    <h2 className='logo'>GZM Store</h2>
                   </Link>
                   <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="col">
                <div className="nav">   
                  <h3>QUICK LINKS</h3>           {    /*NAV LINKS*/    }
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/products">Products</Link>
                      </li>
                      <li>
                        <Link to="/about">About</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col">
                  <h3>Follow Us!</h3>
                  <div className="topDiv">
                  
                  <a href="https://www.facebook.com/" target="_BLANK"><BsFacebook className="icon foot" size={25} /> </a>
                  <a href="https://www.facebook.com/" target="_BLANK"><BsInstagram className="icon foot" size={25} /> </a>
                  <a href="https://www.facebook.com/" target="_BLANK"><BsTwitter className="icon foot" size={25} />  </a>
                       
                   </div>
                </div>
            </div>
           
        </div>
    </div>
  )
}

export default Footer