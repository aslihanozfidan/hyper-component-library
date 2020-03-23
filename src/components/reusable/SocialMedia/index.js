import React from 'react'
import PropTypes from 'prop-types'
import { getPrismicLink } from 'helpers'
import Image from '../Image'
import styles from './SocialMedia.scss'

export default function SocialMedia({ data, isHeader = false, color = 'white', classNames }) {
  let filteredData = []

  if (isHeader) {
    filteredData = data.filter((item) => {
      return item.is_visible_on_header == 'Yes'
    })
  } else {
    filteredData = data
  }

  return (
    <div
      className={[
        styles.socialMediaWrapper,
        classNames
      ].join(' ')}
    >
      <ul>
        {filteredData &&
          filteredData.map((item, index) => {
            const itemID = item.type.toLowerCase()

            return (
              <li key={`social-media-item-${index}`}>
                <a href={getPrismicLink(item.social_link)} target='_blank'>
                  {color == 'dark' ? (
                    <Image
                      src={`/static/images/${itemID}-dark.png`}
                      classNames={[
                        styles.socialMediaIcon,
                        styles.darkIcon
                      ].join(' ')}
                    />
                  ) : (
                    <Image src={`/static/images/${itemID}.png`} classNames={styles.socialMediaIcon} />
                  )}
                </a>
              </li>
            )
          })}
      </ul>
    </div>
  )
}

SocialMedia.defaultProps = {
  isHeader: false,
  color: 'white'
}

SocialMedia.propTypes = {
  data: PropTypes.array,
  isHeader: PropTypes.bool,
  color: PropTypes.string,
  classNames: PropTypes.string
}
