import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<Router>
			<GlobalStyle />

			<Navbar />

			<Routes>
				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
			</Routes>

			<Footer />
		</Router>
	);
}

export default App;
