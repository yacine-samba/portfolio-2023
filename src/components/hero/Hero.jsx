/* eslint-disable react/no-unescaped-entities */
import ContactIcon from '../contactIcon/ContactIcon';
import s from './Hero.module.scss';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
	return (
		<div className={s.hero}>
			<div className={s.hero__myName}>
				<h1>
					Yacine <span>Samba</span>
				</h1>
			</div>
			<div className={s.hero__contact}>
                <ContactIcon
                    link={'mailto:ysambamezaache@gmail.com'}
                    faIcon={faEnvelope}
                    content={'ysambamezaache@gmail.com'}
                />
				<ContactIcon
					link={'https://github.com/yacine-samba'}
					faIcon={faLinkedin}
					content={'Linkedin'}
				/>
				<ContactIcon
					link={'https://github.com/yacine-samba'}
					faIcon={faGithub}
					content={'GitHub'}
				/>
			</div>

			<div className={s.hero__content}>
				<h3 className={s.hero__content__title}>FrontEnd Developer</h3>
				<p className={s.hero__content__details}>
				Enthusiastic, creative and looking for a challenge, I'm here to create new ideas, bring projects to life and make every adventure a memorable experience.
				</p>
			</div>
			<div className={s.hero__scroll}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 16 16"
				>
					<path d="M0.689971 14.2175C0.689972 14.7008 1.08172 15.0925 1.56497 15.0925L9.43997 15.0925C9.92322 15.0925 10.315 14.7008 10.315 14.2175C10.315 13.7343 9.92322 13.3425 9.43997 13.3425L2.43997 13.3425L2.43997 6.34253C2.43997 5.85928 2.04822 5.46753 1.56497 5.46753C1.08172 5.46753 0.689971 5.85928 0.689971 6.34253L0.689971 14.2175ZM14.3813 0.163783L0.946253 13.5988L2.18369 14.8362L15.6187 1.40122L14.3813 0.163783Z" />
				</svg>
				<p>Scroll for more</p>
			</div>
		</div>
	);
};

export default Hero;
