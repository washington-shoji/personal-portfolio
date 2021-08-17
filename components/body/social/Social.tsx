import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import styles from './Social.module.css';

const Social = () => {
	return (
		<div className={styles.social}>
			<a href='#'>
				<FontAwesomeIcon className={styles.icon} icon={['fab', 'linkedin']} />
			</a>
			<a href='#'>
				<FontAwesomeIcon className={styles.icon} icon={['fab', 'twitter']} />
			</a>
			<a href='#'>
				<FontAwesomeIcon className={styles.icon} icon={['fab', 'youtube']} />
			</a>
		</div>
	);
};

export default Social;
