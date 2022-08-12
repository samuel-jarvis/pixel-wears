import 'normalize.css'
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import About from './pages/About';
import Footer from './components/Footer/Footer';
import Shop from './pages/Shop/Shop';

function App() {
	return (
		<>
			<GlobalStyle />

			<Navbar />

			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="shop" element={<Shop />} />
				<Route path="/productDetail/:id" element={<ProductDetail />} />
				
			</Routes>

			<Footer />
		</>
	);
}

export default App;
