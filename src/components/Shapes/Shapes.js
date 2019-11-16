import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Nr17 from '../../assets/icons/Nr17.png'


export default class Shapes extends Component{
  static propTypes = {
    /** Width of the screen */
    width: PropTypes.number.isRequired,
    /** Height of the screen */
    height: PropTypes.number.isRequired,
    /** Called when the open Modal button or shape is clicked */
    onClick: PropTypes.func,
    /** Called when the modal Close button is clicked */
    onClose: PropTypes.func,
  }
  static defaultProps = {
    onClick: () => {},
    onClose: () => {}
  }

  onIdClick(id) {
    this.props.onClick(id)
  }


  render() {
    const { width, height, onClose } = this.props

    let rotationSpeed = "2.0s"
    let rotationColor =" #FFF"

    // 3840 x 2160 is screen resolution

    return (
      <svg  viewBox={`0 0 ${width} ${height}`} width="3840" height="2160" >
        <a href="#aquarium"   
           onTouchEnd={() => { this.onIdClick('aquarium') }} 
           onClose={onClose} id='aquarium' >
          <path fill="transparent" stroke="red" strokeWidth="3"
                 d="" />
        </a>

        <a href="#ropesCourse"   
           onTouchEnd={() => { this.onIdClick('ropesCourse') }} 
           onClose={onClose} id='ropesCourse' >
          <path fill="transparent" stroke="red" strokeWidth="3"
                 d="" />
        </a>

        <a href="#mirrorMaze"   
           onTouchEnd={() => { this.onIdClick('mirrorMaze') }} 
           onClose={onClose} id='mirrorMaze' >
          <path fill="transparent" stroke="red" strokeWidth="3"
                 d="" />
        </a>

        {/* This has been removed from the directory for now. */}
        {/* <a href="#fudgery"   
           onTouchEnd={() => { this.onIdClick('fudgery') }} 
           onClose={onClose} id='fudgery' >
          <path fill="transparent" stroke="red" strokeWidth="3"
                 d="" />
        </a> */}

        <a href="#trainShed"   
           onTouchEnd={() => { this.onIdClick('trainShed') }} 
           onClose={onClose} id='trainShed' >
          <path fill="transparent" stroke="red" strokeWidth="3"
                 d="" />
        </a>

        <a href="#cafe"   
           onTouchEnd={() => { this.onIdClick('cafe') }} 
           onClose={onClose} id='cafe' >
          <path fill="transparent" stroke="red" strokeWidth="3"
                 d="" />
        </a>

        <a href="#landry"   
           onTouchEnd={() => { this.onIdClick('landrys') }} 
           onClose={onClose} id='landrys' >
          <path fill="transparent" stroke="red" strokeWidth="3"
                 d=""/>
        </a>

        <a href="#miniGolf"   
           onTouchEnd={() => { this.onIdClick('miniGolf') }} 
           onClose={onClose} id='miniGolf' >

          <circle cx="900" cy="1625" r="90" fill="transparent" />
            <foreignObject x="870" y="1600" width="90" height="90" >
              <img src={Nr17} alt="nr 17" />
            </foreignObject>
            <g transform=" matrix(0.866, -0.5, 0.25, 0.433, 900, 1625)">
              <path d="M 0,70 A 65,70 0 0,0 65,0 5,5 0 0,1 75,0 75,70 0 0,1 0,70Z" fill={rotationColor} >
                <animateTransform attributeName="transform" type="rotate" from="360 0 0" to="0 0 0" dur={rotationSpeed} repeatCount="indefinite" />
              </path>
            </g>
            <path d="M 60,0 A 60,60 0 0,0 -,0Z" transform="matrix(0.866, -0.5, 0.5, 0.866, 2350, 2550)" />
        </a>

        <a href="#playground"   
           onTouchEnd={() => { this.onIdClick('playground') }} 
           onClose={onClose} id='playground' >

            <circle cx="1200" cy="1800" r="90" fill="transparent" />
              <foreignObject x="1170" y="1770" width="90" height="90" >
                <img src={Nr17} alt="nr 17" />
              </foreignObject>
              <g transform=" matrix(0.866, -0.5, 0.25, 0.433, 1200, 1800)">
                <path d="M 0,70 A 65,70 0 0,0 65,0 5,5 0 0,1 75,0 75,70 0 0,1 0,70Z" fill="lightgreen" >
                  <animateTransform attributeName="transform" type="rotate" from="360 0 0" to="0 0 0" dur={rotationSpeed} repeatCount="indefinite" />
                </path>
              </g>
              <path d="M 60,0 A 60,60 0 0,0 -,0Z" transform="matrix(0.866, -0.5, 0.5, 0.866, 2350, 2550)" />
        </a>

        <a href="#carousel" onTouchEnd={() => { this.onIdClick('carousel') }}  
        onClose={onClose} id='carousel' >
          <circle cx="1000" cy="1750" r="90" fill="transparent" />
            <foreignObject x="970" y="1720" width="90" height="90" >
              <img src={Nr17} alt="nr 17" />
            </foreignObject>
            <g transform=" matrix(0.866, -0.5, 0.25, 0.433, 1000, 1750)">
              <path d="M 0,70 A 65,70 0 0,0 65,0 5,5 0 0,1 75,0 75,70 0 0,1 0,70Z" fill={rotationColor} >
                <animateTransform attributeName="transform" type="rotate" from="360 0 0" to="0 0 0" dur={rotationSpeed} repeatCount="indefinite" />
              </path>
            </g>
            <path d="M 60,0 A 60,60 0 0,0 -,0Z" transform="matrix(0.866, -0.5, 0.5, 0.866, 2350, 2550)" />
        </a>

        <a href="#sodaFountain"   
           onTouchEnd={() => { this.onIdClick('sodaFountain') }} 
           onClose={onClose} id='sodaFountain' >

            <circle cx="2000" cy="1875" r="90" fill="transparent" />
              <foreignObject x="1970" y="1845" width="90" height="90" >
                <img src={Nr17} alt="nr 17" />
              </foreignObject>
              <g transform=" matrix(0.866, -0.5, 0.25, 0.433, 2000, 1875)">
                <path d="M 0,70 A 65,70 0 0,0 65,0 5,5 0 0,1 75,0 75,70 0 0,1 0,70Z" fill="lightblue" >
                  <animateTransform attributeName="transform" type="rotate" from="360 0 0" to="0 0 0" dur={rotationSpeed} repeatCount="indefinite" />
                </path>
              </g>
              <path d="M 60,0 A 60,60 0 0,0 -,0Z" transform="matrix(0.866, -0.5, 0.5, 0.866, 2350, 2550)" />
        </a>

        <a href="#wheel"
           onTouchEnd={() => { this.onIdClick('ferrisWheel') }} 
           onClose={onClose} id='wheel' >

          <circle cx="425" cy="1700" r="90" fill="transparent" />
            <foreignObject x="400" y="1670" width="90" height="90" >
              <img src={Nr17} alt="nr 17" />
            </foreignObject>
            <g transform=" matrix(0.866, -0.5, 0.25, 0.433, 425, 1700)">
              <path d="M 0,70 A 65,70 0 0,0 65,0 5,5 0 0,1 75,0 75,70 0 0,1 0,70Z" fill="lightgreen" >
                <animateTransform attributeName="transform" type="rotate" from="360 0 0" to="0 0 0" dur={rotationSpeed} repeatCount="indefinite" />
              </path>
            </g>
            <path d="M 60,0 A 60,60 0 0,0 -,0Z" transform="matrix(0.866, -0.5, 0.5, 0.866, 2350, 2550)" />
        </a>

        <a href="#lightShow"
           onTouchEnd={() => { this.onIdClick('lightShow') }} 
           onClose={onClose} id='lightShow' >

          <circle cx="1400" cy="1500" r="90" fill="transparent" />
          <foreignObject x="1370" y="1470" width="90" height="90" >
            <img src={Nr17} alt="nr 17" />
          </foreignObject>
          <g transform=" matrix(0.866, -0.5, 0.25, 0.433, 1400, 1500)">
            <path d="M 0,70 A 65,70 0 0,0 65,0 5,5 0 0,1 75,0 75,70 0 0,1 0,70Z" fill={rotationColor} >
              <animateTransform attributeName="transform" type="rotate" from="360 0 0" to="0 0 0" dur={rotationSpeed} repeatCount="indefinite" />
            </path>
          </g>
          <path d="M 60,0 A 60,60 0 0,0 -,0Z" transform="matrix(0.866, -0.5, 0.5, 0.866, 2350, 2550)" />
        </a>



        <a href="#hotel"
           onTouchEnd={() => { this.onIdClick('hotel') }} 
           onClose={onClose} id='hotel' >

          <circle cx="900" cy="1150" r="90" fill="transparent" />
          <foreignObject x="870" y="1120" width="90" height="90" >
            <img src={Nr17} alt="nr 17" />
          </foreignObject>
          <g transform=" matrix(0.866, -0.5, 0.25, 0.433, 900, 1150)">
            <path d="M 0,70 A 65,70 0 0,0 65,0 5,5 0 0,1 75,0 75,70 0 0,1 0,70Z" fill={rotationColor} >
              <animateTransform attributeName="transform" type="rotate" from="360 0 0" to="0 0 0" dur={rotationSpeed} repeatCount="indefinite" />
            </path>
          </g>
          <path d="M 60,0 A 60,60 0 0,0 - 0,0Z" transform="matrix(0.866, -0.5, 0.5, 0.866, 750, 1000)" />
        </a>


        <a href="#aquariumFoundation"
           onTouchEnd={() => { this.onIdClick('aquariumFoundation') }} 
           onClose={onClose} id='aquariumFoundation' >
          <path fill="transparent" stroke="red" strokeWidth="3"
                 d=""/>
        </a>

        <a href="#donorPlaza"
           onTouchEnd={() => { this.onIdClick('donorPlaza') }} 
           onClose={onClose} id='donorPlaza' >
          <path fill="transparent" stroke="red" strokeWidth="3"
                 d=""/>
        </a>

      </svg>
    )
  }
}
