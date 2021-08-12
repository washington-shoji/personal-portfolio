import React, {FC} from 'react';
import Image from 'next/image';

import styles from './Projects.module.css';
import {ProjectData} from '../../data/projects';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; // Import the FontAwesomeIcon component
import {faLink} from '@fortawesome/free-solid-svg-icons'; // import the icons you need
import {faGithub} from '@fortawesome/free-brands-svg-icons'; // import the icons you need
interface Props {
	project: ProjectData;
}

const ProjectCard: FC<Props> = ({project}) => {
	return (
		<div className={styles.projectCard}>
			<div className={styles.projectInfo}>
				<label className={styles.projectTitle}>{project.title}</label>
				<div className={styles.projectLinks}>
					{project.demo && (
						<a
							className={styles.projectLink}
							href={project.demo}
							target='_blank'
							rel='noreferrer'
						>
							{
								<div className={styles.projectLinkButton}>
									<FontAwesomeIcon
										className={styles.projectLinkButtonIcon}
										icon={faLink}
									/>
									Demo
								</div>
							}
						</a>
					)}
					{project.github && (
						<a
							className={styles.projectLink}
							href={project.github}
							target='_blank'
							rel='noreferrer'
						>
							{
								<div className={styles.projectLinkButton}>
									<FontAwesomeIcon
										className={styles.projectLinkButtonIcon}
										icon={faGithub}
									/>
									Github
								</div>
							}
						</a>
					)}
				</div>
				<p className={styles.projectDescription}>{project.about}</p>
				<div className={styles.projectTags}>
					{project.tags.map((tag, index) => {
						return (
							<label className={styles.projectTag} key={index}>
								{tag}
							</label>
						);
					})}
				</div>
			</div>
			{/* <div className={styles.projectPhoto}>
				<Image
					className={styles.projectPhoto}
					src={project.image ?? ''}
					alt={project.title ?? 'project name'}
					height={320}
					width={320}
				/>
			</div> */}
		</div>
	);
};

export default ProjectCard;
