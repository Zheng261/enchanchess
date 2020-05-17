import Head from 'next/head'
import Link from 'next/link'
import CardDiv from '../components/ui-elements/CardDiv'
import StyledButton from '../components/ui-elements/StyledButton'
import CardButton from '../components/ui-elements/CardButton'
import HeaderLayout from '../components/HeaderLayout';
import styles from '../components/index.module.css'
import React, { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import UserContext from '../components/UserContext';

export default function Home() {
  const router = useRouter()
  const context = useContext(UserContext)
  const [username, setUsername] = useState('Username')
  const [msg, setMsg] = useState('');

  // useEffect(() => {
  //   router.prefetch('/start-game')
  // })

  // clicking button navigates to given link
  const btnNavigate = (link) => {
    return () => {
      router.push(link)
    }
  }

  const changeUsername = function(event) {
    setUsername(event.target.value)
    if (event.target.value !== '') {
      setMsg('')
    }
  }

  const clickInput = function() {
    // clear input on click
    console.log("cleared input")
    setUsername('')
  }

  const createRoom = function(event) {
    if (username !== '' && username !== 'Username') {
      context.signIn(username);
      btnNavigate('/start-game').call()
    } else {
      setMsg('Please enter your username')
      event.preventDefault();
    } 
  }


  return (
      <HeaderLayout>
      <div className={styles.cardContainer}>
          <div>
          <CardButton onClick={btnNavigate('/import-cards')} text={'Add Cards'}/>
          </div>
        <div className={styles.centerContainer}>
          <CardDiv>
            <input
              type="text"
              value={username}
              onChange={changeUsername}
              onClick={clickInput}
            />
            {msg !== '' && <div className={styles.errorMsg}>{msg}</div>}
            <StyledButton onClick={createRoom}>
              Create Room
            </StyledButton>
          </CardDiv>
        </div>
        <div>
        <CardButton onClick={btnNavigate('/about')} text={'About'}/>
        </div>
        <div>
        <CardButton onClick={btnNavigate('/contact')} text={'Contact'}/>
        </div>
      </div>
    </HeaderLayout>
  )
}
