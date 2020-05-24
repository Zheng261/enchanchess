import Modal from "./Modal"
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

const GameSettingsModal = (props) => {
  const router = useRouter()
  return (
    <Modal visible={props.visible}>
      <button onClick={() => { router.push(`/`) }}>Quit</button>
      <button onClick={props.closeSettings}>Close</button>
    </Modal>
  );
};

export default GameSettingsModal
