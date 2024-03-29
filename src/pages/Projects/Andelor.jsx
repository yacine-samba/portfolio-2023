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
				about="Andelor is a fictitious exhibition created by 5 students in their 2nd year at BUT MMI. The aim was to create a booking site with the possibility of reserving tickets for the exhibition.
				"
				aboutMore="The reservation site includes a back office for administration and viewing reservation statistics."
				github="https://github.com/yacine-samba/AndelorProjetV2"
				imgSrc="/img/project/andelor/andelor.png"
			/>
		</div>
	);
};

export default Andelor;
