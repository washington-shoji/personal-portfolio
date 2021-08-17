import React from 'react';

import styles from './Arrow.module.css';

const Arrow = () => {
	return (
		<div className={styles.animatedArrows}>
			<span></span>
			<span></span>
			<span></span>
		</div>
	);
	// return <div className={styles.arrow}></div>;
};

export default Arrow;
