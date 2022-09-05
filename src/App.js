import 'normalize.css';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import About from './pages/About';
import Footer from './components/Footer/Footer';
import Shop from './pages/Shop/Shop';
import Cart from './pages/Cart/Cart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Checkout from './pages/Checkout/Checkout';
import Confirmation from './pages/Confirmation/Confirmation';


function App() {
	return (
		<>
			<GlobalStyle />

			<Navbar />
			<ToastContainer position="top-center" newestOnTop={false} />

			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="shop" element={<Shop />} />
				<Route path="cart" element={<Cart />} />
				<Route path="checkout" element={<Checkout />} />
				<Route path="/productDetail/:id" element={<ProductDetail />} />
				<Route path="confirmation" element={<Confirmation />} />

			</Routes>

			<Footer />
		</>
	);
}

export default App;
