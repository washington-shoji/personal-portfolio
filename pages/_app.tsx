import '@fortawesome/fontawesome-svg-core/styles.css'; // import Font Awesome CSS
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {config} from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

import '../styles/globals.css';
import type {AppProps} from 'next/app';
import Layout from '../components/Layout/Layout';

library.add(fab); // Add access to fontawesome brand icons to entire app

function MyApp({Component, pageProps}: AppProps) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
export default MyApp;
