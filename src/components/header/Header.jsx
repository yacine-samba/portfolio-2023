import { useState } from 'react';
import GridBottom from '../grid/GridBottom';
import s from './Header.module.scss';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	console.log(isOpen);

	return (
		<div className={s.header}>
			<div className={s.menu}>
				<div className={s.menu__name}>
					<div className={s.menu__name__logo}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 806.09 556.07"
						>
							<path d="M3.66,536.21,137.34,407.08a12.83,12.83,0,0,1,5.3-3.07c73.4-21.55,134.14-26.57,178-26.72,81-.27,130.81,15.94,167.15-15.11,12.14-10.38,16.41-20.59,37.38-81.6,14-40.83,26.29-77.46,36.64-108.88,2-6.23-1.69-12.73-8.29-14.54-68.4-18.81-175.46-36.27-243.3,14.6-27.11,20.33-59.44,60.2-98,107.69l-.67.82c-8.26,10.21-25.34,2.47-21.76-9.89a496.51,496.51,0,0,0,17-86.7A492,492,0,0,0,199,31.39C196.9,21.27,208.84,13.64,218,19.25,264.9,48,336.46,83.36,429.7,91.54,525,99.9,627.31,70.47,788.59,1.14c12.35-5.31,23.29,9.11,14,18.51C595.31,230.31,561.1,322.36,605.4,528.56c2.12,9.88-9.22,17.61-18.44,12.55C395.3,436,292.31,437.07,17.47,554.94,5,560.29-5.94,545.48,3.66,536.21Z" />
						</svg>
					</div>
					<p>
						Yacine <span>S.</span>
					</p>
				</div>

				<div className={s.menu__hamburger} onClick={() => setIsOpen(!isOpen)}>
					<span>menu</span>
					<div className={s.menu__hamburger__navigation}>
						<div
							className={`${s.menu__hamburger__navigation__dots} ${
								isOpen ? s.hidden : ''
							}`}
						></div>
						<div
							className={`${s.menu__hamburger__navigation__toggleClose} ${
								isOpen ? '' : s.hidden
							}`}
						></div>
					</div>
				</div>
				<GridBottom />
			</div>

			<div className={`${s.header__nav} ${isOpen ? s.header__navIsOpen : ''}`}>
				<div className={s.header__nav__navLink}>
					<div className={s.header__nav__navLink__item}>
						<a href="#about">
							About <span>About</span>
						</a>
					</div>
					<div className={s.header__nav__navLink__item}>
						<a href="#skills">
							Works <span>Works</span>
						</a>
					</div>
					<div className={s.header__nav__navLink__item}>
						<a href="#projects">
							Skills <span>Skills</span>
						</a>
					</div>
					<div className={s.header__nav__navLink__item}>
						<a href="#contact">
							Contact <span>Contact</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
