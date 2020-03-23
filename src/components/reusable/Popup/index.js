import React from 'react'
import PropTypes from 'prop-types'
import styles from './Popup.scss'

export default function Popup({ handleCloseClick, children, classNames }) {
  return (
    <div className={styles.popupWrapper}>
      <div
        className={[
          styles.popupInner,
          classNames
        ].join(' ')}
      >
        {children}
        <a className={styles.btnClose} onClick={(e) => handleCloseClick(e)} />
      </div>
    </div>
  )
}

Popup.propTypes = {
  children: PropTypes.node,
  handleCloseClick: PropTypes.func,
  classNames: PropTypes.string
}
