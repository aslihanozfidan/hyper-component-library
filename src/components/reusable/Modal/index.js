import React, { useEffect } from 'react'
import styles from './Modal.scss'

export default function Index({ children, isOpen, onClose, classNames }) {
  useEffect(() => {
    const keyHandler = (e) => {
      if (e.keyCode == 27) onClose()
    }
    window.addEventListener('keydown', keyHandler)
    return () => window.removeEventListener('keydown', keyHandler)
  }, [])

  useEffect(
    () => {
      if (isOpen) document.documentElement.style.overflowY = 'hidden'
      else document.documentElement.style.overflowY = 'auto'
    },
    [
      isOpen
    ]
  )

  if (!isOpen) return null
  return (
    <div
      className={[
        styles.wrapper,
        classNames
      ].join(' ')}
    >
      <a onClick={onClose} className={styles.closeBtn} />
      {children}
    </div>
  )
}
