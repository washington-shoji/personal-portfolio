import React, {FC} from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLink} from '@fortawesome/free-solid-svg-icons';

import styles from './Button.module.css';
import Link from 'next/link';

interface Props {
	label: string;
}

const Button: FC<Props> = ({label}) => {
	return (
		<div className={styles.button}>
			<Link href='/projects' passHref>
				<a>
					<FontAwesomeIcon className={styles.buttonIcon} icon={faLink} />
					{label}
				</a>
			</Link>
		</div>
	);
};

export default Button;
