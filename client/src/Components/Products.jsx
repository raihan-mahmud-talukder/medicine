import { useEffect, useState } from "react"
import axios from 'axios'

export const Products = () => {
    const [products, setProducts] = useState([])

    const getLocalCartData = () => {
        if (localStorage.getItem('cart') === null) {
            return []
        } else {
            return JSON.parse(localStorage.getItem('cart'))
        }
    }

    let cartProduct = getLocalCartData()

    const addToCart = product => {
        if (!(cartProduct.includes(product))) {
            console.log(!cartProduct.includes(product))
            cartProduct.push(product)
            localStorage.setItem('cart', JSON.stringify(cartProduct))
        } else alert('Medicine has already been added to cart!')
    }

    document.title = 'PRODUCTS'
    function dataSort(data) {
        let sortedData = data

        sortedData.sort((a, b) => {
            let fa = a.genericName.toLowerCase().trim()
            let fb = b.genericName.toLowerCase().trim()
            let bA = a.brandName.toLowerCase().trim()
            let bB = b.brandName.toLowerCase().trim()

            if (fa < fb) return -1
            else if (fa > fb) return 1
            else if (fa === fb) {
                if (bA < bB) return -1
                else return 1
            } else return 0
        })
        return sortedData
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = (await axios.get('/api/products/getallproducts')).data
                setProducts(dataSort(data))

            } catch (error) { console.log(error) }
        }
        fetchData()
    }, [])

    return (
        <>
            <h1>Medication List</h1>
            <h4>{products.length} medicines are available</h4>
            <div className="products">
                <table>
                    <tbody>
                        <tr>
                            <th>sl</th>
                            <th>Generic Name</th>
                            <th>Strength</th>
                            <th>Dosage Form</th>
                            <th>Brand Name</th>
                            <th>Company</th>
                            <th>Pack Size</th>
                            <th>Unit Price</th>
                            <th>Therapeutic Class</th>
                            <th>ADD</th>
                        </tr>
                        {products.map((product, index) => { return <Product addToCartProp={addToCart} product={product} key={product._id} index={index} cart /> })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

const Product = ({ product, index, addToCartProp }) => {
    const replaced = name => {
        if (name.includes(',')) {
            const changed = name.split(', ')
            return changed.map((item, index) => <div key={index}>{item}</div>)
        } else return name
    }
    return (
        <tr>
            <td>{(index + 1) < 10 ? `0${index + 1}` : (index + 1)}</td>
            <td>{replaced(product.genericName)}</td>
            <td>{replaced(product.strength)}</td>
            <td>{replaced(product.dosageForm)}</td>
            <td>{product.brandName}</td>
            <td>{product.companyName}</td>
            <td>{product.packSize}</td>
            <td>BDT {product.unitPrice.toFixed(2)}</td>
            <td>{product.therapeuticClass}</td>
            <td><button onClick={() => addToCartProp(product)}>➕</button></td>
        </tr>
    )
}