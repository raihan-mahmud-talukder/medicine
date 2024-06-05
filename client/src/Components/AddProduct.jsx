import axios from 'axios'
import { useState } from 'react'

export const AddProduct = () => {
    const [genericName, setGenericName] = useState([])
    const [brandName, setBrandName] = useState()
    const [companyName, setCompanyName] = useState()
    const [dosageForm, setdosageForm] = useState()
    const [strength, setStrength] = useState([])
    const [packSize, setPackSize] = useState()
    const [unitPrice, setUnitPrice] = useState()
    const [therapeuticClass, settherapeuticClass] = useState()

    const addProduct = async () => {
        const newProduct = {
            genericName, brandName, companyName, dosageForm, strength, packSize, unitPrice, therapeuticClass
        }

        try {
            const result = (await axios.post('/api/products/addproduct', newProduct)).data
            console.log(result)
        } catch (error) { console.log(error) }
    }
    return (
        <>
        asdf
        </>
    )
}