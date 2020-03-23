import React from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import styles from './Carousel.scss'

export default function Carousel({ children, settings = [], classNames }) {
  return (
    <div
      className={[
        styles.carouselWrapper,
        classNames
      ].join(' ')}
    >
      <Slider {...settings}>{children}</Slider>
    </div>
  )
}

Carousel.defaultProps = {
  settings: []
}

Carousel.propTypes = {
  children: PropTypes.node,
  settings: PropTypes.array,
  classNames: PropTypes.string
}
