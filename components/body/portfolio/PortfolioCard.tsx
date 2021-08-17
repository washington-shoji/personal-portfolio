import React, {FC} from 'react';
import Image from 'next/image';

import styles from './Portfolio.module.css';
import {PortfolioProject} from './../../../data/portfolio';

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
			<Image
				className={styles.portfolioBoxImage}
				src={project.image}
				alt='projects'
				objectFit={'fill'}
				layout={'responsive'}
			/>
		</div>
	);
};

export default PortfolioCard;
