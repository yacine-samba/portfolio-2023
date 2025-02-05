import Project from '../../components/project/Project';

const Andelor = () => {
	return (
		<div>
			<Project
				title="Andelor"
				date="2021"
				tag={[
					'React',
					'Css',
					'Symfony',
					'ApiPlatform',
					'Axios',
					'Bootstrap',
					'PHP',
					'MYSQL',
					'Tailwind',
					'Fontawesome',
					'React Router',
					'ORM Doctrine',
					'Json Web Token',
				]}
				contributor={['Bastien', 'Belkacem', 'Loïc', 'Martin', 'Yacine Samba']}
				link="https://andelor.herokuapp.com/"
				about="Andelor is a booking site for a fictitious exhibition that I created during my second semester at BUT MMI. The aim was to create a database-driven booking site. So I did all the work myself: concept research, front-end and back-end development, design and creation of the database.
				"
				aboutMore="The reservation site includes a back office for administration and viewing reservation statistics."
				github="https://github.com/yacine-samba/AndelorProjetV2"
				imgSrc="/img/project/andelor/andelor.png"
			/>
		</div>
	);
};

export default Andelor;
