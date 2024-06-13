import { useEffect, useState } from "react"
import axios from 'axios'

export const Products = () => {
    const [products, setProducts] = useState([])
    document.title = 'PRODUCTS'

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = (await axios.get('/api/products/getallproducts')).data
                setProducts(data)
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
                            <th>Brand Name</th>
                            <th>Company</th>
                            <th>Dosage Form</th>
                            <th>Strength</th>
                            <th>Pack Size</th>
                            <th>Unit Price</th>
                            <th>Therapeutic Class</th>
                        </tr>
                        {products.map((product, index) => { return <Product product={product} key={product._id} index={index} /> })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

const Product = ({ product, index }) => {
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{product.genericName}</td>
            <td>{product.brandName}</td>
            <td>{product.companyName}</td>
            <td>{product.dosageForm}</td>
            <td>{product.strength}</td>
            <td>{product.packSize}</td>
            <td>BDT {product.unitPrice}</td>
            <td>{product.therapeuticClass}</td>
        </tr>
    )
}