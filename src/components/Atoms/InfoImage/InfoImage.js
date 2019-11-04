import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './InfoImage.css'
// import { getInitials } from '../../../Helpers/Helpers'
import profile_placeholder from '../../../Images/profile_placeholder.png'

/**
 * An avatar buggle that can show a users profile picture
 * or placeholder image.
 */
export default class InfoImage extends Component {
  static propTypes = {
    /** Size for the Image */
    size: PropTypes.oneOf([
      'small',
      'medium',
      'large',
      'big',
      'huge',
      'massive',
    ]),
    /** url of image to be displayed */
    src: PropTypes.string,
    /** Can be dimmed */
    dimmed: PropTypes.bool,
  }
  static defaultProps = {
    size: 'medium',
    src: '',
    dimmed: false,
  }

  constructor(props) {
    super(props)
    this.state = {
      someState: true,
    }
  }

  render() {
    const { size, src, dimmed } = this.props

    const pixelSizes = {
      small: 24,
      medium: 32,
      large: 64,
      big: 96,
      huge: 128,
      massive: 240,
    }

    let sizePx = pixelSizes[size]

    const style = {
      lineHeight: sizePx + 'px',
      width: sizePx + 'px',
      height: sizePx + 'px',
    }

    if (dimmed) style.opacity = 0.5

    const srcOverride = src === '' ? profile_placeholder : src

    const wrapperStyle = Object.assign({}, style, this.props.style)

    return (
      <div className="image" style={wrapperStyle}>
        <img className="image-img" src={srcOverride} alt="" style={style} />
      </div>
    )
  }
}
