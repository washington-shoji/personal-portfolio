import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import styles from './Social.module.css';

const Social = () => {
	return (
		<div className={styles.social}>
			<a
				href='https://www.linkedin.com/in/washington-shoji-77171bb5/'
				target='_blank'
				rel='noopener noreferrer'
			>
				<FontAwesomeIcon className={styles.icon} icon={['fab', 'linkedin']} />
			</a>
			{/* <a href='#'>
				<FontAwesomeIcon className={styles.icon} icon={['fab', 'twitter']} />
			</a> */}
		</div>
	);
};

export default Social;
