import React from 'react'
import IconLabel from './IconLabel'

describe('IconLabel', () => {

  it('matches the snapshot', () => {
    const wrapper = window.shallow(
      <IconLabel label="label" />
    )
    expect(wrapper).toMatchSnapshot()
  })

})
