export const Cart = () => {
  const medicine = () => {
    if (localStorage.getItem('cart') === null) return []
    else { return JSON.parse(localStorage.getItem('cart')) }
  }

  let cart = medicine()
  console.log(cart)
  return (
    <>
      <h1>Cart List</h1>
      <h4>{cart.length} medicines are available</h4>
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
              <th>Quantity</th>
            </tr>
            {cart.map((product, index) => {
              return <tr>
                <td>{(index + 1) < 10 ? `0${index + 1}` : (index + 1)}</td>
                <td>{(product.genericName)}</td>
                <td>{(product.strength)}</td>
                <td>{(product.dosageForm)}</td>
                <td>{product.brandName}</td>
                <td>{product.companyName}</td>
                <td>{product.packSize}</td>
                <td>BDT {product.unitPrice.toFixed(2)}</td>
                <td>{product.therapeuticClass}</td>
                <td></td>
              </tr>
            })}
          </tbody>
        </table>
      </div >
    </>
  )
}
