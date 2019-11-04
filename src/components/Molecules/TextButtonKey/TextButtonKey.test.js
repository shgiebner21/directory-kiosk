import React from 'react'
import TextButtonKey from './TextButtonKey'

describe('TextButtonKey', () => {
  const mockFun = jest.fn()

  it('matches the snapshot', () => {
    const wrapper = window.shallow(
      <TextButtonKey onClick={mockFun} label="label" />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('Uses the passed onClick function', () => {
    const wrapper = window.shallow(
      <TextButtonKey onClick={mockFun} label="label" />
    )
    wrapper.find('button').simulate('click')
    expect(mockFun).toHaveBeenCalled()
  })
})
