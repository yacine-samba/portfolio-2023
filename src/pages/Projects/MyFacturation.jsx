import Project from '../../components/project/Project';

const MyFacturation = () => {
	return (
		<div>
			<Project
				title="MyFacturation"
				date="2021"
				tag={[
					'Next / React',
					'Sass',
					'Node.js',
				]}
				contributor={['Yacine Samba']}
				link="https://www.myfacturation.com/"
				about="MyFacturation is a full-stack web application that allows users to create and share their own stories. It is built with React, Redux, Node.js, Express, MongoDB, Mongoose, JWT, Bcrypt, Axios, Sass, and Bootstrap."
				imgSrc="/img/project/myFacturation/myFacturation.jpg"
			/>
		</div>
	);
};

export default MyFacturation;
