import React from 'react'
import { useAPI } from '../../hook/useAPI'
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {motion} from 'framer-motion'
import {AnimatePresence} from 'framer-motion'
import Loading from '../../components/Loading/Loading'
import {addToCart} from '../../components/CartModal/cartSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';




import {ProductContainer, 
  ProductImage,
  ProductDetails, 
  ProductGroup, 
  Price, Details, Image,
  WhiteBtn,  BlackBtn,
  Sizes, Size} from './ProductDetailStyled'

const SIZES = ['S', 'M', 'L', 'XL', 'XXL']

const ProductDetail = () => {
  // Get product id from url to load API
  const {id} = useParams();

  const {data : product, loading, error} = useAPI(`${id}`);

  useEffect(() => {
    window.scrollTo(0, 0);
    // console.log('changed')
  },[]);

  const [selectedSize, setSelectedSize] = useState('M')

  const dispatch = useDispatch()

  // add the selected size to the cart
  const NewCart = [{...product, selectedSize}]
  console.log(NewCart)

  let navigate = useNavigate();

  const handleBuyNow = (NewCart) => {
    dispatch(addToCart(NewCart))
    navigate('/checkout')
  }

  return (
    <AnimatePresence>
    <motion.div initial={{y: '100vw'}} animate={{y: '0'}} transition={{duration: 1}}>
    {loading && <Loading/> }
    {!loading && <ProductContainer initial={{x: '100vw'}} animate={{x: '0'}} transition={{duration: 0.5}}>
        <ProductGroup>
          <ProductImage>
            <Image>
              <img src={product.image} alt={product.title} />
            </Image>
          </ProductImage>

          <p>{error}</p>

          <ProductDetails>
            <h1>{product.title}</h1>
            <p>{product.category}</p>
            <Price>${product.price}</Price>
            <Details>{product.description}</Details>

            {/* Show sized for only clothing products */}
            
            { product.category === "men's clothing" || product.category === "men's clothing" ?
              <Sizes>
                {SIZES.map(size => (
                  <Size size={size} selectedSize={selectedSize} onClick={() => setSelectedSize(size)}>{size}</Size>
                ))}
              </Sizes> : ''
            }

            <div>
              <BlackBtn onClick={() => dispatch(addToCart(product))}>ADD TO CART</BlackBtn>
              <WhiteBtn onClick={() => handleBuyNow(product)}>BUY NOW</WhiteBtn>
            </div>

          </ProductDetails>
        </ProductGroup>
      
    </ProductContainer>} 
    </motion.div>
    </AnimatePresence>
  )
}

export default ProductDetail