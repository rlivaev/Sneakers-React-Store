function App() {
  return (
		<div className='wrapper'>
			<header>
				<div className='headerLeft'>
					<img width={40} height={40} src='/img/logo.png' alt='logo' />
					<div className='headerInfo'>
						<h3>React Snickers</h3>
						<span>Магазин лучших кроссовок</span>
					</div>
				</div>
				<ul className='headerRight'>
					<li>
						<img width={18} height={18} src='/img/cart.svg' />
						<span>1205 сом</span>
					</li>
					<li>
						<img width={18} height={18} src='/img/user.svg' />
						<span>Профиль</span>
					</li>
				</ul>
			</header>
			<div className='content'>
				<h1>Все кроссовки</h1>
				...
			</div>
		</div>
	);
}

export default App;
