import { useState } from 'react';
import styles from './Card.module.scss';

export const Card = ({ onFavorite, imagesUrl, title, price, onPlus }) => {
	const [isAdded, setIsAdded] = useState(false);

	const onClickPlus = () => {
		onPlus({ imagesUrl, title, price });
		setIsAdded(!isAdded);
	};

	return (
		<div className={styles.card}>
			<div className={styles.favorite} onClick={onFavorite}>
				<img src='/img/heard-unliked.svg' alt='Unliked' />
			</div>
			<img width={133} height={112} src={imagesUrl} alt='' />
			<h5>{title}</h5>
			<div className='d-flex justify-between align-center'>
				<div className='d-flex flex-column'>
					<span>Цена:</span>
					<b>{price} руб.</b>
				</div>
				<img
					className={styles.plus}
					onClick={onClickPlus}
					src={isAdded ? '/img/btn-checked.svg' : '/img/btn-plus.svg'}
					alt='plus'
				/>
			</div>
		</div>
	);
};
