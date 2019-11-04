import React, { Component } from 'react'
import PropTypes from 'prop-types'

import InfoImage from '../../Atoms/InfoImage/InfoImage'
import CloseButton from '../../Atoms/CloseButton/CloseButton'

import './InfoImageHeader.css'

export default class InfoImageHeader extends Component {
  static propTypes = {
    /** Secondary text to display */
    subText: PropTypes.string,
    /** Main text. Main text to dislay as well as the alt text for the image */
    name: PropTypes.string.isRequired,
    /** Sizes available for Image */
    size: PropTypes.oneOf(['small', 'medium', 'large', 'big', 'huge', 'massive']),
    /** location of image to be displayed */
    src: PropTypes.string,
    /** Function to close modal on click */
    onClose: PropTypes.func.isRequired,
  }
  static defaultProps = {
    picText: '',
    size: 'massive',
    src: '',
  }

  render() {
    const { name, subText, size, src, onClose } = this.props
    

    return (
      <div className="container" >

        <InfoImage alt={name} size={size} src={src} style={{ marginRight: '30px', marginLeft: '1vh', marginTop: '1vh', marginBottom: 5 }} />

        <div style={{ alignSelf: 'center' }} >
          <h2 className="info-header-primary-text" style={{ marginBottom: '1px' }} >{name}</h2>
          <p className="info-header-secondary-text" style={{ fontWeight: 'normal' }} >{subText}</p>
        </div>

        <CloseButton style={{ marginTop: '10vh', marginRight: '.9vh' }} onClick={onClose} />  
      
      </div>
    )
  }
}
