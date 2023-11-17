import Header from '../components/header/Header';

import localFont from 'next/font/local';
import Grid from '../components/grid/Grid';
import Hero from '../components/hero/Hero';
import About from '../components/about/About';

const integralFont = localFont({
	src: '../font/integral/IntegralCF-ExtraBold.woff2',
	variable: '--font-integral',
});
const domaineDispNar = localFont({
	src: [
		{
			path: '../font/domaine/DomaineDispNar-MediumItalic.otf',
			weight: '500',
		},
		{
			path: '../font/domaine/DomaineDispNar-SemiboldItalic.otf',
			weight: '600',
		},
		{
			path: '../font/domaine/DomaineDispNar-ExtraboldItalic.otf',
			weight: '800',
		},
		{
			path: '../font/domaine/DomaineDispNar-BlackItalic.otf',
			weight: '900',
		},
	],
	variable: '--font-domaineDispNar',
});

const Home = () => {
	return (
		<div className={`${integralFont.variable} ${domaineDispNar.variable}`}>
			<Grid />
			<Header />
			<Hero />
			<About />
		</div>
	);
};

export default Home;
