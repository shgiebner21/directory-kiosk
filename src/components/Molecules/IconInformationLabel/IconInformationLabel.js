import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Calendar from '../../../assets/icons/calendar-week.png'

import './IconInformationLabel.css'

export default class IconInformationLabel extends Component {
  static propTypes = {
    /** Text Name for the event */
    label: PropTypes.string.isRequired,
    /** Start time of event */
    startTime: PropTypes.string.isRequired,
    /** End time of event */
    endTime: PropTypes.string.isRequired,
  }


  render() {
    const { label, startTime, endTime } = this.props

    return (

      <div className="icon-information-container" >
        <img src={Calendar} style={{ marginRight: '5px' }} alt='calendar' />

        <div className="icon-information-text-container" >
          <h2 className="event-name-text" style={{ margin: '0px' }} >{label}</h2>
          <span className="event-separator-text" >: </span>
          <h3 className="event-date-text" style={{ fontWeight: 'normal', margin: '0px' }} >{startTime}</h3>
          <span className="event-separator-text" > - </span>
          <h3 className="event-date-text" style={{ fontWeight: 'normal', margin: '0px' }} >{endTime}</h3>
        </div>

      </div>
        
    )
  }
}
