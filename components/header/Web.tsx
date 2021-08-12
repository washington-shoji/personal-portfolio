import React, {FC} from 'react';
import styles from './Header.module.css';
import Link from 'next/link';

const Web: FC = () => {
	return (
		<div className={styles.web}>
			<div className={styles.webMenuOptions}>
				<Link href='/'>Home</Link>
			</div>
			<div className={styles.webMenuOptions}>
				<Link href='/projects'>Projects</Link>
			</div>
			{/* <div className={styles.webMenuOptions}>
				<a href='#hero'>Hero</a>
			</div>
			<div className={styles.webMenuOptions}>
				<a href='#skills'>Skills</a>
			</div>
			<div className={styles.webMenuOptions}>
				<a href='#project'>Project</a>
			</div>
			<div className={styles.webMenuOptions}>
				<a href='#work'>Work</a>
			</div>
			<div className={styles.webMenuOptions}>
				<a href='#contact'>Contact</a>
			</div> */}
		</div>
	);
};

export default Web;
