import Project from '../../components/project/Project';

const LocketChat = () => {
	return (
		<div>
			<Project
				title="LocketChat"
				date="2021"
				tag={[
					'Next / React',
					'Sass',
					'Node.js',
				]}
				contributor={['Yacine Samba']}
				link="https://andelor.herokuapp.com/"
				about="LocketChat is a full-stack web application that allows users to create and share their own stories. It is built with React, Redux, Node.js, Express, MongoDB, Mongoose, JWT, Bcrypt, Axios, Sass, and Bootstrap."
				github="https://github.com/yacine-samba/LocketChatProject"
				imgSrc="/img/project/locketChat/locketChat.jpg"
			/>
		</div>
	);
};

export default LocketChat;
