import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TextButtonKey from '../../Molecules/TextButtonKey/TextButtonKey'
import IconLabel from '../../Molecules/IconLabel/IconLabel'

import Bathroom from '../../../assets/icons/Restroom.png'
import Info from '../../../assets/icons/Info.png'
import ATM from '../../../assets/icons/ATM.png'
import Stairs from '../../../assets/icons/Stairs.png'
import Elevator from '../../../assets/icons/Elevators.png'
import Escalator from '../../../assets/icons/Escalators.png'

import './InformationKey.css'

export default class InformationKey extends Component {
  static propTypes = {
    /** Called when a menu item is selected */
    onClick: PropTypes.func,
  }
  static defaultProps = {
    onClick: () => {}
  }

  onIdClick(id) {
    this.props.onClick(id)
  }


  render() {
    return (
      <div className="information-key-container" >
          <h2 className="key-text" style={{ fontWeight: 'bold', textAlign: 'left', marginLeft: '5px' }} >KEY</h2>

        <div className="information-key-flex-container" >
          <div className="information-key-column-container" style={{ marginTop: '20px' }} >
            <TextButtonKey label="INSIDE FUN" color="#cef3ff" disabled={true} className="header-text" style={{ fontSize: '24px' }} />
            <TextButtonKey label="Aquarium" color="#cef3ff" className="clickable-text" onClick={() => { this.onIdClick('aquarium') }}  />
            <TextButtonKey label="SLAUS Foundation" color="#cef3ff" className="clickable-text" onClick={() => { this.onIdClick('aquariumFoundation') }} />
            <TextButtonKey label="Mirror Maze" color="#cef3ff" className="clickable-text" onClick={() => { this.onIdClick('mirrorMaze') }}  />
            <TextButtonKey label="Ropes Course" color="#cef3ff" className="clickable-text" onClick={() => { this.onIdClick('ropesCourse') }}  />

            <div style={{ marginTop: '25px' }} > 
            <TextButtonKey label="FOOD" color="#ffc893" disabled={true} className="header-text" style={{ fontSize: '24px'  }} />
            <TextButtonKey label="1894 Cafe" color="#ffc893" className="clickable-text" onClick={() => { this.onIdClick('cafe') }} />
            {/* <TextButtonKey label="Fudgery" color="#ffc893" className="clickable-text" onClick={() => { this.onIdClick('fudgery') }} /> */}
            <TextButtonKey label="Landry's" color="#ffc893" className="clickable-text" onClick={() => { this.onIdClick('landrys') }}  />
            <TextButtonKey label="Soda Fountain" color="#ffc893" className="clickable-text" onClick={() => { this.onIdClick('sodaFountain') }} />
            <TextButtonKey label="Train Shed Restaurant" color="#ffc893" className="clickable-text" onClick={() => { this.onIdClick('trainShed') }} />
            <TextButtonKey label="Train Park Bar" color="#ffc893" className="clickable-text" onClick={() => { this.onIdClick('trainParkBar') }} />
            </div>

            <div style={{ marginTop: '25px' }} >
            <TextButtonKey label="STATION" color="#fff3b2" disabled={true} className="header-text" style={{ fontSize: '24px'  }} />
            <TextButtonKey label="Hotel" color="#fff3b2" className="clickable-text" onClick={() => { this.onIdClick('hotel') }} />
            </div>
          </div>

          <div className="information-key-column-container" style={{ marginTop: '20px' }} >
            <TextButtonKey label="OUTSIDE FUN" color="#ffb8b8" disabled={true} className="header-text" style={{ fontSize: '24px'  }} />
            <TextButtonKey label="Carousel" color="#ffb8b8" className="clickable-text" onClick={() => { this.onIdClick('carousel') }}  />
            <TextButtonKey label="Fire and Light Show" color="#ffb8b8" className="clickable-text" onClick={() => { this.onIdClick('lightShow') }} />
            <TextButtonKey label="Mini Golf" color="#ffb8b8" className="clickable-text" onClick={() => { this.onIdClick('miniGolf') }}  />
            <TextButtonKey label="Playground" color="#ffb8b8" className="clickable-text" onClick={() => { this.onIdClick('playground') }} />
            <TextButtonKey label="The St. Louis Wheel" color="#ffb8b8" className="clickable-text" onClick={() => { this.onIdClick('ferrisWheel') }} />

            <div style={{ marginTop: '25px' }} >
            <TextButtonKey label="GREEN SPACE" color="#2eb24a" disabled={true} className="header-text" style={{ fontSize: '24px'  }} />
            <TextButtonKey label="Donor Plaza" color="#2eb24a" className="clickable-text" onClick={() => { this.onIdClick('donorPlaza') }} />
            <TextButtonKey label="River Park" color="#2eb24a" className="clickable-text" />                                                              {/* onClick={() => { this.onIdClick('riverPark') }} */}
            <TextButtonKey label="Train Park" color="#2eb24a" className="clickable-text" />                                                              {/* onClick={() => { this.onIdClick('riverPark') }} */}
            <TextButtonKey label="Train Yard" color="#2eb24a" className="clickable-text" />                                                              {/* onClick={() => { this.onIdClick('riverPark') }} */}
            </div>

            {/* <div style={{ marginTop: '25px' }} >     May put this back later or we may not.
            <TextButtonKey label="WATER" color="#484f82" disabled={true} className="header-text" style={{ fontSize: '24px' }} />
            </div> */}
          </div>
        </div>

        <div className="icon-container" >
          <div className="icon-column-container" >
            <IconLabel label="Restrooms" className="flex-icons" icon={Bathroom} />
            <IconLabel label="ATM" className="flex-icons" icon={ATM} />
            <IconLabel label="Information" icon={Info} />
          </div>

          <div className="icon-column-container" >
            <IconLabel label="Stairs" icon={Stairs} />
            <IconLabel label="Escalator" icon={Escalator} />
            <IconLabel label="Elevator" icon={Elevator} />
          </div>
        </div>

      </div>
    )
  }
}
