import BackCard from '../components/BackCard'
import styles from '../components/ui-elements/CardDiv.module.css'
import Link from 'next/link';
import HeaderLayout from '../components/HeaderLayout';

export default function ImportCards() {
  return (
    <div>
     <HeaderLayout>
     <div className={styles.bigCard}>
   	 <p> Add Your Deck </p>
   	 </div>
     </HeaderLayout>
    </div>
  )
}

