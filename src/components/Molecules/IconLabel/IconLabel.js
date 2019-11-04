import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Bathroom from '../../../assets/icons/Restroom.png'
import Info from '../../../assets/icons/Info.png'
import ATM from '../../../assets/icons/ATM.png'
import Stairs from '../../../assets/icons/Stairs.png'
import Elevator from '../../../assets/icons/Elevators.png'
import Escalator from '../../../assets/icons/Escalators.png'

import './IconLabel.css'

export default class IconLabel extends Component {
  static propTypes = {
    /** Text label for the button */
    label: PropTypes.string.isRequired,
    /** Icon to display next to text */
    icon: PropTypes.oneOf([
      Bathroom,
      Info,
      ATM,
      Stairs,
      Elevator,
      Escalator,
    ]),
  }
  static defaultProps = {
    icon: Stairs
  }


  render() {
    const { label, icon } = this.props

    return (

        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }} >
          <img src={icon} alt="icon" height='24px' style={{ marginRight: '5px'}} />
          <div style={{ textAlign: 'center' }} >
          <h3>{label}</h3>
          </div>
        </div>
        
    )
  }
}
