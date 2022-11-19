import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Products from './components/Products'
import "./styles/header.css"
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Checkout from './components/Checkout';


const App = () => {
  return (
    <>
      <Header/>     
          <Routes>
                <Route path="/" element ={ <Home/>}/>
                <Route path="/products" element= {<Products/>}/>
                <Route path="/product/:id" element= {<ProductDetails/>}/>
                <Route path="/cart" element= {<Cart/>}/>
                <Route path="/checkout" element= {<Checkout/>}/>
          </Routes>
      <Footer/>
    </>
  )
}

export default App