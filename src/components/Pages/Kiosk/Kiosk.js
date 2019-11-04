import React, { Component } from 'react'
import axios from 'axios'
import { prop, append, without, propEq, filter } from 'ramda'

import backgrImage from '../../../assets/Directory_map_art_final.jpg'

import DirectoryHeader from '../../Molecules/DirectoryHeader/DirectoryHeader'
import PromotionsBoard from '../../Molecules/PromotionsBoard/PromotionsBoard'
import InformationKey from '../../Organisms/InformationKey/InformationKey'
import ModalInformation from '../../Molecules/ModalInformation/ModalInformation'

import Shapes from '../../Shapes/Shapes'

import './Kiosk.css'

const appName = "new LHM Directory Kiosk"


export default class Kiosk extends Component {

  constructor(props) {
    super(props)

    this.state = {
      openInfoModal: false,
      isaacData: undefined,
      isaacPromoImages: undefined,
      poiPhotosArray: undefined,
      headerImage: undefined,
      idToShow: '',
      lunchMenuUrl: undefined,
      dinnerMenuUrl: undefined,
      callIsaac: false,
    }
  }

  

  componentDidMount() {

    // clear local Storage on app launch
    localStorage.setItem('isaacPromoImages', [] )

    this.timerID = setInterval(
      () => this.tickTock(),
      60000 * 15                     // Timer set to get new Promotional image(s) every 15 minutes
    )
    

    axios.get(process.env.REACT_APP_ISAAC_URL)
      .then((resp) => {
        // ISAAC returns a number of objects, so it is necessary to use appName to pull correct data object
        let appData = filter(propEq('displayName', appName), resp.data[0].values)

        // ISAAC returns TWO nearly identical data objects for appName; if scheduled out farther than today which will almost always be the case.
        this.setState({ isaacData: JSON.parse(appData[0].command) })

      })
      .catch((err) => {
        console.log('Isaac error says => ', err)
      })
  }

