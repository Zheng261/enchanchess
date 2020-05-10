//import PageLayout from '../components/PageLayout'
import styles from '../components/ui-elements/CardDiv.module.css'
import Link from 'next/link';
import HeaderLayout from '../components/HeaderLayout';
import BackCard from '../components/BackCard'

export default function Contact() {
	return (
		<HeaderLayout>
			<h1>Contact</h1>
			<p>
				Suggestions? Let us know below. (input field maybe idk)
			</p>
			<BackCard />
		</HeaderLayout>
	);
}