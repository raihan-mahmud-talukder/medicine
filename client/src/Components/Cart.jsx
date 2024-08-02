export const Cart = () => {
    const medicine = () => {
        if (localStorage.getItem('cart') === null) return 'EMPTY'
        else {return JSON.parse(localStorage.getItem('cart'))}
    }

    let cart = medicine()
    console.log(cart)
  return (
    <div>{'HI'}</div>
  )
}
