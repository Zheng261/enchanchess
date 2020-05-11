import Head from 'next/head'
import Link from 'next/link'
import CardDiv from '../components/ui-elements/CardDiv'
import StyledButton from '../components/ui-elements/StyledButton'

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
    <div className="container">
      <Head>
        <title>ACH</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Cards Against Humanity
        </h1>

        <p className="description">
          A Card Game for Horrible People <code>social distancing edition</code>
        </p>

        <div className={styles.cardContainer}>
          <CardDiv heading={'Add Decks'}>
          </CardDiv>
          <CardDiv>
            <input
              type="text"
              value="Username"
            />

            <StyledButton onClick={btnNavigate('/start-game')}>
              Create Room
            </StyledButton>
            
          </CardDiv>
          <CardDiv heading={'About'}>
          </CardDiv>
          <CardDiv heading={'Contact'}>
          </CardDiv>
        </div>

        <div className="grid">
          <Link href="/start-game">
            <a className="card">
              <h3>Start a Game &rarr;</h3>
              <p>Play with your friends!</p>
            </a>
          </Link>

          <Link href="/about">
            <a className="card">
              <h3>About &rarr;</h3>
              <p>Something about us!</p>
            </a>
          </Link>

          <Link href="/contact">
            <a className="card">
              <h3>Contact &rarr;</h3>
              <p>Contact us here!</p>
            </a>
          </Link>

          <Link href="/import-cards">
            <a className="card">
              <h3>Import Cards &rarr;</h3>
              <p>Import your cards here!</p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  )
}
