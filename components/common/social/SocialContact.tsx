import React from 'react';
import Image from 'next/image';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {SocialData} from '../../../data/social';
import styles from './Social.module.css';

const SocialContact = () => {
	const socialData = SocialData;
	return (
		<div className={styles.socialContact}>
			{socialData.map((item, index) => {
				return (
					<a key={index} href={item.link} target='_blank' rel='noreferrer'>
						<div className={styles.socialIconDiv}>
							<FontAwesomeIcon icon={item.icon} className={styles.socialIcon} />
							{/* <Image
								className={styles.socialIcon}
								src={item.icon as string}
								alt='social icons'
								width={40}
								height={40}
							/> */}
						</div>
					</a>
				);
			})}
		</div>
	);
};

export default SocialContact;
