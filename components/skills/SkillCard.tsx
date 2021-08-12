import React, {FC} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; // Import the FontAwesomeIcon component
import {SkillItemType} from '../../data/skills';

import styles from './Skills.module.css';

interface Props {
	skill: SkillItemType;
}

const SkillCard: FC<Props> = ({skill}) => {
	return (
		<div className={styles.skillCard}>
			<FontAwesomeIcon
				className={styles.skillIcon}
				icon={skill.icon}
			></FontAwesomeIcon>
			<label className={styles.skillName}>{skill.name}</label>
		</div>
	);
};

export default SkillCard;
