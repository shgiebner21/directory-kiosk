import React from 'react'
import InfoImageHeader from './InfoImageHeader'

describe('InfoImageHeader', () => {

  const subText = 'Upload a cool picture'
  const name = 'profilePic'
  const src =
    'https://tinyfac.es/data/avatars/852EC6E1-347C-4187-9D42-DF264CCF17BF-200w.jpeg'

  const mockFn = jest.fn()

  it('matches the snapshot', () => {
    const wrapper = window.shallow(
      <InfoImageHeader
        subText={subText}
        name={name}
        src={src}
        onClick={mockFn}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders with an image', () => {
    const wrapper = shallow(
      <InfoImageHeader
        subText={subText}
        name={name}
        src={src}
        onClick={mockFn}
      />
    )
    expect(wrapper.find('img')).toBeTruthy()
  })


  it('works with a blank name', () => {
    window.shallow(<InfoImageHeader name="" onClick={mockFn} />)
  })
})
