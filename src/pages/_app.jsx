import '@/styles/globals.scss';
import localFont from 'next/font/local';
import { Gabarito } from 'next/font/google'
import Footer from '../components/footer/Footer';
import Grid from '../components/grid/Grid';
import Header from '../components/header/Header';

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

const gabarito = Gabarito({
	subsets: ['latin'],
	weight: [
		'400',
		'500',
		'600',
		'700',
		'800',
		'900',
	],
})


export default function App({ Component, pageProps }) {
	return (
		<div className={`${integralFont.variable} ${domaineDispNar.variable} ${gabarito.className}`}>
			<Grid />
			<Header />
			<Component {...pageProps} />
			<Footer />
		</div>
	);
}
