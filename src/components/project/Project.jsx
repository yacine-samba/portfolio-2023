import { useEffect, useState } from 'react';
import s from './Project.module.scss';
import Image from 'next/image';

const Project = ({ title, date, tag, link, github, imgSrc, about, aboutMore, contributor }) => {

	const [tags, setTags] = useState([]);
	const [contributors, setContributors] = useState([]);

	useEffect(() => {
		if (tag) {
			setTags(tag);
		} else {
			setTags([tag]);
		}

		if (contributor) {
			setContributors(contributor);
		}
		else {
			setContributors([contributor]);
		}
	}, [tag, contributor]);

	return (
		<div className={s.project}>
			<div className={s.project__hero}>
				<div className={s.project__hero__content}>
					<p className={s.project__hero__date}>{date}</p>
					<h1 className={s.project__hero__title}>{title}</h1>
				</div>
				<a href={link} className={s.project__hero__link} target="_blank">
					<p>view</p>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 16 16"
					>
						<path d="M15.875 1.2825C15.875 0.799252 15.4832 0.407501 15 0.4075L7.12497 0.4075C6.64172 0.407501 6.24997 0.799251 6.24997 1.2825C6.24997 1.76575 6.64172 2.1575 7.12497 2.1575L14.125 2.1575L14.125 9.1575C14.125 9.64075 14.5167 10.0325 15 10.0325C15.4832 10.0325 15.875 9.64075 15.875 9.1575L15.875 1.2825ZM2.18366 15.3362L15.6187 1.90122L14.3813 0.663782L0.946223 14.0988L2.18366 15.3362Z" />
					</svg>
				</a>
				<Image src={imgSrc} alt={imgSrc} width={500} height={500} />
			</div>
			<div className={s.project__main}>
				<div className={s.project__main__about}>
					<h2>about</h2>
					<p className={s.project__main__about__details}>{about}</p>
					<p className={s.project__main__about__details}>{aboutMore}</p>
					<div className={s.project__main__about__tags}>
						{tags
							? tag && tags.map((tag, key) => <span key={key}>{tag}</span>)
							: null}
					</div>
				</div>

				<div className={s.project__main__contributors}>
					<p className={s.project__main__subtitle}>contributors</p>
					<div className={s.project__main__contributors__details}>
						{contributors
							? contributor &&
							  contributors.map((contributor, key) => (
									<span key={key}>{contributor}</span>
							  ))
							: null}
					</div>
				</div>

				<div className={s.project__main__link}>
					<p className={s.project__main__subtitle}>link</p>
					<div className={s.project__main__subtitle__details}>
						<a className={s.project__main__link__item} href={link} target="_blank">View the project</a>
						<br />
						<a className={s.project__main__link__item} href={github} target="_blank">
							{github ? 'Github' : null}
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Project;
