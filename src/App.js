import { Card } from './components/Card';
import { Header } from './components/Header';
import { Drawer } from './components/Drawer.js';
function App() {
	return (
		<div className='wrapper clear'>
			<Drawer />
			<Header />
			<div className='content p-40'>
				<div className='d-flex mb-40 align-center justify-between'>
					<h1>Все кроссовки</h1>
					<div className='search-block d-flex'>
						<img src='/img/search.svg' alt='Search' />
						<input placeholder='Поиск...' />
					</div>
				</div>
				<div className='d-flex'>
					<Card title={'Мужские Кроссовки Nike Blazer Mid Suede'} />
				</div>
			</div>
		</div>
	);
}
export default App;
