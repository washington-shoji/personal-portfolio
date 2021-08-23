import React from 'react';
import Image from 'next/image';
import styles from './About.module.css';

import image from '../../../public/about-model.png';

const About = () => {
	return (
		<section className={styles.about}>
			<div className={styles.aboutText}>
				<h1>About Me</h1>
				<h2>I am a Web & Mobile Developer</h2>
				<p>
					I develop websites and apps to improve the digital performance of
					small businesses and not-for-profit organisations. <br />I work
					closely with stakeholders to understand and create solutions for their
					needs, using a tech stack that is sustainable for them.
				</p>
			</div>

			<div className={styles.aboutText}>
				<h3>Skills</h3>
				<p>
					Tech Skills: Mongo, Express, React, Node, TypeScript, JavaScript,
					HTML, CSS, Dart, Flutter, Python, Next.js, Redux, Firebase, Amplify,
					Git, Github.
				</p>

				<p>
					Soft skills: Problem solving skills, team building, time management.
				</p>
				<h3>Education</h3>
				<p>Master of Information Technology - University Technology Sydney</p>
				<p>Bachelor of Commerce - Macquarie University</p>
				{/* <button>More details</button> */}
			</div>
		</section>
	);
};

export default About;
