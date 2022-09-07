import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
	CheckoutContainer,
	CheckoutHeading,
  CheckoutGroup,
	CheckoutProducts,
  CheckoutForm,
	FormGroup,
	InputGroup,
	Products,
	ProductsImage,
	ProductsInfo,
	ProductsName,
	ProductQty,
	ProductTotal,
	SummaryInfo,
	CheckoutButton,
	SummaryDetails,
} from './CheckoutStyled';

const Checkout = () => {
	const cart = useSelector((state) => state.cart);
	// const dispatch = useDispatch();
	let navigate = useNavigate();


	return (
		<CheckoutContainer>
			<CheckoutHeading>Checkout</CheckoutHeading>

			<CheckoutGroup>
				<CheckoutForm>
					<FormGroup>
						<h3>Personal Information</h3>
						<form action="">
							<InputGroup>
								<label htmlFor="name">Name</label>
								<input type="text" name="name" id="name" />
							</InputGroup>
							<InputGroup>
								<label htmlFor="email">Email</label>
								<input type="email" name="email" id="email" />
							</InputGroup>
							<InputGroup>
								<label htmlFor="phone">Phone</label>
								<input type="text" name="phone" id="phone" />
							</InputGroup>
						</form>
					</FormGroup>
					<FormGroup>
					<h3>Shipping Address</h3>
					<form>
						<InputGroup>
						<input type="text" placeholder="Name" />
						</InputGroup>
						<InputGroup>
						<input type="text" placeholder="Address" />
						</InputGroup>
						<InputGroup>
						<input type="text" placeholder="City" />
						</InputGroup>
						<InputGroup>
						<input type="text" placeholder="State" />
						</InputGroup>
						<InputGroup>
						<input type="text" placeholder="Country" />
						</InputGroup>
						<InputGroup>
						<input type="text" placeholder="Zip Code" />
						</InputGroup>
						<InputGroup>
						<input type="text" placeholder="Phone Number" />
						</InputGroup>
					</form>
					</FormGroup>
				</CheckoutForm>

				<CheckoutProducts>
          {
						cart.map((product) => 
							<Products>
								<ProductsImage src={product.image} alt={product.name} />
								<ProductsInfo>
									<ProductsName>{product.title.substring(0, 30)}</ProductsName>
									<ProductQty>Qty. {product.quantity}</ProductQty>
									<ProductTotal>${product.price * product.quantity}</ProductTotal>
								</ProductsInfo>
							</Products>
						)}

						{cart.length === 0 && (
							<h2>No Item in Cart</h2>
						)}

						<SummaryInfo>
							<h3>Summary</h3>	
							<SummaryDetails>
								<h5>Total Item</h5>
								<p>${cart.reduce((a, b) => a + b.price * b.quantity, 0).toFixed(2)}</p>
							</SummaryDetails>

							<SummaryDetails>
								<h5>Shipping</h5>
								<p>$0.00</p>
							</SummaryDetails>

							<SummaryDetails bold>
								<h5>Total</h5>
								<p>${cart.reduce((a, b) => a + b.price * b.quantity, 0).toFixed(2)}</p>
							</SummaryDetails>
						</SummaryInfo>
							{/*if cart if empty  */}
							{cart.length === 0 ? (
								<CheckoutButton onClick={() => navigate('/shop')}>Go to Shop</CheckoutButton>
							) : (
								<CheckoutButton onClick={() => navigate('/confirmation')}>Checkout</CheckoutButton>	
							)}
        </CheckoutProducts>
			</CheckoutGroup>
		</CheckoutContainer>
	);
};

export default Checkout;
