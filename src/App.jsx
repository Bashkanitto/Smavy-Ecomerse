
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login';
import { Main } from './component/Main';
import Signin from './Signin';

function App() {
	return (
		<div className='text-white h-[100vh] flex items-center justify-center bg-cover'>
			<div className="bg-[url('./assets/hero-bg.jpg')]"></div>
			<Routes>
				<Route path='/signin' element={<Signin />} />
				<Route path='/login' element={<Login />} />
				<Route path='/main' element={<Main />} />
			</Routes>
		</div>
	);
}

export default App;
