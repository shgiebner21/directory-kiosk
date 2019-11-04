import React, { Component } from 'react'

import './DirectoryHeader.css'


export default class DirectoryHeader extends Component {
  render() {

    return (
      <div className="header-container" >
        <div className="directory-name" >
          <h1 className="directory-text" >DIRECTORY</h1>
        </div>

        <div className="directory-separator" ></div>

        <div className="directory-logo" >
          <img src={require('../../../assets/UnionStation_logo-01.png')} style={{ width: '500px', height: 'inherit' }} alt='union-station' />
        </div>
      </div>
    )
  }
} 