import Modal from "./Modal"
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'

import styles from './GameSettingsModal.module.css'

const GameSettingsModal = (props) => {
  const router = useRouter()
  return (
    <Modal visible={props.visible}>
      <div className={styles.container}>
        <button onClick={() => { router.push(`/`) }}>Quit</button>
        <button onClick={props.closeSettings}>Close</button>
      </div>
    </Modal>
  );
};

export default GameSettingsModal
