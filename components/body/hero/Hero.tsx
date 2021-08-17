import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';

import styles from './Hero.module.css';

function Hero() {
	return (
		<div className={styles.name}>
			<p>Hello</p>
			<h1>
				I am <span>Washington</span>
			</h1>
			<p className={styles.details}>
				a passionate self-taught full-stack web and mobile developer who strives
				to help solve problems with my technical skills.
			</p>
			<a href='#' className={styles.cvButton}>
				View My Resume
			</a>
		</div>
	);
}

export default Hero;
