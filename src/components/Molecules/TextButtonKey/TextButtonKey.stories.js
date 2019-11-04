import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import centered from '@storybook/addon-centered'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'

import TextButtonKey from './TextButtonKey'

const stories = storiesOf('Molecules', module)
stories.addDecorator(withKnobs)

stories.addDecorator(centered).add(
  'TextButtonKey',
  withInfo()(() => {

    const sizeLabel = 'Color'
    const options = {
      lightGreen: '#cfc',
      lightBlue: '#6e7dda',
      Orange: '#ff6f61',
      lightYellow: '#e3f57a',
      pink: '#f8a3e6',
      blue: 'blue',
    }
    const defaultValue = '#cfc'
    const color = select(sizeLabel, options, defaultValue)


  const textLabel = 'text'
  const textDefault = 'Soda Fountain'
  const textValue = text(textLabel, textDefault)

  const loadingLabel = 'loading'
  const loadingDefaultValue = false
  const loadingValue = boolean(loadingLabel, loadingDefaultValue)

  const disabledLabel = 'disabled'
  const disabledDefaultValue = false
  const disabledValue = boolean(disabledLabel, disabledDefaultValue)

  return (
    <TextButtonKey
      label={textValue}
      color={color}
      loading={loadingValue}
      disabled={disabledValue}
      onClick={() => {
        alert('Button clicked')
      }}
    />
  )
})
)
