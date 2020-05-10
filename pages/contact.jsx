import PageLayout from '../components/PageLayout'
import styles from '../components/ui-elements/CardDiv.module.css'
import Link from 'next/link';
import Header from '../components/Header';

export default function Contact() {
	return (
		<div>
		<PageLayout />
			<h1>Contact</h1>
			<p>
				Suggestions? Let us know below. (input field maybe idk)
			</p>
		</div>
	)
}