import React from 'react';

import styles from './Contact.module.css';
import Separator from '../common/separator/Separator';
import SocialContact from '../common/social/SocialContact';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; // Import the FontAwesomeIcon component
import {faCloudDownloadAlt} from '@fortawesome/free-solid-svg-icons'; // import the icons you need

const Contact = () => {
	return (
		<div className={styles.contact}>
			<Separator />
			<label className={styles.sectionTitle}>Contact</label>
			<div className={styles.contactContainer}>
				<div className={styles.contactLeft}>
					<p>You can contact me in any of those platforms.</p>
					<SocialContact />
				</div>
				<div className={styles.contactDownload}>
					<a href='#'>
						<FontAwesomeIcon
							className={styles.contactDownloadIcon}
							icon={faCloudDownloadAlt}
						/>
						Download resume
					</a>
				</div>
			</div>
		</div>
	);
};

export default Contact;
