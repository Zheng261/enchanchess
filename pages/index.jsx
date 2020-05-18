import Link from 'next/link'
import CardDiv from '../components/ui-elements/CardDiv'
import StyledButton from '../components/ui-elements/StyledButton'
import CardButton from '../components/ui-elements/CardButton'
import HeaderLayout from '../components/HeaderLayout';
import styles from '../components/index.module.css'
import React, { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'

import SetNameView from '../components/SetNameView';

export default function Home() {
  const router = useRouter()
  
  // useEffect(() => {
  //   router.prefetch('/start-game')
  // })

  // clicking button navigates to given link
  const btnNavigate = (link) => {
    return () => {
      router.push(link)
    }
  }

  return (
      <HeaderLayout>
      <div className={styles.cardContainer}>
          <div>
          <CardButton onClick={btnNavigate('/import-cards')} text={'Add Cards'}/>
          </div>
        <SetNameView createRoomAbility = {true}></SetNameView>
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
