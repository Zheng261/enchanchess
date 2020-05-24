import Modal from "./Modal"
import { useRouter } from 'next/router'

const GameSettingsModal = (props) => {
  const router = useRouter()

  return (
    <Modal>
      <button onClick={() => { router.push(`/`) }}>Quit</button>
    </Modal>
  );
};

export default GameSettingsModal
