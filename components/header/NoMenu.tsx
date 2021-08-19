import React, {FC} from 'react';
import styles from './NoMenu.module.css';

interface Props {}

const NoMenu: FC<Props> = () => {
	return (
		<div className={styles.nav}>
			<nav>
				<a className={styles.logo} href='#'>
					Washington Shoji
				</a>
			</nav>
		</div>
	);
};

export default NoMenu;
