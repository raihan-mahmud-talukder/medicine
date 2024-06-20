import { useEffect, useState } from "react"
import axios from 'axios'
import { data } from "../medicine"

export const Products = () => {
    const [products, setProducts] = useState([])
    document.title = 'PRODUCTS'

    function dataSort(data) {
        let sortedData = data
        
        sortedData.forEach(element => {
            
            // element.genericName.sort((a, b) => {
            //     let fa = a.toLowerCase().trim()
            //     let fb = b.toLowerCase().trim()
                
            //     if (fa < fb) {
            //         return -1
            //     } else {
            //         return 1
            //     }
            // })
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


    // sortedData.sort((a, b) => { return a.unitPrice - b.unitPrice })


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
                        </tr>
                        {products.map((product, index) => { return <Product product={product} key={product._id} index={index} /> })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

const Product = ({ product, index }) => {

    const replaced = name => {
        if (name.includes(',')) {
            const changed = name.split(', ')
            return changed.map(item => <div key={item}>{item}</div>)
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
        </tr>
    )
}