import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.scss'

const Button = ({ onClick, classNames }) => {
  return (
    <div
      onClick={onClick}
      className={[
        styles.videoBtn,
        classNames
      ].join(' ')}
    />
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  classNames: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string
  ])
}

export default Button
