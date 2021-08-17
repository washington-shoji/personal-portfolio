import React from 'react';
import Social from '../social/Social';
import styles from './ContactForm.module.css';

const ContactForm = () => {
	return (
		<div className={styles.contactForm}>
			<form>
				<div className={styles.contactFormLeft}>
					<h1 className={styles.contactFormLeftHeading}>
						<span className={styles.contactFormLeftHeadingSpan}>Contact</span>{' '}
						Me
					</h1>
					<div className={styles.contactFormName}>
						<span>Name</span>
						<input type='text' placeholder='Full Name' />
					</div>
					<div className={styles.contactFormEmail}>
						<span>Email</span>
						<input type='email' placeholder='youremail@email.com' />
					</div>
				</div>
				<div className={styles.contactFormRight}>
					<div className={styles.contactMessage}>
						<span>Message</span>
						<textarea
							name='message'
							rows={5}
							cols={20}
							placeholder='Your message...'
						></textarea>
					</div>
					<button>Submit</button>
				</div>
			</form>
		</div>
	);
};

export default ContactForm;
