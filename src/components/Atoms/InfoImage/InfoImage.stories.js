import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import centered from '@storybook/addon-centered'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'

import InfoImage from './InfoImage'

const stories = storiesOf('Atoms', module)
stories.addDecorator(withKnobs)

stories.addDecorator(centered).add(
  'InfoImage',
  withInfo()(() => {
    const sizeLabel = 'Size'
    const options = {
      small: 'small',
      medium: 'medium',
      large: 'large',
      big: 'big',
      huge: 'huge',
      massive: 'massive',
    }
    const defaultValue = 'medium'
    const value = select(sizeLabel, options, defaultValue)

    const textLabel = 'Name'
    const textDefaultValue = 'Korben Dallas'
    const textValue = text(textLabel, textDefaultValue)

    const dimmedLabel = 'dimmed'
    const dimmedDefaultValue = false
    const dimmedValue = boolean(dimmedLabel, dimmedDefaultValue)

    const picLabel = 'Show picture'
    const picDefaultValue = true
    const picValue = boolean(picLabel, picDefaultValue)

    const picSource = picValue
      ? 'https://tinyfac.es/data/avatars/852EC6E1-347C-4187-9D42-DF264CCF17BF-200w.jpeg'
      : ''

    return (
      <InfoImage
        name={textValue}
        size={value}
        src={picSource}
        dimmed={dimmedValue}
      />
    )
  })
)
