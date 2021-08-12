import React from 'react';

import styles from './Projects.module.css';
import Separator from '../common/separator/Separator';
import {ProjectData} from './../../data/projects';
import ProjectCard from './ProjectCard';
import Button from '../common/button/Button';

const Projects = () => {
	const projectsData = ProjectData;
	return (
		<div className={styles.projects}>
			<Separator />
			<label className={styles.projectSectionTitle}>Projects</label>
			<div>
				{projectsData.map((project) => {
					return <ProjectCard key={project.id} project={project} />;
				})}
			</div>
			<Button label={`More Projects`} />
		</div>
	);
};

export default Projects;
