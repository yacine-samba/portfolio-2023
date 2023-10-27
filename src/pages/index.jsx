import Header from '../components/header/Header';
import { Playfair } from 'next/font/google';

import localFont from 'next/font/local';
import Grid from '../components/grid/Grid';
import Hero from '../components/hero/Hero';

const integralFont = localFont({
	src: '../font/integral/IntegralCF-ExtraBold.woff2',
	variable: '--font-integral',
});
const playfair = Playfair({
	subsets: ['latin'],
	variable: '--font-playfair',
});

const Home = () => {
	return (
		<div className={`${integralFont.variable} ${playfair.variable}`}>
			<Grid />
			<Header />
			<Hero />
		</div>
	);
};

export default Home;
