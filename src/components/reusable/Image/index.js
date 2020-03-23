import React from 'react'
import PropTypes from 'prop-types'
import LazySizes from '../LazySizes'
import styles from './Image.scss'

export default function Image({ src, alt, isCovered = true, isAnimated = false, imgClassNames, classNames }) {
  if (!src) return null

  return (
    <div
      data-splitting={isAnimated}
      className={[
        styles.imageWrapper,
        classNames
      ].join(' ')}
    >
      <LazySizes
        image={src}
        dataSrc={src}
        alt={alt}
        className={[
          'img-responsive lazyload teaser',
          imgClassNames,
          isCovered ? styles.covered : styles.contained
        ].join(' ')}
      />
    </div>
  )
}

Image.defaultProps = {
  isCovered: true,
  isAnimated: false
}

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  imageBottomSpace: PropTypes.string,
  isCovered: PropTypes.bool,
  isAnimated: PropTypes.bool,
  imgClassNames: PropTypes.string,
  classNames: PropTypes.string
}
