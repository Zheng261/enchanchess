import Head from 'next/head'
import Link from 'next/link'
import CardDiv from '../components/ui-elements/CardDiv'
import StyledButton from '../components/ui-elements/StyledButton'
import CardButton from '../components/ui-elements/CardButton'

import styles from '../components/index.module.css'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  useEffect(() => {
    router.prefetch('/start-game')
  })

  // clicking button navigates to given link
  const btnNavigate = (link) => {
    return () => {
      router.push(link)
    }
  }

  return (
    <div className={styles.parentContainer}>
      <Head>
        <title>ACH</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.cardContainer}>
        <div>
          <CardButton onClick={btnNavigate('/import-cards')} text={'Add Decks'}/>
        </div>

        <div className={styles.centerContainer}>
          <h1>
            Cards Against Humanity
          </h1>
          <p className={styles.tagline}>
            A Card Game for Horrible People <code>social distancing edition</code>
          </p>
          <CardDiv>
            <input
              type="text"
              value="Username"
            />
            <StyledButton onClick={btnNavigate('/start-game')}>
              Create Room
            </StyledButton>
          </CardDiv>
        </div>

        <div>
          <CardButton onClick={btnNavigate('/about')} text={'About'}/>
          <CardButton onClick={btnNavigate('/contact')} text={'Contact'}/>
        </div>
      </div>
    </div>
  )
}
