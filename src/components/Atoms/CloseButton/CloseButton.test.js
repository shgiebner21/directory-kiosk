import React from 'react'

import CloseButton from './CloseButton'

describe('CloseButton', () => {
  const buttonLabel = 'Click me'
  const mockFun = jest.fn()

  it('CloseButton matches the snapshot', () => {
    const wrapper = window.shallow(<CloseButton onClick={mockFun} />)
    expect(wrapper).toMatchSnapshot()
  })


  it('Uses the passed onClick function', () => {
    const wrapper = window.shallow(<CloseButton onClick={mockFun} />)
    wrapper.simulate('click')
    expect(mockFun).toHaveBeenCalled()
  })
})
