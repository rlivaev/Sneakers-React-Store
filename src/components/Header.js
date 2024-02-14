import { Link } from 'react-router-dom';

export const Header = (props) => {
	return (
		<header className='d-flex justify-between align-center p-40'>
			<div className='d-flex align-center'>
				<Link to='/'>
					<img width={40} height={40} src='/img/logo.png' alt='logo' />
					<div>
						<h3 className='text-uppercase'>React Snickers</h3>
						<p>Магазин лучших кроссовок</p>
					</div>
				</Link>
			</div>
			<ul className='d-flex'>
				<li onClick={props.onClickCart} className='mr-30 cu-p'>
					<img width={18} height={18} src='/img/cart.svg' alt='Корзина' />
					<span>1205 сом</span>
				</li>
				<Link to='/favorites'>
					<li className='mr-20 cu-p'>
						<img width={18} height={18} src='/img/heart.svg' alt='Закладки' />
					</li>
				</Link>
				<li>
					<img width={18} height={18} src='/img/user.svg' alt='Пользователь' />
					<span>Профиль</span>
				</li>
			</ul>
		</header>
	);
};
