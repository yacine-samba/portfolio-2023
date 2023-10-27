import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import s from './ContactIcon.module.scss';

const ContactIcon = ({ faIcon, link, content }) => {
	return (
		<div className={s.contact}>
			<a href={link} target="_blank" rel="noreferrer">
				<div className={s.contact__icon}>
					<FontAwesomeIcon icon={faIcon} />
				</div>
				<p>{content}</p>
			</a>
		</div>
	);
};

export default ContactIcon;