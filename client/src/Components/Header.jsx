import { NavLink, Route, Routes } from "react-router-dom"
import { AddProduct } from "./AddProduct"
import { Home } from "./Home"
import { Products } from "./Products"
import { Cart } from "./Cart"

export const Header = () => {

    return (
        <>
            <header>
                <h1>Medicine</h1>
                <menu>
                    <ul>
                        <li><NavLink to='/' className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink></li>
                        <li><NavLink to='/products' className={({ isActive }) => (isActive ? "active" : "")}>Products</NavLink></li>
                        <li><NavLink to='/addproduct' className={({ isActive }) => (isActive ? "active" : "")}>Add Products</NavLink></li>
                        <li><NavLink to='/cart' className={({ isActive }) => (isActive ? "active" : "")}>Cart</NavLink></li>
                    </ul>
                </menu>
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/addproduct" element={<AddProduct />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </>
    )
}