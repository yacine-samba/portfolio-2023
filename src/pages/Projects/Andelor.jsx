import Project from '../../components/project/Project';

const Andelor = () => {
	return (
		<div>
			<Project
				title="Andelor"
				date="2021"
				tag={[
					'React',
					'Sass',
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
				about="Andelor is a fictitious exhibition created by 5 BUT MMI students. The objective was to create a booking site with the possibility of booking tickets for the Andelor exhibition created by the WebStory agency.

				The booking site included a back office for administration and the display of booking statistics.
				
				"
				github="https://github.com/yacine-samba/AndelorProjetV2"
				imgSrc="/img/project/andelor/andelor.png"
			/>
		</div>
	);
};

export default Andelor;
