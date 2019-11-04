import React from 'react'

import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered'
import { withKnobs, text } from '@storybook/addon-knobs'

import InformationKey from './InformationKey'

const stories = storiesOf('Organisms', module)
stories.addDecorator(withKnobs)

stories.addDecorator(centered).add('InformationKey', () => {
  const nameLabel = 'name'
  const nameDefaultValue = 'KEY'
  const nameValue = text(nameLabel, nameDefaultValue)


  return (
        <InformationKey name={nameValue} />
  )
})
