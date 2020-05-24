import styles from './Modal.module.css'
import cx from 'classnames'
import { useState } from 'react'

const Modal = (props) => {
	const [visible, setVisible] = useState(props.visible)

  return (
    <div className={cx(
        styles.modalContainer,
        {[styles.show]: visible === true},
        {[styles.hide]: visible === false}
      )}>
      <section className={styles.modalBody}>
        {props.children}
        <button onClick={() => {setVisible(false)}}>Close</button>
      </section>
    </div>
  );
};

export default Modal
