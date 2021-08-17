import React from 'react';
import Image from 'next/image';
import styles from './Service.module.css';

import {Project, projectData} from '../../../data/projects';
import ServiceCard from './ServiceCard';

const Service = () => {
	const projects: Array<Project> = projectData;
	return (
		<>
			<div className={styles.headingService}>
				<h1>Projects</h1>
				<p>
					Here is a collection of my projects. Please feel free to test and have
					a look in Github.
				</p>
			</div>
			<div className={styles.serviceBoXContainer}>
				{projects.map((project) => {
					return <ServiceCard key={project.id} project={project} />;
				})}
			</div>
		</>
	);
};

export default Service;
