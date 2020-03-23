import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.scss'

export default function Button({ children, disabled = false, type = 'button', onClick = null, classNames = null }) {
  return (
    <button
      type={type}
      className={[
        styles.button,
        classNames
      ].join(' ')}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  children: 'Button',
  disabled: false,
  type: 'button',
  onClick: null,
  classNames: null
}

Button.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  onClick: PropTypes.func,
  classNames: PropTypes.string
}
