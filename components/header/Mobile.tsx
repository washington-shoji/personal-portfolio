import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from './Header.module.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; // Import the FontAwesomeIcon component
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons'; // import the icons you need

type MenuHandlerType = {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Mobile = ({isOpen, setIsOpen}: MenuHandlerType) => {
	return (
		<div className={styles.mobile}>
			<div>
				<div
					className={styles.closeMenuIcon}
					onClick={() => setIsOpen(!isOpen)}
				>
					<FontAwesomeIcon
						icon={faTimesCircle}
						className={styles.closeMenuIcon}
					/>
				</div>
				<div className={styles.mobileMenuOptions}>
					<div className={styles.mobileMenuOption}>
						<Link href='/'>Home</Link>
					</div>
					<div className={styles.mobileMenuOption}>
						<Link href='/projects'>Projects</Link>
					</div>
					{/* <div className={styles.mobileMenuOption}>
						<a href='#hero'>Hero</a>
					</div>
					<div className={styles.mobileMenuOption}>
						<a href='#skills'>Skills</a>
					</div>
					<div className={styles.mobileMenuOption}>
						<a href='#project'>Project</a>
					</div>
					<div className={styles.mobileMenuOption}>
						<a href='#work'>Work</a>
					</div>
					<div className={styles.mobileMenuOption}>
						<a href='#contact'>Contact</a>
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default Mobile;
