import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FoodTrivia from './components/FoodTrivia';
import TodaySpecials from './components/TodaySpecials';
import Menu from './components/Menu';
import Checkout from './components/Checkout';
import Login from './components/authComponents/Login';
import Signup from './components/authComponents/Signup';

function App() {
	return (
		<Router>
			<div className='app'>
				<Switch>
					<Route path='/' exact>
						<Navbar />
						<FoodTrivia />
						<TodaySpecials />
						<Menu />
					</Route>
					<Route path='/checkout'>
						<Navbar />
						<Checkout />
					</Route>
					<Route path='/account/signup'>
						<Signup />
					</Route>
					<Route path='/account/login'>
						<Login />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
