import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'

import ModalInformation from './ModalInformation'

const stories = storiesOf('Molecules', module)
stories.addDecorator(withKnobs)

stories.add('ModalInformation', () => {
  const textLabel = 'Profile Pic'
  const textDefaultValue = "Landrys"
  const textValue = text(textLabel, textDefaultValue)

  const hintLabel = 'hint'
  const hintDefault =
    'Seafood restaurant'
  const hint = text(hintLabel, hintDefault)

  const picSource = 'https://tinyfac.es/data/avatars/852EC6E1-347C-4187-9D42-DF264CCF17BF-200w.jpeg'

  return (
    <ModalInformation
      name={textValue}
      subText={hint}
      src={picSource}
      onClose={() => {
        alert("Ok Scobby, I'll get some more")
      }}
    />
  )
})
