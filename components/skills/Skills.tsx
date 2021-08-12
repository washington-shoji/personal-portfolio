import React from 'react';
import Separator from '../common/separator/Separator';
import styles from './Skills.module.css';
import {SkillData} from '../../data/skills';
import SkillCard from './SkillCard';

const Skills = () => {
	const skillsData = SkillData;

	return (
		<div className={styles.skills}>
			<Separator />
			<label className={styles.SkillsSectionsTitle}>Skills</label>
			<div className={styles.skillContainer}>
				{skillsData.map((items, index) => {
					return (
						<div className={styles.skillsSection} key={index}>
							<label className={styles.skillsTitle}>{items.type}</label>
							<div className={styles.skillsList}>
								{items.list.map((skill, index) => {
									return <SkillCard key={index} skill={skill} />;
								})}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Skills;
