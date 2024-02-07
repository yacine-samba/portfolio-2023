import Project from '../../components/project/Project';

const MyFacturation = () => {
	return (
		<div>
			<Project
				title="MyFacturation"
				date="2021"
				tag={[
					'React JS',
					'Symfony 5.4',
					'Twig',
					'Sass',
					'Bootstrap',
					'API CRUD',
					'Git',
				]}
				contributor={['Yacine Samba']}
				link="https://www.myfacturation.com/"
				about="As a FullStack developer intern at MY. Billing, my role was to participate in the development and improvement of the company's billing platform. I was integrated into an experienced team of developers and worked closely with them to realize key features of the product."
				aboutMore="My responsibilities included designing and developing new features, solving technical problems, as well as maintaining and optimizing existing code. Throughout my internship, I was mentored by senior developers who shared their expertise and guided me in my missions."
				imgSrc="/img/project/myFacturation/myFacturation.jpg"
			/>
		</div>
	);
};

export default MyFacturation;
