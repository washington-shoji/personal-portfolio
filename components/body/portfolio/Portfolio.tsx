import React from 'react';

import styles from './Portfolio.module.css';
import {portfolioData, PortfolioProject} from '../../../data/portfolio';
import PortfolioCard from './PortfolioCard';

function Portfolio() {
	const projects: Array<PortfolioProject> = portfolioData;
	return (
		<>
			<h1 className={styles.portfolioHeading}>Portfolio</h1>
			<div className={styles.portfolioBoxContainer}>
				{projects.map((project) => {
					return <PortfolioCard key={project.id} project={project} />;
				})}
			</div>
		</>
	);
}

export default Portfolio;
