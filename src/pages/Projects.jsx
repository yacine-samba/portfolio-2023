import { Project } from '../components/myWork/MyWork';

const Projects = () => {
	return (
		<div className="myWorkSection">
			<h1>Projects</h1>
			<div className="myWorkSection__projects">
				<Project
					title="LocketChat"
					date="2023"
					tag={['Next', 'UX/UI Design']}
					imgSrc="/img/project/locketChat/locketChat.jpg"
				/>
				<Project
					title="Andelor"
					date="2022"
					tag={['Site de réservation', 'React', 'Symfony']}
					imgSrc="/img/project/andelor/andelor.png"
				/>
				<Project
					title="MyFacturation"
					date="2023"
					tag={['React', 'Symfony', 'Twig']}
					imgSrc="/img/project/myFacturation/myFacturation.jpg"
				/>
			</div>
		</div>
	);
};

export default Projects;
