import type {NextPage} from 'next';
import styles from '../styles/Home.module.css';
import Hero from './../components/body/hero/Hero';
import About from './../components/body/about/About';
import Service from './../components/body/service/Service';
import ContactButton from './../components/body/contactButton/ContactButton';
import ContactForm from './../components/body/contactForm/ContactForm';

const Home: NextPage = () => {
	return (
		<div>
			<Hero />
			<About />
			<Service />
			<ContactButton />
			<ContactForm />
		</div>
	);
};

export default Home;
