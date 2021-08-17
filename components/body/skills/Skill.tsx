import React from 'react';
import Image from 'next/image';
import styles from './Skill.module.css';

const Skill = () => {
	return (
		<>
			<div className={styles.aboutText}>
				<h3>Skills</h3>
				<p>Languages: TypeScript, JavaScript, HTML, CSS, Dart, Python.</p>
				<p>
					Tech stack: React, Next.js, Redux, Flutter, Firebase, Amplify, Git,
					Github, Node.
				</p>
				<p>
					Soft skills: Problem-solving skills, team building, time management.
				</p>
				<h3>Education</h3>
				<p>Master of Information Technology - University Technology Sydney</p>
				<p>Bachelor of Commerce - Macquarie University</p>
				{/* <button>More details</button> */}
			</div>
		</>
	);
};

export default Skill;
