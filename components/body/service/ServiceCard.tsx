/* eslint-disable @next/next/no-img-element */
import React, {FC} from 'react';

import Image from 'next/image';
import styles from './Service.module.css';
import {Project} from '../../../data/projects';

import image from '../../../public/temp.jpg';
interface Props {
	project: Project;
}

const ServiceCard: FC<Props> = ({project}) => {
	return (
		<div className={styles.serviceBox}>
			<div className={styles.serviceBoxImageContainer}>
				<div className={styles.serviceType}>{project.title}</div>
				<img
					className={styles.serviceBoxImage}
					src={project.image}
					alt='projects'
				/>
				{/* <Image
					className={styles.serviceBoxImage}
					src={image}
					alt='service'
					layout={'fill'}
					objectFit={'cover'}
				/> */}
			</div>
			<div className={styles.serviceBoxText}>
				<a href='#'>{project.description}</a>
			</div>
		</div>
	);
};

export default ServiceCard;
