import React from 'react'

import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered'
import { withKnobs, text } from '@storybook/addon-knobs'

import Calendar from '../../../assets/icons/calendar-week.png'

import IconInformationLabel from './IconInformationLabel'

const stories = storiesOf('Molecules', module)
stories.addDecorator(withKnobs)

stories.addDecorator(centered).add(
  'IconInformationLabel', () => {


  const textLabel = 'text'
  const textDefault = 'Hootie and the Blowfish'
  const textValue = text(textLabel, textDefault)

  const textSubLabel = 'subText'
  const textSubLabelDefault = 'September 10th, 7:30pm'
  const textSubLabelValue = text(textSubLabel, textSubLabelDefault)


  return (
    <IconInformationLabel
      label={textValue}
      subLabel={textSubLabelValue}
      icon={Calendar}
    />
    )
  })
