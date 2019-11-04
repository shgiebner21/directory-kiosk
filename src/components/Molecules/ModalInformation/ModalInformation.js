import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Modal from 'react-modal'

import InfoImageHeader from '../InfoImageHeader/InfoImageHeader'
import TabPanel from '../TabPanel/TabPanel'

import './ModalInformation.css'

// Wihtout this, throws a Warning: App element is not defined...
Modal.setAppElement('#root')

export default class ModalInformation extends Component {
  static propTypes = {
    /** Data for Point Of Interested clicked on */
    selectedPOI: PropTypes.object.isRequired,
    /** Secure Url for POI lunch menu if exists */
    lunchMenu: PropTypes.string,
    /** Secure Url for POI lunch menu if exists */
    dinnerMenuUrl: PropTypes.string,
    /** Photos for Point Of Interested clicked on, if they exist */
    poiPhotosArray: PropTypes.array,
    /** Main text to display */
    name: PropTypes.string.isRequired,
    /** Secondary text to display */
    subText: PropTypes.string.isRequired,
    /** location of image to be displayed */
    src: PropTypes.string.isRequired,
    /** bool to determine if show the Modal or not */
    openInfoModal: PropTypes.bool,
    /** Function to close modal on click */
    onClose: PropTypes.func.isRequired,
    /** className if passed from parent */
    className: PropTypes.string,
    /** Style if passed from parent */
    style: PropTypes.string,
  }
  static defaultProps = {
    lunchMenu: undefined,
    dinnerMenuUrl: undefined,
    openInfoModal: false,
    poiPhotosArray: undefined,
  }


  render() {
    const { selectedPOI, lunchMenu, dinnerMenuUrl, src, name, subText, openInfoModal, poiPhotosArray, onClose } = this.props

    return (
      <div className="modal-container" >
        <Modal isOpen={openInfoModal}
               onRequestClose={onClose}
               className="modal-content"
               overlayClassName="Overlay" >

          <InfoImageHeader src={src} subText={subText} name={name} onClose={onClose} />

          <div className='modal-frame' >
            <TabPanel selectedPOI={selectedPOI} poiPhotosArray={poiPhotosArray}
                      lunchMenu={lunchMenu} dinnerMenuUrl={dinnerMenuUrl} />
          </div>
        </Modal>
      </div>
    )
  }
}
