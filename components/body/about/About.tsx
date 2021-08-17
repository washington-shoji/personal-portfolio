import React from 'react';
import Image from 'next/image';
import styles from './About.module.css';

import image from '../../../public/about-model.png';

const About = () => {
	return (
		<>
			<div className={styles.aboutText}>
				<h1>About Me</h1>
				<h2>I am a Web & Mobile Developer</h2>
				<p>
					I develop websites and apps to improve the digital performance of
					small businesses and not-for-profit organisations. I work closely with
					stakeholders to understand and create solutions for their needs, using
					a tech stack that is sustainable for them.
				</p>
				{/* <h3>My skills</h3>
				<p>Languages: TypeScript, JavaScript, HTML, CSS, Dart, Python.</p>
				<p>
					Tech stack: React, Next.js, Redux, Flutter, Firebase, Amplify, Git,
					Github, Node.
				</p>
				<p>
					Soft skills: Problem-solving skills, team building, time management.
				</p> */}
				{/* <h3>Education</h3>
				<p>Master of Information Technology - University Technology Sydney</p>
				<p>Bachelor of Commerce - Macquarie University</p> */}
				{/* <button>More details</button> */}
			</div>
			{/* <div className={styles.aboutModel}>
				<Image src={image} alt='about image' height={450} width={450} />
			</div> */}
		</>
	);
};

export default About;
