import React from 'react'
import IconInformationLabel from './IconInformationLabel'

describe('IconInformationLabel', () => {

  it('matches the snapshot', () => {
    const wrapper = window.shallow(
      <IconInformationLabel label="label" subLabel="what time is it?" />
    )
    expect(wrapper).toMatchSnapshot()
  })

})
