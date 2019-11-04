import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import centered from '@storybook/addon-centered'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'

import InfoImageHeader from './InfoImageHeader'

const stories = storiesOf('Molecules', module)
stories.addDecorator(withKnobs)

stories.addDecorator(centered).add(
  'InfoImageHeader',
  withInfo()(() => {
    const textLabel = 'Profile Pic'
    const textDefaultValue = "Landrys"
    const textValue = text(textLabel, textDefaultValue)

    const picLabel = 'Show picture'
    const picDefaultValue = true
    const picValue = boolean(picLabel, picDefaultValue)

    const hintLabel = 'hint'
    const hintDefault = 'Seafood restaurant'
    const hint = text(hintLabel, hintDefault)

    const picSource = picValue
      ? 'https://tinyfac.es/data/avatars/852EC6E1-347C-4187-9D42-DF264CCF17BF-200w.jpeg'
      : ''

      const sizeLabel = 'Size'
      const options = {
        small: 'small',
        medium: 'medium',
        large: 'large',
        big: 'big',
        huge: 'huge',
        massive: 'massive',
      }
      const defaultValue = 'massive'
      const value = select(sizeLabel, options, defaultValue)


    return (
      <div style={{ width: 400 }}>
        <InfoImageHeader
          subText={hint}
          size={value}
          name={textValue}
          src={picSource}
        />
      </div>
    )
  })
)
