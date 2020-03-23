import React from 'react'
import PropTypes from 'prop-types'
import styles from './Container.scss'

export default function Container({ children = null, classNames = null }) {
  return (
    <div
      className={[
        styles.container,
        classNames
      ].join(' ')}
    >
      {children}
    </div>
  )
}

Container.defaultProps = {
  children: 'Button',
  classNames: null
}

Container.propTypes = {
  children: PropTypes.node,
  classNames: PropTypes.string
}
