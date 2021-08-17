/* eslint-disable @next/next/no-img-element */
import React, {FC} from 'react';
import Image from 'next/image';

import styles from './Portfolio.module.css';
import {PortfolioProject} from './../../../data/portfolio';

import image from '../../../public/temp.jpg';

interface Props {
	project: PortfolioProject;
}

const PortfolioCard: FC<Props> = ({project}) => {
	return (
		<div className={styles.portfolioBox}>
			<div className={styles.textOverlay}>
				<h1>{project.title}</h1>
				<p>{project.subtitle}</p>
			</div>
			<img
				className={styles.portfolioBoxImage}
				src={project.image}
				alt='projects'
			/>
			{/* <Image
				className={styles.portfolioBoxImage}
				src={image}
				alt='projects'
				layout={'fill'}
				objectFit={'cover'}
			/> */}
		</div>
	);
};

export default PortfolioCard;
