//import PageLayout from '../components/PageLayout'
import styles from '../components/ui-elements/CardDiv.module.css'
import Link from 'next/link';
import HeaderLayout from '../components/HeaderLayout';
import BackCard from '../components/BackCard'

export default function About() {
	return (
		<HeaderLayout>
			<h1>About</h1>
			<p>			
				We're GGEZ and we're trying to help you social distance :) We're unaffiliated with the CAH team and all that.
				This is an online version of Cards Against Humanity, a party game for horrible people. Rules can be found  <a href="http://s3.amazonaws.com/cah/CAH_Rules.pdf" target="_blank">here</a>
			
			</p>
			<p>
				Testing automatic Heroku deploy!
			</p>
		<BackCard />
		</HeaderLayout>
	);
}