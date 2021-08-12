import React, {FC} from 'react';
import {WorkData} from '../../data/work';

import styles from './Work.module.css';
import Separator from '../common/separator/Separator';
import WorkCard from './WorkCard';

const Work: FC = () => {
	const workData = WorkData;
	return (
		<div className={styles.work}>
			<Separator />
			<label className={styles.sectionTitle}>Work</label>
			<div className={styles.workList}>
				{workData.map((work) => {
					return <WorkCard key={work.company} work={work} />;
				})}
			</div>
		</div>
	);
};

export default Work;
