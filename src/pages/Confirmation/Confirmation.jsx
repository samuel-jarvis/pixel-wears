import React from 'react'
import {Container} from '../../globalStyles'
import {CheckoutButton} from '../Checkout/CheckoutStyled';
import {BsFillBagCheckFill} from 'react-icons/bs'
import {
  Card,
  CardText,
  CardIcon,
} from './ConfirmationStyled';
import { useNavigate } from 'react-router-dom';



const Confirmation = () => {
  let navigate = useNavigate();
  return (
    <Container>
      <Card>
        <CardText>Thank you for your order!</CardText>

        <CardIcon>
          <BsFillBagCheckFill/>
        </CardIcon>

        <CheckoutButton onClick={() => navigate('/')}>Back to Home</CheckoutButton>
      </Card>
    </Container>
  )
}

export default Confirmation