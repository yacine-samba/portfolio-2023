import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import s from './About.module.scss';

import Avatar from '../avatar/Avatar';

const About = () => {
	return (
		<div className={s.aboutSection} id='about'>
			<div className={s.aboutSection__canvas}>
				<Canvas camera={{ position: [0, 1.75, 4.5] }}>
					<ambientLight />
					<pointLight
						intensity={50}
						position={[-3, 1.5, 2.5]}
						color="purple"
						rotation={[-Math.PI / 2, 0, 0]}
					/>
					<pointLight
						intensity={10}
						position={[-1.5, 3, 2.5]}
						color="#00BF6C"
						rotation={[-Math.PI / 2, 0, 0]}
					/>
					<pointLight
						intensity={40}
						position={[3, 2, 5]}
						color="white"
						rotation={[-Math.PI / 2, 0, 0]}
					/>
					<Avatar />
				</Canvas>
			</div>
			<div className={s.aboutSection__container}>
				<h1>about me</h1>
				<div className={s.aboutSection__container__content}>
					<p>I’m Yacine, a FrontEnd developer based in Paris, France.</p><br />
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
