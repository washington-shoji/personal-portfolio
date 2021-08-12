import React, {useState} from 'react';
import styles from './Header.module.css';
import Mobile from './Mobile';
import Web from './Web';
import Image from 'next/image';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; // Import the FontAwesomeIcon component
import {faBars} from '@fortawesome/free-solid-svg-icons'; // import the icons you need

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	function handleOpenMenu(): void {
		setIsOpen(!isOpen);
	}

	return (
		<div className={styles.header}>
			<div className={styles.logo}>Washington Shoji</div>
			<div className={styles.menu}>
				<div className={styles.webMenu}>
					<Web />
				</div>
				<div className={styles.mobileMenu}>
					<div className={styles.menuIcon} onClick={handleOpenMenu}>
						<FontAwesomeIcon icon={faBars} className={styles.menuIcon} />
					</div>
					{isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
				</div>
			</div>
		</div>
	);
};

export default Header;
