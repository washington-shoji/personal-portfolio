import React from 'react';
import styles from './Body.module.css';
import Hero from '../hero/Hero';
import Skills from '../skills/Skills';
import Projects from './../projects/Projects';
import Work from '../work/Work';
import Contact from '../contact/Contact';

const Body = () => {
	return (
		<div className={styles.body}>
			<Hero />
			<Projects />
			<Skills />
			<Work />
			<Contact />
			{/* <section id='hero'>
				<Hero />
			</section>
			<section id='project'>
				<Projects />
			</section>
			<section id='skills'>
				<Skills />
			</section>
			<section id='work'>
				<Work />
			</section>
			<section id='contact'>
				<Contact />
			</section> */}
		</div>
	);
};

export default Body;
