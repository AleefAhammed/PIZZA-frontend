import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Cart from '../components/Cart'


function CartPage() {
  return (
    <div className="bg-[#f7e4e4]">
      <Navbar />
      <Cart/>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default CartPage