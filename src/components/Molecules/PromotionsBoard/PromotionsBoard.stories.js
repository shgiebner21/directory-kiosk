import React from 'react'

import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered'
import { withKnobs, text } from '@storybook/addon-knobs'

import PromotionsBoard from './PromotionsBoard'

const stories = storiesOf('Molecules', module)
stories.addDecorator(withKnobs)

stories.addDecorator(centered).add('PromotionsBoard', () => {
  const nameLabel = 'name'
  const nameDefaultValue = 'KEY'
  const nameValue = text(nameLabel, nameDefaultValue)

  const textSubLabel = 'subText'
  const textSubLabelDefault = 'September 10th, 7:30pm'
  const textSubLabelValue = text(textSubLabel, textSubLabelDefault)

  const picSource = 'https://tinyfac.es/data/avatars/852EC6E1-347C-4187-9D42-DF264CCF17BF-200w.jpeg'

  return (
        <PromotionsBoard name={nameValue} subLabel={textSubLabelValue}
            src={picSource} />
  )
})
