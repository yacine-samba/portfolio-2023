import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import s from './About.module.scss';

import Avatar from '../avatar/Avatar';

const About = () => {
	return (
		<div className={s.aboutSection}>
			<div className={s.aboutSection__canvas}>
				<Canvas camera={{ position: [0, 1.75, 4.5] }}>
					<ambientLight />
					<pointLight
						intensity={100}
						position={[-3, 1.5, 2.5]}
						color="purple"
						rotation={[-Math.PI / 2, 0, 0]}
					/>
					<pointLight
						intensity={30}
						position={[-1.5, 3, 2.5]}
						color="blue"
						rotation={[-Math.PI / 2, 0, 0]}
					/>
					<pointLight
						intensity={50}
						position={[3, 2, 2]}
						color="white"
						rotation={[-Math.PI / 2, 0, 0]}
					/>
					<Avatar />
				</Canvas>
			</div>
			<div className={s.aboutSection__container}>
				<h1>about me</h1>
				<div className={s.aboutSection__container__content}>
					<p>I’m Yacine, a FrontEnd developer based in Paris, France.</p>
					<p>
						An entrepreneur at heart and a student who loves to create and
						immerse himself in new projects.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;