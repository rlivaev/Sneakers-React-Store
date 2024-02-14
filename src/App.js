import { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Drawer } from './components/Drawer';
import { Home } from './pages/Home';

import axios from 'axios';
function App() {
	const [items, setItems] = useState([]); // товары
	const [cartItems, setCardItems] = useState([]); //карзина
	// const [favorites, setFavorites] = useState([]); //избранное
	const [searchValue, setSearchValue] = useState(''); //карзина

	const [cartOpened, setCartOpened] = useState(false); //открытие карзины

	useEffect(() => {
		axios.get('https://65af822e2f26c3f2139af727.mockapi.io/items').then((res) => {
			setItems(res.data);
		});
		axios.get('https://65af822e2f26c3f2139af727.mockapi.io/cart').then((res) => {
			setCardItems(res.data);
		});
	}, []);
	const onAddToCart = (obj) => {
		axios.post('https://65af822e2f26c3f2139af727.mockapi.io/cart', obj);
		setCardItems((prev) => [...prev, obj]);
	};
	const onRemoveItem = (id) => {
		console.log(id);
		axios.delete(`https://65af822e2f26c3f2139af727.mockapi.io/cart/${id}`);
		setCardItems((prev) => prev.filter((item) => item.id !== id));
	};
	// const onAddToFavorite = (obj) => {
	// 	axios.post('https://65af822e2f26c3f2139af727.mockapi.io/favorites', obj);
	// 	setFavorites((prev) => [...prev, obj]);
	// };

	const onChangeSearchInput = (event) => {
		setSearchValue(event.target.value);
	};
	const deleteSearchInput = () => {
		setSearchValue('');
	};
	return (
		<div className='wrapper clear'>
			{cartOpened && (
				<Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />
			)}
			<Header onClickCart={() => setCartOpened(true)} />
			<Route path='/' exact>
				<Home />
			</Route>
		</div>
	);
}
export default App;
