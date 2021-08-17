import {FC} from 'react';
import Header from './../header/Header';
import styles from './Layout.module.css';

const Layout: FC = ({children}) => {
	return (
		<>
			<Header />
			<div className={styles.container}>
				<main>{children}</main>
			</div>
		</>
	);
};

export default Layout;
