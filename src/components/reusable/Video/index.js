import React from 'react'
import PropTypes from 'prop-types'
import styles from './Video.scss'

export default function Video({ videoUrl, videoRef, classNames }) {
  return isYoutubeVideo ? (
    <div
      id='player'
      className={[
        styles.videoWapper,
        classNames
      ].join(' ')}
    />
  ) : (
    <video ref={videoRef}>
      <source src={videoUrl} />
    </video>
  )
}

Video.propTypes = {
  videoUrl: PropTypes.string,
  videoRef: PropTypes.string,
  classNames: PropTypes.string
}
