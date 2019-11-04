import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import centered from '@storybook/addon-centered'
import { withKnobs, select, text } from '@storybook/addon-knobs'

import CloseButton from './CloseButton'

const stories = storiesOf('Atoms', module)
stories.addDecorator(withKnobs)

stories.addDecorator(centered).add('CloseButton', 
withInfo()(() => {
  const sizeLabel = 'Size'
  const options = {
    mini: 'mini',
    tiny: 'tiny',
    small: 'small',
    medium: 'medium',
    large: 'large',
    big: 'big',
    huge: 'huge',
    massive: 'massive',
  }
  const defaultValue = 'medium'
  const value = select(sizeLabel, options, defaultValue)

  const textLabel = 'Content'
  const textDefaultValue = 'Close Me'
  const textValue = text(textLabel, textDefaultValue)

  return (
    <CloseButton
      size={value}
      content={textValue}
      onClick={() => {
        alert("Agggggghhh, I'm melting!")
      }}
    />
  )
})
)
