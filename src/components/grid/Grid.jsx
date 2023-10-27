import s from './Grid.module.scss';

const Grid = () => {
	return (
		<div className={s.grid}>
			<div className={s.grid__line}></div>
			<div className={s.grid__line}></div>
		</div>
	);
};

export default Grid;
