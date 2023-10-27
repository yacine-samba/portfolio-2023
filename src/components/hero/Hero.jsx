import ContactIcon from '../contactIcon/ContactIcon';
import s from './Hero.module.scss';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

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
					link={'https://github.com/yacine-samba'}
					faIcon={faGithub}
					content={'GitHub'}
				/>
			</div>
			<div className={s.hero__content}>
                <h3>FrontEnd Developer</h3>
                <p>Enthusiastic, creative and hungry for a challenge, I'm here to shake up ideas, breathe life into projects and ensure that every adventure is a memorable experience.</p>
            </div>
            <div className={s.hero__scroll}>
                <p>Scroll for more</p>
            </div>
		</div>
	);
};

export default Hero;
