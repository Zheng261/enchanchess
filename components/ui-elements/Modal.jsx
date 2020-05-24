import styles from './Modal.module.css'
import cx from 'classnames'
import { useState, useEffect } from 'react'

const Modal = (props) => {
  return (
    <div className={cx(
        styles.modalContainer,
        {[styles.show]: props.visible === true},
        {[styles.hide]: props.visible === false}
      )}>
      <section className={styles.modalBody}>
        {props.children}
      </section>
    </div>
  );
};

export default Modal
