import React, {FC} from 'react';
import Footer from '../foter/Footer';
import Header from '../header/Header';

import styles from './Layout.module.css';

const Layout: FC = ({children}) => {
	return (
		<>
			<Header />
			<div className={styles.container}>
				<main className={styles.main}>{children}</main>
			</div>
			<Footer />
		</>
	);
};

export default Layout;
