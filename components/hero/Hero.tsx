import React from 'react';
import Image from 'next/image';

import styles from './Hero.module.css';
import codingImage from '../../assets/coding.png';
import SocialContact from '../common/social/SocialContact';

const Hero = () => {
	return (
		<div className={styles.hero}>
			<div className={styles.heroTop}>
				<div className={styles.heroInfo}>
					I am <span className={styles.heroName}>Washington Shoji</span>. A
					passionate full-stack web and mobile developer who strives to help
					solve problems with my skills.
				</div>
				{/* <div className={styles.heroPhotoImage}>
					<Image
						className={styles.heroPhotoImage}
						src={codingImage}
						alt='coding person'
						width={420}
						height={420}
					/>
				</div> */}
			</div>
			{/* <SocialContact /> */}
		</div>
	);
};

export default Hero;
