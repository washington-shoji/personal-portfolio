import React, {FC} from 'react';

import Image from 'next/image';
import styles from './Service.module.css';
import {Project} from '../../../data/projects';

interface Props {
	project: Project;
}

const ServiceCard: FC<Props> = ({project}) => {
	return (
		<div className={styles.serviceBox}>
			<div className={styles.serviceBoxImageContainer}>
				<div className={styles.serviceType}>{project.title}</div>
				<Image
					className={styles.serviceBoxImage}
					src={project.image}
					alt='service'
					layout={'responsive'}
					objectFit={'fill'}
				/>
			</div>
			<div className={styles.serviceBoxText}>
				<a href='#'>{project.description}</a>
			</div>
		</div>
	);
};

export default ServiceCard;
