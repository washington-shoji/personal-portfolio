import React from 'react';

import styles from './Hero.module.css';
import Social from '../social/Social';
import Arrow from '../arrow/Arrow';

const Hero = () => {
	return (
		<section className={styles.main}>
			<div className={styles.nameContainer}>
				<div className={styles.name}>
					<h1>
						I am <span>Washington</span>
					</h1>
					<p className={styles.details}>
						a passionate self-taught full-stack web and mobile developer who
						strives to help solve problems with my technical skills.
					</p>
					<div className={styles.buttonContainer}>
						{/* <a
							className={styles.cvButton}
							href='https://personal-resume-flutter.web.app/'
							target='_blank'
							rel='noopener noreferrer'
						>
							View Resume
						</a> */}
						<a
							className={styles.cvButton}
							href='https://drive.google.com/file/d/1FovIq402IgoxLuix84ZmuzjIBkFXmDEQ/view?usp=sharing'
							target='_blank'
							rel='noopener noreferrer'
						>
							Download Resume
						</a>
					</div>

					{/* <Social /> */}
				</div>
			</div>
			<Arrow />
		</section>
	);
};

export default Hero;
