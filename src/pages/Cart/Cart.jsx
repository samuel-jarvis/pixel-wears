import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { changeCart } from './cartSlice'
import { Container } from '../../globalStyles'


const Cart = () => {
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()


  return (
    <Container>
      <p>Hello world</p>
      {
        cart.map(item => (
          <div key={item.id}>
            <p>{item.title}</p>
            <p>{item.price}</p>
            {/* <button onClick={() => dispatch(changeCart(item.id))}>Remove</button> */}
          </div>
        ))
      }
    </Container>
  )
}

export default Cart