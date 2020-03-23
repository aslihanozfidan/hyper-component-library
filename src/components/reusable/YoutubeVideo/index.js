import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import YouTube from 'react-youtube'
import styles from './Video.scss'

export default function YoutubeVideo({ videoUrl, isFullSize, controls, classNames }) {
  const videoRef = useRef(null)
  const pauseRef = useRef(null)
  const playRef = useRef(null)
  let video = ''
  let isYoutubeVideo = false
  if (videoUrl && videoUrl.indexOf('www.youtube.com') > -1) {
    video = videoUrl.split('/').pop()
    isYoutubeVideo = true
  } else {
    video = videoUrl
    isYoutubeVideo = false
  }
  const [
    isPlayed,
    setIsPlayed
  ] = useState(false)
  let player = ''

  useEffect(
    () => {
      if (videoRef && videoRef.current) {
        videoRef.current.addEventListener('ended', stopVideo)

        return () => videoRef.current.removeEventListener('ended', stopVideo)
      } else {
        player =
          YT && YT.Player
            ? new YT.Player('player', {
                videoId: video,
                playerVars: {
                  enablejsapi: 1,
                  controls: controls ? 1 : 0,
                  showinfo: 0,
                  wmode: 'opaque',
                  rel: 0,
                  origin: 'https://28df3441.ngrok.io'
                },
                events: {
                  onReady: () => onPlayerReady()
                }
              })
            : ''
      }
    },
    [
      isPlayed
    ]
  )

  function onPlayerReady() {
    player, 'onPlayerReady'
    playRef.current.addEventListener('click', function() {
      player.playVideo()
    })

    pauseRef.current.addEventListener('click', function() {
      player.pauseVideo()
    })
  }

  function playVideo(event) {
    setIsPlayed(true)
    if (videoRef && videoRef.current) {
      videoRef.current.play()
    }
  }

  function pauseVideo(e) {
    if (videoRef && videoRef.current) {
      videoRef.current.pause()
    }
    setIsPlayed(false)
  }

  function stopVideo() {
    if (videoRef && videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
    setIsPlayed(false)
  }

  return (
    <div
      className={[
        styles.videoWrapper,
        isFullSize ? styles.fullSize : '',
        classNames
      ].join(' ')}
    >
      <div className={styles.frame} style={{ borderColor: frameColor }} />
      {isYoutubeVideo ? (
        <div id='player' />
      ) : (
        <React.Fragment>
          <video ref={videoRef}>
            <source src={videoUrl} />
          </video>
        </React.Fragment>
      )}
      <span
        ref={playRef}
        className={[
          styles.btnPlay,
          isPlayed ? 'hide-fade-in' : 'visible-fade-in',
          isYoutubeVideo ? styles.btnYoutube : ''
        ].join(' ')}
        onClick={() => playVideo()}
      />
      <div ref={pauseRef} className={styles.closeOverlay} onClick={() => pauseVideo()} />
    </div>
  )
}

YoutubeVideo.propTypes = {
  videoUrl: PropTypes.string,
  isFullSize: PropTypes.bool,
  classNames: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string
  ])
}
