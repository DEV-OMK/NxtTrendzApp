import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(product => {
        total += product.quantity * product.price
      })
      const itemsCount = cartList.length

      return (
        <div className="order-summary-container">
          <div className="order-details">
            <h1 className="order-total">
              Order Total: <span className="total">Rs {total}/-</span>
            </h1>
            <p className="items-count">{itemsCount} Items in cart</p>
            <button
              type="button"
              className="checkout-button checkout-button-lg"
            >
              Checkout
            </button>
          </div>
          <button type="button" className="checkout-button checkout-button-sm">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
