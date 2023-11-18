import { useEffect, useState } from 'react';
import s from './MyWork.module.scss';

const MyWork = () => {
	return (
		<div className={s.myWorkSection}>
			<h1>my work</h1>
			<div className={s.myWorkSection__projects}>
				<Project title="LocketChat" tag={['Next', 'UX/UI Design']} />
				<Project title="Andelor" tag={['React']} />
				<Project title="MY. Facturation" />
				<a href='/projects'>my all projects</a>
			</div>
		</div>
	);
};

const Project = ({ title, tag }) => {
	const [tags, setTags] = useState([]);

	useEffect(() => {
		if (tag) {
			setTags(tag);
		} else {
			setTags([tag]);
		}
	}, [tag]);

	return (
		<div className={s.project}>
			<h2>{title}</h2>
			<div className={s.project__tags}>
				{tags
					? tag && tags.map((tag, key) => <span key={key}>{tag}</span>)
					: console.log('no tags')}
			</div>
		</div>
	);
};

export default MyWork;
