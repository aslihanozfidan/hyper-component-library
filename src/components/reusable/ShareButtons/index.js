import React from 'react'
import { InlineShareButtons } from 'sharethis-reactjs'
import PropTypes from 'prop-types'
import './ShareButtons.scss'

export default function ShareButtons({
  alignment,
  color,
  fontSize,
  labels,
  networks = [
    'facebook',
    'twitter',
    'linkedin'
  ],
  padding,
  radius,
  showTotal,
  size
}) {
  return (
    <InlineShareButtons
      config={{
        alignment: alignment, // alignment of buttons (left, center, right)
        color: color, // set the color of buttons (social, white)
        enabled: true,
        font_size: fontSize,
        labels: labels, // button labels (cta, counts, null)
        language: 'en',
        networks: networks,
        padding: padding,
        radius: radius,
        show_total: showTotal,
        size: size
      }}
    />
  )
}

Video.defaultProps = {
  networks: [
    'facebook',
    'twitter',
    'linkedin'
  ]
}

Video.propTypes = {
  alignment: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  labels: PropTypes.string,
  networks: PropTypes.array,
  padding: PropTypes.string,
  radius: PropTypes.string,
  showTotal: PropTypes.string,
  size: PropTypes.string,
  classNames: PropTypes.string
}
