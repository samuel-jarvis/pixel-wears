import 'normalize.css'
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<>
			<GlobalStyle />

			<Navbar />

			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="about" element={<About />} />
			</Routes>

			<Footer />
		</>
	);
}

export default App;
