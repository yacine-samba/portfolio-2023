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
				about="LocketChat is a student project that aims to create a chat room inspired by existing messaging systems (Discord, Slack), and which allows users to discuss and create links either in private messages or directly in the general room."
				github="https://github.com/yacine-samba/LocketChatProject"
				imgSrc="/img/project/locketChat/locketChat.jpg"
			/>
		</div>
	);
};

export default LocketChat;
