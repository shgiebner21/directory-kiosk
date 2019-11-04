import React from 'react'
import ModalInformation from './ModalInformation'

describe('ModalInformation', () => {
  const mockFun = jest.fn()

  it('matches the snapshot', () => {
    const wrapper = window.shallow(
      <ModalInformation name="Landry's" subText="Seefood Eatfood" onClose={mockFun} />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
