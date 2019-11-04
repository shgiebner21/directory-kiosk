import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, select } from '@storybook/addon-knobs'
import centered from '@storybook/addon-centered'

import TabPanel from './TabPanel'

const stories = storiesOf('Molecules', module)
stories.addDecorator(withKnobs)

stories.addDecorator(centered).add('TabPanel', () => {
  const tabs = [
    { id: '1', label: 'Fantastic Four' },
    { id: '2', label: 'X-Men' },
    { id: '3', label: 'Justice League of America' },
  ]

  const displayLab = 'display'
  const displayOpts = {
    overview: 'Overview',
    menu: 'Menue',
    photos: 'Photos'
  }
  const displayDef = 'Overview'
  const displayVal = select(displayLab, displayOpts, displayDef)

  return (
    <div style={{ width: 600, backgroundColor: 'aquamarine' }}>
      <TabPanel
        tabs={tabs}
        display={displayVal}
      />
    </div>
  )
})