  componentDidUpdate(prevProps, prevState) {

    // Calls for update to Promotion Images if ISAAC data exists, but there are no Promotion Images in state
    if (this.state.isaacData && !this.state.isaacPromoImages ) {

      // convert ISAAC Promotions data from object to array
      const isaacImagesArray = this.state.isaacData ?  Object.keys(this.state.isaacData.data.unionStation.promotionPhotos).map(i => this.state.isaacData.data.unionStation.promotionPhotos[i]) : undefined

      this.getPromoImages(isaacImagesArray)
    }


    // Calls Isaac to check if changes to Promotion Images
    if (this.state.callIsaac) {

      axios.get(process.env.REACT_APP_ISAAC_URL)
      .then((resp) => {
        // ISAAC returns a number of objects, so it is necessary to use appName to pull correct data object
        let appData = filter(propEq('displayName', appName), resp.data[0].values)

        // ISAAC returns TWO nearly identical data objects for appName; if scheduled out farther than today which will almost always be the case.
        this.setState({ isaacData: JSON.parse(appData[0].command), callIsaac: false })

      })
      .catch((err) => {
        console.log('Isaac error says => ', err)
      })
    }

    // If curr State for unionStation !== prevState
    if (prevState.isaacData && this.state.isaacData && prevState.isaacData.data.unionStation !== this.state.isaacData.data.unionStation) {

      // convert ISAAC Promotions data from object to array
      const isaacImagesArray = this.state.isaacData ?  Object.keys(this.state.isaacData.data.unionStation.promotionPhotos).map(i => this.state.isaacData.data.unionStation.promotionPhotos[i]) : undefined

      // clear local Storage before reload
      localStorage.setItem('isaacPromoImages', [] )

      this.getPromoImages(isaacImagesArray)
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }


  tickTock = () => {
    // Time to call ISAAC and see if data has changed
    this.setState({ callIsaac: true })
  }


  getPromoImages = (images) => {
    let counter = 0
    let newImageArray = []

    // clean images object in case of bad data like {}, because you know... ISAAC
    let cleanImages = without([{}], images)

    // If only one image, then need to skip the .map in the else if section
    if (cleanImages.length === 1) {
      axios.get(`${cleanImages.pop().promotionPhoto.self}`)
      .then((resp) => {

        newImageArray = append([resp.data._links.get], newImageArray)

          // set Promotion Images to local Storage so Modal does not interrupt the Slidesho onOpen()
          localStorage.setItem('isaacPromoImages', JSON.stringify(newImageArray) )

          this.setState({ isaacPromoImages: newImageArray })
      })
      .catch((err) => {
        console.log('Isaac error says => ', err)
      })

    } else if (cleanImages.length > 1) {
      cleanImages.map(image => {

        axios.get(`${image.promotionPhoto.self}`)
        .then((resp) => {
  
          newImageArray = append([resp.data._links.get], newImageArray)
          counter = counter + 1
  
          if (counter === cleanImages.length) {
            
            // set Promotion Images to local Storage so Modal does not interrupt the Slidesho onOpen()
            localStorage.setItem('isaacPromoImages', JSON.stringify(newImageArray) )

            this.setState({ isaacPromoImages: newImageArray })
          }
        })
        .catch((err) => {
          console.log('Isaac error says => ', err)
        })
        return newImageArray
      })
    }
  }


  onOpenModal = id => {

    axios.get(process.env.REACT_APP_ISAAC_URL)
    .then((resp) => {
      this.setState({ openInfoModal: !this.state.openInfoModal, idToShow: id })
    })
    .then((data) => {

      // have to make a separate call to get the header Image
      const headerImageObj = prop(id, this.state.isaacData.data)
        ? prop(id, this.state.isaacData.data).headerImage
        : undefined

      const headerImageURL = headerImageObj ? headerImageObj[0].headerPhoto.self : undefined

      if (headerImageURL) {
        axios.get(headerImageURL)
        .then((resp) => {        
          this.setState({ headerImage: [resp.data] })
        })
        .catch((err) => { console.log('Isaac error says => ', err) })
      }

      // If lunch menu exists for selected POI, call ISAAC to get secure url
      let lunchMenuUrl = prop(this.state.idToShow, this.state.isaacData.data) && prop(this.state.idToShow, this.state.isaacData.data).lunchMenu 
        ? prop(this.state.idToShow, this.state.isaacData.data).lunchMenu[0].lunchMenu.self : undefined

      if (lunchMenuUrl) {
        axios.get(lunchMenuUrl)
        .then((resp) => {        
          this.setState({ lunchMenuUrl: resp.data._links.get })
        })
        .catch((err) => { console.log('Isaac error says => ', err) })
      }

      // If dinner menu exists for selected POI, call ISAAC to get secure url
      let dinnerMenuUrl = prop(this.state.idToShow, this.state.isaacData.data) && prop(this.state.idToShow, this.state.isaacData.data).dinnerMenu 
        ? prop(this.state.idToShow, this.state.isaacData.data).dinnerMenu[0].dinnerMenu.self : undefined

      if (dinnerMenuUrl) {
        axios.get(dinnerMenuUrl)
        .then((resp) => {        
          this.setState({ dinnerMenuUrl: resp.data._links.get })
        })
        .catch((err) => { console.log('Isaac error says => ', err) })
      }
    })


    // Do Photos exist for POI selected?
    const poiPhotos = prop(id, this.state.isaacData.data)
    ? prop(id, this.state.isaacData.data).tabPhotos
    : undefined

    let counter = 0
    let newImageArray = []

    // clean images object in case of bad data like {}, because you know... ISAAC
    let cleanImages = poiPhotos ? without([{}], poiPhotos) : ''
    
    // If only one photo exists, use top section to avoid map function in bottom if else
    if (cleanImages && cleanImages.length === 1) {
      axios.get(`${cleanImages.pop().photos.self}`)
      .then((resp) => {
        newImageArray = append([resp.data._links.get], newImageArray)
        this.setState({ poiPhotosArray: newImageArray })
      })
      .catch((err) => { console.log('Isaac error says => ', err) })

    } if (cleanImages && cleanImages.length > 1) {
      cleanImages.map(image => {

        axios.get(`${image.photos.self}`)
        .then((resp) => {
  
          newImageArray = append([resp.data._links.get], newImageArray)
          counter = counter + 1
  
          if (counter === cleanImages.length) {
            this.setState({ poiPhotosArray: newImageArray })
          }
        })
        .catch((err) => { console.log('Isaac error says => ', err) })
        return newImageArray
      })
    }
  }

  
  onClose = () => {

    this.setState({ openInfoModal: false, poiPhotosArray: undefined })

    // convert ISAAC Promotions data from object to array
    const isaacImagesArray = this.state.isaacData ?  Object.keys(this.state.isaacData.data.unionStation.promotionPhotos).map(i => this.state.isaacData.data.unionStation.promotionPhotos[i]) : undefined

    this.getPromoImages(isaacImagesArray)
  }


  render() {
    const { openInfoModal, isaacData, isaacPromoImages, headerImage, idToShow, poiPhotosArray, lunchMenuUrl, dinnerMenuUrl } = this.state

    const width = window.innerWidth
    const height = window.innerHeight

    const selectedPOI = isaacData ? prop(idToShow, isaacData.data) : undefined
    const headerTitle = selectedPOI ? selectedPOI.poiHeader[0].headerTitle : undefined
    const headerSubTitle = selectedPOI ? selectedPOI.poiHeader[0].headerSubTitle : undefined


    return (
      <div className='container' >
        <img src={backgrImage} className="bgImg" alt='train station' />

        <div className="directory-header" >
          <DirectoryHeader />
        </div>

        <div className="promotions-board" >
          <PromotionsBoard promotions={isaacPromoImages ? isaacPromoImages : undefined}  // Please check README for why we are no longer user promotions as a prop in PromotionsBoard
                           isaacData={isaacData ? isaacData : undefined} />
        </div>

        <div className="information-key" >
          <InformationKey onClick={this.onOpenModal} />
        </div>

        <ModalInformation openInfoModal={openInfoModal}
                          selectedPOI={selectedPOI ? selectedPOI : {}} 
                          lunchMenu={lunchMenuUrl ? lunchMenuUrl : undefined}
                          dinnerMenuUrl={dinnerMenuUrl ? dinnerMenuUrl : undefined}
                          poiPhotosArray={poiPhotosArray ? poiPhotosArray : undefined}
                          name={selectedPOI ? headerTitle : ''}
                          subText={selectedPOI ? headerSubTitle : ''}
                          src={headerImage ? headerImage[0]._links.get : ''}
                          onClose={this.onClose} />

        <Shapes width={width} height={height}
                onClick={this.onOpenModal} 
                onClose={this.onClose} />
      </div>
    )
  }
}
