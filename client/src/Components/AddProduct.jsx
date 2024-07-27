import axios from 'axios'
import { useState } from 'react'

export const AddProduct = () => {
    const [genericName, setGenericName] = useState('')
    const [brandName, setBrandName] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [dosageForm, setdosageForm] = useState('')
    const [strength, setStrength] = useState('')
    const [packSize, setPackSize] = useState('')
    const [unitPrice, setUnitPrice] = useState('')
    const [therapeuticClass, setTherapeuticClass] = useState('')

    const addProduct = async event => {
        event.preventDefault()
        const newProduct = {
            genericName, brandName, companyName, dosageForm, strength, packSize, unitPrice, therapeuticClass
        }

        try {
            const result = (await axios.post('/api/products/addproduct', newProduct)).data
            setGenericName('')
            setBrandName('')
            setCompanyName('')
            setdosageForm('')
            setStrength('')
            setPackSize('')
            setUnitPrice('')
            setTherapeuticClass('')
        } catch (error) { console.log(error) }
    }
    return (
        <form onSubmit={addProduct} className='add'>
            <h2>Add Product</h2>
            <label htmlFor='genericName'>Generic Name: </label>
            <input type='text'
                placeholder='Generic Name'
                required={true}
                id='genericName'
                value={genericName}
                onChange={event => setGenericName(event.target.value)}
            />
            <label htmlFor='brandName'>Brand Name: </label>
            <input type='text'
                placeholder='Brand Name'
                required={true}
                id='brandName'
                value={brandName}
                onChange={event => setBrandName(event.target.value)}
            />
            <label htmlFor='companyName'>Company Name: </label>
            <input type='text'
                placeholder='Company Name'
                required={true}
                id='companyName'
                value={companyName}
                onChange={event => setCompanyName(event.target.value)}
            />
            <label htmlFor='dosageForm'>Dosage Form: </label>
            <input type='text'
                placeholder='Dosage Form'
                required={true}
                id='dosageForm'
                value={dosageForm}
                onChange={event => setdosageForm(event.target.value)}
            />
            <label htmlFor='strength'>Strength : </label>
            <input type='text'
                placeholder='Strength'
                required={true}
                id='strength'
                value={strength}
                onChange={event => setStrength(event.target.value)}
            />
            <label htmlFor='packSize'>Pack Size: </label>
            <input type='text'
                placeholder='Pack Size'
                required={true}
                id='packSize'
                value={packSize}
                onChange={event => setPackSize(event.target.value)}
            />
            <label htmlFor='unitPrice'>Unit Price: </label>
            <input type='text'
                placeholder='Unit Price'
                required={true}
                id='unitPrice'
                value={unitPrice}
                onChange={event => setUnitPrice(event.target.value)}
            />
            <label htmlFor='therapeuticClass'>Therapeutic Class: </label>
            <input type='text'
                placeholder='Therapeutic Class'
                required={true}
                id='therapeuticClass'
                value={therapeuticClass}
                onChange={event => setTherapeuticClass(event.target.value)}
            /><br />
            {/* <button type="reset" value='reset'>RESET</button> */}
            <button type="submit" value='submit'>SUBMIT</button>
        </form>
    )
}