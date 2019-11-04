import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import centered from '@storybook/addon-centered'
import { withKnobs, text, select } from '@storybook/addon-knobs'

import Bathroom from '../../../assets/icons/wc_black_24x24.png'
import Info from '../../../assets/icons/info_black_24x24.png'
import ATM from '../../../assets/icons/attach_money_black_24x24.png'
import Stairs from '../../../assets/icons/stairs.png'
import Elevator from '../../../assets/icons/elevator.png'
import Escalator from '../../../assets/icons/escalator.png'

import IconLabel from './IconLabel'

const stories = storiesOf('Molecules', module)
stories.addDecorator(withKnobs)

stories.addDecorator(centered).add(
  'IconLabel',
  withInfo()(() => {

    const iconLabel = 'Icon to Show'
    const options = {
      Bathroom: Bathroom,
      Info: Info,
      ATM: ATM,
      Stairs: Stairs,
      Elevator: Elevator,
      Escalator: Escalator,
    }
    const defaultValue = Stairs
    const value = select(iconLabel, options, defaultValue)

  const textLabel = 'text'
  const textDefault = 'Information'
  const textValue = text(textLabel, textDefault)


  return (
    <IconLabel
      label={textValue}
      icon={value}
    />
    )
  })
)
