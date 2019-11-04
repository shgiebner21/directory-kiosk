import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Carousel } from 'react-responsive-carousel'
import moment from 'moment'
import { filter, map } from 'ramda'

import IconInformationLabel from '../../Molecules/IconInformationLabel/IconInformationLabel'
import Loader from '../../Atoms/Loader/Loader'

import './PromotionsBoard.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"


export default class PromotionsBoard extends Component {
  static propTypes = {
    /** Isaac data */
    isaacData: PropTypes.object,
  }
  static defaultProps = {
    isaacData: undefined
  }

  constructor(props) {
    super(props)

    this.state = {
      todayDate: new Date(), 
    }
  }


  componentDidMount() {
    this.timerID = setInterval(
      () => this.tickTock(),
      60000 * 60 * 12            // Timer set to update current Date every 12 hours
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tickTock = () => {
    this.setState({ todayDate: new Date() })
  }

  

  render() {
    const { isaacData } = this.props
    const { todayDate } = this.state

    const localPromoImages = localStorage.getItem('isaacPromoImages') ? JSON.parse(localStorage.getItem('isaacPromoImages')) : undefined

    // if statement allows for undefined upcomingEvents; edge case, but best to have it.
    // converts upcomingEvents object to array of events & filters out any events that do not have a start date
    let isaacEventsArray = []
    if (isaacData && isaacData.data.unionStation.upcomingEvents) {
      isaacEventsArray = filter(e => e.upcomingEventStartDate, Object.keys(isaacData.data.unionStation.upcomingEvents).map(i => isaacData.data.unionStation.upcomingEvents[i]))
    } 

    // sort upcomeing events by date and filter out any events that are in the past or do not have valid start dates
    const sortedDatesArray = isaacEventsArray ? isaacEventsArray.sort((a,b) => moment(a.upcomingEventEndDate, 'MM/DD/YYYY hh:mm A') - moment(b.upcomingEventEndDate, 'MM/DD/YYYY hh:mm A')) : undefined
    const currentEvents = sortedDatesArray ? filter(date => moment(date.upcomingEventEndDate, 'MM/DD/YYYY hh:mm A').isAfter(todayDate - (60000 * 60 * 18)), sortedDatesArray) : undefined      // If an event expires today, still want to show in upcoming Events


    // Will return only the first Eight events, return more and the two boxes will overlap.  Don't think a scroll box would work well or be needed.
    const makeUpcomingEvents = events => {
      return (
        events.slice(0, 8).map(event => <IconInformationLabel label={event.eventTitle} startTime={event.upcomingEventStartDate}
                                                              endTime={event.upcomingEventEndDate} key={event.eventTitle} /> )
      )
    }

    // Sets size of Promotions board based on status of Upcoming Events
    let upcomingEvents =  isaacData && isaacData.data.unionStation && isaacData.data.unionStation.upcomingEvents ? isaacData.data.unionStation.upcomingEvents.length : 0
    const boardSize = upcomingEvents > 0 ? 'largeContainer' : 'smallContainer'


    return (
      
      <div className={`${boardSize}`} >
        <h2 className="section-header-text" >PROMOTIONS</h2>

        <div className="slide-container" style={{ marginTop: '10px' }} >

          {/* Slide requires at least two images or it will throw an error */}
         {/*  No promotion images shows a Loader */}
          {localPromoImages && localPromoImages.length < 1 &&

          
            <div className="each-slide">
              <Loader style={{ width: '900px', height: '600px', marginLeft: '25px' }} 
                      show={true} label="Loading, please wait..." />
            </div>
          }

          {/*  Only one promotion image */}
          {localPromoImages && localPromoImages.length === 1 &&
            <div className="each-slide">
              <img src={localPromoImages[0]} style={{ width: '900px', height: '600px', marginLeft: '25px' }} alt={localPromoImages[0].displayName} />
            </div>
          }

          {/*  More than one promotion image */}
          {localPromoImages && localPromoImages.length > 1 &&
            
            <div className="each-slide">
              <Carousel autoPlay infiniteLoop interval={5000} transitionTime={750} width="925px" showArrows={false} showThumbs={false} showStatus={false} >
                {map(image => <img src={image.pop() } alt={image.displayName} key={image} style={{ width: '900px', height: '600px' }} />,  localPromoImages)} 
              </Carousel>
            </div>
          } 
        </div>


        {isaacEventsArray && isaacEventsArray.length > 0  &&
          <React.Fragment>
            <h2 className="section-header-text" style={{ paddingTop: '20px' }} >UPCOMING EVENTS</h2>

              <div style={{ marginTop: '10px', marginLeft: '25px', marginRight: '100px' }} >
                {makeUpcomingEvents(currentEvents)}
              </div>

          </React.Fragment>
         }

      </div>
    )
  }
}
