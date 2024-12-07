import { NavLink, Route, Routes } from "react-router-dom"
import { AddProduct } from "./AddProduct"
import { Home } from "./Home"
import { Products } from "./Products"
import { Cart } from "./Cart"
import { useEffect, useState } from "react"

export const Header = () => {
  const [cart, setCart] = useState([])

  useEffect(() => {
    const medicine = async () => {
      try {
        if (localStorage.getItem('cart') === null) return []
        else { setCart(JSON.parse(localStorage.getItem('cart'))) }
      } catch (error) { console.log(error) }
    }
    medicine()
  }, [])

  return (
    <>
      <header>
        <h1>Medicine</h1>
        <menu>
          <ul>
            <li><NavLink to='/' className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink></li>
            <li><NavLink to='/products' className={({ isActive }) => (isActive ? "active" : "")}>Products</NavLink></li>
            <li><NavLink to='/addproduct' className={({ isActive }) => (isActive ? "active" : "")}>Add Products</NavLink></li>
            <li><NavLink to='/cart' className={({ isActive }) => (isActive ? "active" : "")}>Cart ({cart.length})</NavLink></li>
          </ul>
        </menu>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/pdf" element={<Cart />} />
      </Routes>
    </>
  )
}