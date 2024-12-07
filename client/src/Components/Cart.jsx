import React, { useEffect, useState } from "react"

export const Cart = () => {
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

  const replaced = name => {
    if (name.includes(',')) {
      const changed = name.split(', ')
      return changed.map((item, index) => <div key={index}>{item}</div>)
    } else return name
  }

  return (
    <>
      <h1>Cart List</h1>
      <div style={{ textAlign: 'center' }}>
        <p>{new Date().toDateString()}</p>
        <p><b>Customer Name:</b> Shaikh Raihan Mahmud Talukder</p>
        <p><b>Prescribed By:</b> Self</p>
      </div>
      <h4>{cart.length} medicines are in the cart</h4>
      {/* <button>Generate</button> */}
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
              <th>Therapeutic Class</th>
              {/* <th>Pack Size</th>
              <th>Unit Price</th>
              <th>Quantity</th> */}
              <th onClick={() => {
                alert('Are you sure to clear the cart?')
                setCart(cart.splice(0, cart.length))
                localStorage.setItem('cart', JSON.stringify(cart))
              }}>CLR</th>
            </tr>
            {cart.map((product, index) => {
              return <tr key={index}>
                <td>{(index + 1) < 10 ? `0${index + 1}` : (index + 1)}</td>
                <td>{replaced(product.genericName)}</td>
                <td>{replaced(product.strength)}</td>
                <td>{replaced(product.dosageForm)}</td>
                <td style={{ color: 'green', fontWeight: 'bold', textTransform: 'uppercase' }}>{product.brandName}</td>
                <td style={{ textTransform: 'upperCase' }}>{product.companyName}</td>
                <td>{product.therapeuticClass}</td>
                {/* <td>{product.packSize}</td>
                <td>{product.unitPrice.toFixed(2)}</td>
                <td><input type="number" min={1} max={60} /> &nbsp;
                  <select>
                    <option>select</option>
                    <option>Unit</option>
                    <option>Sachet</option>
                    <option>Strip</option>
                    <option>Box</option>
                  </select>
                </td> */}
                <td><button onClick={() => {
                  setCart(cart.splice(index, 1))
                  localStorage.setItem('cart', JSON.stringify(cart))
                }}
                >❌</button></td>
              </tr>
            })}
          </tbody>
        </table>
      </div >
    </>
  )
}