import React from 'react'
import PropTypes from 'prop-types'
import styles from './Title.scss'

export default function Title({ children, isAnimated = false, classNames }) {
  return (
    <div
      className={[
        styles.titleWrapper,
        classNames
      ].join(' ')}
      data-splitting={isAnimated}
    >
      {children}
    </div>
  )
}

Title.defaultProps = {
  isAnimated: false
}

Title.propTypes = {
  children: PropTypes.node,
  isAnimated: PropTypes.bool,
  classNames: PropTypes.string
}
