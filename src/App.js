import { Card } from './components/Card';
import { Header } from './components/Header';
import { Drawer } from './components/Drawer.js';
import { useState, useEffect } from 'react';
function App() {
	const [items, setItems] = useState([]); // товары
	const [cartItems, setCardItems] = useState([]); //карзина
	const [cartOpened, setCartOpened] = useState(false); //открытие карзины

	useEffect(() => {
		fetch('https://65af822e2f26c3f2139af727.mockapi.io/items')
			.then((res) => {
				return res.json();
			})
			.then((json) => {
				setItems(json);
			});
	}, []);
	const onAddToCart = (obj) => {
		setCardItems((prev) => [...prev, obj]);
	};
	return (
		<div className='wrapper clear'>
			{cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} />}
			<Header onClickCart={() => setCartOpened(true)} />
			<div className='content p-40'>
				<div className='d-flex mb-40 align-center justify-between'>
					<h1>Все кроссовки</h1>
					<div className='search-block d-flex'>
						<img src='/img/search.svg' alt='Search' />
						<input placeholder='Поиск...' />
					</div>
				</div>
				<div className='d-flex flex-wrap'>
					{items.map((item) => (
						<Card
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
