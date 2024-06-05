import { NavLink, Route, Routes, useNavigate } from "react-router-dom"
import { AddProduct } from "./AddProduct"
import { Home } from "./Home"

export const Header = () => {
    return (
        <>
            <header>
                <h1>Medicine</h1>
                <menu>
                    <ul>
                        <li><NavLink to='/' className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink></li>
                        <li><NavLink to='/addproduct' className={({ isActive }) => (isActive ? "active" : "")}>Add Products</NavLink></li>
                    </ul>
                </menu>
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/addproduct" element={<AddProduct />} />
            </Routes>
        </>
    )
}