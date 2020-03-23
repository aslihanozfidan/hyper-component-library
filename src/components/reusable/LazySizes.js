import { Component } from 'react'
import ReactDOM from 'react-dom'
import invariant from 'invariant'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import lazySizes from 'lazysizes'
import { getImageUrl } from 'helpers'

class LazySizes extends Component {
  static defaultProps = {
    src: 'data:image/gif;base64,R0lGODdhEAAJAIAAAMLCwsLCwiwAAAAAEAAJAAACCoSPqcvtD6OclBUAOw==',
    dataSizes: 'auto',
    iframe: false
  }

  componentWillMount = () => {
    let { iframe, dataSrc } = this.props
    if (iframe && !dataSrc) {
      invariant(false, 'Prop dataSrc is required on iframe.')
    }
  }

  componentWillUpdate = (nextProps) => {
    let propsChanged = false
    for (let propName of [
      'src',
      'dataSizes',
      'dataSrc',
      'dataSrcSet',
      'className',
      'iframe'
    ]) {
      let prop = propName === 'dataSrcSet' ? this.handleSrcSet(this.props[propName]) : this.props[propName]
      let nextProp = propName === 'dataSrcSet' ? this.handleSrcSet(nextProps[propName]) : nextProps[propName]
      if (prop !== nextProp) {
        propsChanged = true
        break
      }
    }
    if (propsChanged && lazySizes) {
      let lazyElement = ReactDOM.findDOMNode(this)
      if (lazySizes.hC(lazyElement, 'lazyloaded')) {
        lazySizes.rC(lazyElement, 'lazyloaded')
      }
    }
  }

  componentDidUpdate = () => {
    if (!lazySizes) {
      return
    }
    let lazyElement = ReactDOM.findDOMNode(this)
    if (!lazySizes.hC(lazyElement, 'lazyloaded') && !lazySizes.hC(lazyElement, 'lazyload')) {
      lazySizes.aC(lazyElement, 'lazyload')
    }
  }

  handleSrcSet = (srcSet) => {
    let result = srcSet
    if (typeof srcSet === 'object') {
      if (!Array.isArray(srcSet)) {
        result = []
        for (let variant in srcSet) {
          if (srcSet.hasOwnProperty(variant)) {
            result.push({
              variant: variant,
              src: srcSet[variant]
            })
          }
        }
      }
      result = result
        .map((item) => {
          return `${item.src} ${item.variant}`
        })
        .join(', ')
    }
    return result
  }

  render() {
    let { src, dataSizes, dataSrc, dataSrcSet, className, iframe, alt, image, imageTitle, ...other } = this.props
    dataSrcSet = this.handleSrcSet(dataSrcSet)
    className = classnames([
      'lazyload',
      className
    ]).trim()

    if (iframe) {
      return <iframe {...other} src={dataSrc ? '' : src} data-src={dataSrc} className={className} />
    }
    if (image) {
      //const imageUrl = getImageUrl({ url: image })

      return (
        <img
          {...other}
          data-src={image}
          data-sizes='auto'
          data-srcset={`${image}?w=768  768w,
          ${image}?w=1024 1024w,
          ${image}?w=1800 1800w`}
          className={('lazyload', className)}
          alt={alt}
          title={alt}
        />
      )
    } else {
      return (
        <img
          {...other}
          src={src}
          data-src={dataSrc}
          data-sizes={dataSizes}
          data-srcset={dataSrcSet}
          className={className}
          alt={alt}
          title={alt}
        />
      )
    }
  }
}

LazySizes.propTypes = {
  src: PropTypes.string,
  dataSizes: PropTypes.string,
  dataSrc: PropTypes.string,
  dataSrcSet: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]),
  className: PropTypes.string,
  iframe: PropTypes.bool,
  alt: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ])
}

export default LazySizes
