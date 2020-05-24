import Link from 'next/link';
import HeaderLayout from '../components/HeaderLayout';
import CardDiv from '../components/ui-elements/CardDiv';
import StyledButton from '../components/ui-elements/StyledButton';
import CardButton from '../components/ui-elements/CardButton';
import styles from '../components/index.module.css';

export default function About() {
  return (
    <HeaderLayout>
      <div className={styles.cardContainer}>
        <div>
          <Link href="/" prefetch>
            <CardButton text="Back" />
          </Link>
        </div>
        <div className={styles.centerContainer}>
          <CardDiv>
            <h2> About </h2>
            <div className={styles.text}>
              This is an online version of Cards Against Humanity, a classic party game for horrible people.
              Rules can be found
              {' '}
              <a href="http://s3.amazonaws.com/cah/CAH_Rules.pdf" target="_blank">here</a>
              .
              {' '}
              <br />
              This site was developed by Team GGEZ in Spring 2020 for Stanford's CS194 class. We're unaffiliated with the CAH team and all that.
              <br />
            </div>
          </CardDiv>
        </div>
        <div>
          <Link href="/import-cards">
            <CardButton text="Add Cards" />
          </Link>
        </div>
        <div>
          <Link href="/contact">
            <CardButton text="Contact" />
          </Link>
        </div>
      </div>
    </HeaderLayout>
  );
}
