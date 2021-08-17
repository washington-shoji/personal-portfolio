import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';

import styles from './Hero.module.css';
import Social from "../social/Social";
import Arrow from "../arrow/Arrow";

function Hero() {
	return (
		<section className={styles.main}>
			<div className={styles.nameContainer}>
				<div className={styles.name}>
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
					<Social/>
				</div>

			</div>
			<Arrow />
		</section>

	);
}

export default Hero;
