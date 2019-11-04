import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'semantic-ui-react'

export default class CloseButton extends Component {
  static propTypes = {
    /** Display a popup with the provided message */
    size: PropTypes.string,
    /** Content to display in button */
    content: PropTypes.string,
    /** Function called when the button is clicked */
    onClick: PropTypes.func,
  }
  static defaultProps = {
    size: 'small',
    content: 'Close'
  }

  render() {
    const { size, content, onClick, ...rest } = this.props

      return (
        <Button
          color="red"
          content={content}
          inverted
          icon="delete"
          size={size}
          onClick={onClick}
          data-testid="close-button"
          {...rest}
        />
      )

  }
}
