import React from 'react';

import styles from './Home.module.css';
import Body from '../body/Body';

const Home = () => {
	return (
		<div className={styles.home}>
			<div>
				<Body />
			</div>
		</div>
	);
};

export default Home;
