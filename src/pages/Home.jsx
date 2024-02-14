import { Card } from '../components/Card';
export const Home = () => {
	return (
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
	);
};
