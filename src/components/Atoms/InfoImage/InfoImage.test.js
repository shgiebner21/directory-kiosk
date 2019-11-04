import React from 'react'
import InfoImage from './InfoImage'

describe('InfoImage', () => {
  const userName = 'Korben Dallas'
  const size = 'small'
  const src = 'https://www.fillmurray.com/60/60'
  const sizes = {
    small: '24px',
    medium: '32px',
    large: '64px',
    big: '96px',
    huge: '128px',
    massive: '160px',
  }

  it('matches the snapshot', () => {
    const wrapper = window.shallow(<InfoImage size={size} src={src} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('matches the snapshot when dimmed', () => {
    const wrapper = window.shallow(
      <InfoImage size={size} src={src} dimmed={true} />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders with an image', () => {
    const wrapper = window.shallow(<InfoImage size={size} src={src} />)
    expect(wrapper.find('img')).toBeTruthy()
  })

  it('uses the small size prop', () => {
    const wrapper = window.shallow(<InfoImage size={'small'} src={src} />)
    expect(wrapper.find('div.image').prop('style')).toHaveProperty(
      'width',
      sizes.small
    )
    expect(wrapper.find('div.image').prop('style')).toHaveProperty(
      'height',
      sizes.small
    )
  })

  it('uses the medium size prop', () => {
    const wrapper = window.shallow(<InfoImage size={'medium'} src={src} />)
    expect(wrapper.find('div.image').prop('style')).toHaveProperty(
      'width',
      sizes.medium
    )
    expect(wrapper.find('div.image').prop('style')).toHaveProperty(
      'height',
      sizes.medium
    )
  })

  it('uses the large size prop', () => {
    const wrapper = window.shallow(<InfoImage size={'large'} src={src} />)
    expect(wrapper.find('div.image').prop('style')).toHaveProperty(
      'width',
      sizes.large
    )
    expect(wrapper.find('div.image').prop('style')).toHaveProperty(
      'height',
      sizes.large
    )
  })

  it('uses the big size prop', () => {
    const wrapper = window.shallow(<InfoImage size={'big'} src={src} />)
    expect(wrapper.find('div.image').prop('style')).toHaveProperty(
      'width',
      sizes.big
    )
    expect(wrapper.find('div.image').prop('style')).toHaveProperty(
      'height',
      sizes.big
    )
  })

  it('uses the huge size prop', () => {
    const wrapper = window.shallow(<InfoImage size={'huge'} src={src} />)
    expect(wrapper.find('div.image').prop('style')).toHaveProperty(
      'width',
      sizes.huge
    )
    expect(wrapper.find('div.image').prop('style')).toHaveProperty(
      'height',
      sizes.huge
    )
  })

  it('uses the massive size prop', () => {
    const wrapper = window.shallow(<InfoImage size={'massive'} src={src} />)
    expect(wrapper.find('div.image').prop('style')).toHaveProperty(
      'width',
      sizes.massive
    )
    expect(wrapper.find('div.image').prop('style')).toHaveProperty(
      'height',
      sizes.massive
    )
  })
})
