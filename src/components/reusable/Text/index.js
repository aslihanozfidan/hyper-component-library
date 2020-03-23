import React from 'react'
import PropTypes from 'prop-types'
import styles from './Text.scss'

export default function Text({ children, isAnimated = false, classNames }) {
  return (
    <div
      className={[
        classNames,
        styles.textWrapper
      ].join(' ')}
      data-splitting={isAnimated}
    >
      {children}
    </div>
  )
}

Text.defaultProps = {
  isAnimated: false,
  classNames: null
}

Text.propTypes = {
  text: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]),
  isAnimated: PropTypes.bool,
  classNames: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string
  ])
}
