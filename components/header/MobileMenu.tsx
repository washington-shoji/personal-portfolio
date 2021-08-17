import React, {FC} from 'react';
import Link from 'next/link';
import styles from './Mobile.module.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faTimesCircle} from '@fortawesome/free-solid-svg-icons';

interface Props {
	isMobileOpen: boolean;
	handleOpenMenu: VoidFunction;
}

const MobileMenu: FC<Props> = ({isMobileOpen, handleOpenMenu}) => {
	return (
		<div className={styles.nav}>
			<nav>
				<a className={styles.logo} href='#'>
					Washington Shoji
				</a>
				<div className={styles.toggle} onClick={handleOpenMenu}>
					{isMobileOpen ? (
						<FontAwesomeIcon
							className={styles.toogleMenuIcon}
							icon={faTimesCircle}
						/>
					) : (
						<FontAwesomeIcon className={styles.toogleMenuIcon} icon={faBars} />
					)}
				</div>
				<ul className={styles.menu}>
					<li>
						<Link href={'/'}>Home</Link>
					</li>
					<li>
						<Link href={'portfolio'}>Portfolio</Link>
					</li>
					<li>
						<Link href={'contact'}>Contact</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default MobileMenu;
