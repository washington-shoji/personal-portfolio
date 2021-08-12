import React, {FC} from 'react';
import Image from 'next/image';

import {WorkDataInterface} from '../../data/work';
import styles from './Work.module.css';

interface Props {
	work: WorkDataInterface;
}

const WorkCard: FC<Props> = ({work}) => {
	return (
		<div className={styles.workCard}>
			{/* <div className={styles.workLogo}>
				<Image
					className={styles.workLogo}
					src={work.companyLogo}
					alt={work.company}
					height={500}
					width={500}
				/>
			</div> */}

			<div className={styles.workInfo}>
				<label className={styles.workDesignation}>{work.designation}</label>
				<label className={styles.workCompanyName}>{work.company}</label>
				<div className={styles.workDates}>
					<label>{`${work.dateJoinedIn} - ${work.dateEnded}`}</label>
				</div>
				<div className={styles.workDescription}>
					<p>{work.work}</p>
				</div>
			</div>
		</div>
	);
};

export default WorkCard;
