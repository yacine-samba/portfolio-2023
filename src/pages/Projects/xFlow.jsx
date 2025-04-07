import Project from '../../components/project/Project';
//Ce projet représente l'interface de gestion de projets pour les utilisateurs. L'application permet à l'utilisateur de se connecter, d'afficher la liste de ses projets, de créer un nouveau projet et de consulter les détails des projets existants. L'application utilise React et Parse pour la gestion des données et des utilisateurs.


const xFlow = () => {
	return (
		<div>
			<Project
				title="xFlow"
				date="2021"
				tag={[
					'Next.js',
					'Typescript',
					'Node.js',
					'Parse server'
				]}
				contributor={['Yacine Samba']}
				link="https://x-flow-umber.vercel.app/"
				about="xFlow is a project management application that allows users to create and manage their projects. The application provides a user-friendly interface for creating new projects, viewing project details, and managing project tasks. It uses Next.js for the frontend and Parse server for the backend."
				aboutMore="The application is designed to be intuitive and easy to use, allowing users to focus on their projects without getting bogged down in complex features. It is built using modern web technologies, including Next.js and Typescript, ensuring a fast and responsive user experience."
				github="https://github.com/yacine-samba/xFlow"
				imgSrc="/img/project/xFlow/xFlow.png"
				imgAlt="xFlow project"
			/>
		</div>
	);
};

export default xFlow;