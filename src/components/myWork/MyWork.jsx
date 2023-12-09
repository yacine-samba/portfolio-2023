/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import s from './MyWork.module.scss';
import Link from 'next/link';

const MyWork = () => {
	return (
		<div className={s.myWorkSection} id='works'>
			<h1>my work</h1>
			<div className={s.myWorkSection__projects}>
				<Project title="LocketChat" date="2023" tag={['Next', 'UX/UI Design']} imgSrc="/img/project/locketChat/locketChat.jpg" />
				<Project title="Andelor" date="2021" tag={['Site de réservation', 'React', 'Symfony']} imgSrc="/img/project/andelor/andelor.png" />
				<Project title="MyFacturation" date="2023" tag={['React', 'Symfony', 'Twig']} imgSrc="/img/project/myFacturation/myFacturation.jpg"/>
				<Link href="/Projects">my all projects</Link>
			</div>
		</div>
	);
};

const Project = ({ title, tag, imgSrc, date }) => {
	const [tags, setTags] = useState([]);

	useEffect(() => {
		if (tag) {
			setTags(tag);
		} else {
			setTags([tag]);
		}
	}, [tag]);

	return (
		<Link className={s.project} href={`./Projects/${title}`}>
			<img src={imgSrc} alt={imgSrc} />
			<p>{date}</p>
			<h2>{title}</h2>
			<div className={s.project__tags}>
				{tags
					? tag && tags.map((tag, key) => <span key={key}>{tag}</span>)
					: null}
			</div>
		</Link>
	);
};

export { Project };
export default MyWork;
