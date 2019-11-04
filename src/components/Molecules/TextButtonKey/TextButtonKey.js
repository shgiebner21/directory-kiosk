import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './TextButtonKey.css'

export default class TextButtonKey extends Component {
  static propTypes = {
    /** Text label for the button */
    label: PropTypes.string.isRequired,
    /** If loading then true */
    loading: PropTypes.bool,
    /** If disabled then true */
    disabled: PropTypes.bool,
    /** Color of box next to text */
    color: PropTypes.oneOf([
      '#2eb24a',  // green
      '#cef3ff',  // light blue
      '#ffc893',  // light orange
      '#fff3b2',  // light yellow
      '#ffb8b8',  // light pink
      '#adcaff',  // water
    ]),
    /** Function called when the button is clicked */
    onClick: PropTypes.func,
  }
  static defaultProps = {
    loading: false,
    disabled: false,
  }


  render() {
    const { onClick, label, loading, disabled, color, ...rest } = this.props

    const loadingIndicator = loading ? 'textbutton-loading' : ''
    

    return (

        <div className="text-button-container" >
          <div className="demobox" style={{ backgroundColor: color }} ></div>
          <div className="textbutton-wrap">
            <button
              type="button"
              size="small"
              style={{ fontSize: '20px' }}
              className={`textbutton ${loadingIndicator}`}
              onClick={onClick}
              disabled={disabled}
              {...rest}>
              {label}
            </button>
          </div>
        </div>
        
    )
  }
}
