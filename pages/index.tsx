import type {NextPage} from 'next';
import styles from '../styles/Home.module.css';
import Hero from './../components/body/hero/Hero';
import Social from './../components/body/social/Social';
import Arrow from './../components/body/arrow/Arrow';
import About from './../components/body/about/About';
import Service from './../components/body/service/Service';
import Portfolio from './../components/body/portfolio/Portfolio';
import ContactButton from './../components/body/contactButton/ContactButton';
import ContactForm from './../components/body/contactForm/ContactForm';
import Skill from './../components/body/skills/Skill';

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<section className={styles.main}>
				<Hero />
				<Social />
				<Arrow />
			</section>
			<section className={styles.about}>
				<About />
			</section>
			<section className={styles.skill}>
				<Skill />
			</section>
			<section className={styles.services}>
				<Service />
			</section>
			<section className={styles.portfolio}>
				<Portfolio />
			</section>
			<section className={styles.contactButton}>
				<ContactButton />
			</section>
			<section className={styles.contact}>
				<ContactForm />
			</section>
		</div>
	);
};

export default Home;
