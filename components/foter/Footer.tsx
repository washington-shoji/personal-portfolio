import React from 'react';

import styles from './Footer.module.css';

const Footer = () => {
	return (
		<div className={styles.footer}>
			Made with <span className={styles.footerIcon}> ❤ </span> by Washington
			Shoji
		</div>
	);
};

export default Footer;
