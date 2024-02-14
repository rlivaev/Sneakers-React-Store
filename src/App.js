import { Card } from './components/Card';
import { Header } from './components/Header';
import { Drawer } from './components/Drawer.js';
import { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';

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
			<div className='content p-40'>
				<div className='d-flex mb-40 align-center justify-between'>
					<h1>{searchValue ? `Поиск по запросу:'${searchValue}'` : 'Все кроссовки'}</h1>
					<div className='search-block d-flex'>
						<img src='/img/search.svg' alt='Search' />
						{searchValue && (
							<img
								onClick={deleteSearchInput}
								className='clear cu-p'
								src='/img/btn-remove.svg'
								alt='Remove'
							/>
						)}
						<input onChange={onChangeSearchInput} value={searchValue} placeholder='Поиск...' />
					</div>
				</div>
				<div className='d-flex flex-wrap'>
					{items
						.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
						.map((item, index) => (
							<Card
								key={index}
								title={item.title}
								price={item.price}
								imagesUrl={item.imageUrl}
								onFavorite={() => console.log('закладки')}
								onPlus={(obj) => onAddToCart(obj)}
							/>
						))}
				</div>
			</div>
		</div>
	);
}
export default App;




