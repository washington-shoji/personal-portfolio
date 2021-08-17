import React from 'react';
import styles from './ContactButton.module.css';

const ContactButton = () => {
	return (
		<section className={styles.contactButton}>
			<div className={styles.contactButtonContainer}>
				<p className={styles.para}>If you have any question fell free to contact me</p>
				{/* <a href='#'>Contact Me</a> */}
			</div>
		</section>

	);
};

export default ContactButton;
