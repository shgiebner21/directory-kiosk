import React from 'react'

import PromotionsBoard from './PromotionsBoard'

describe('PromotionsBoard', () => {
  const label = 'Profile Pic'
  const subLabel = 'profilePic'
  const src =
    'https://tinyfac.es/data/avatars/852EC6E1-347C-4187-9D42-DF264CCF17BF-200w.jpeg'


  it('matches the snapshot', () => {
    const wrapper = window.shallow(
      <PromotionsBoard
        label={label}
        subLabel={subLabel}
        src={src}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders with an image', () => {
    const wrapper = shallow(
      <PromotionsBoard
        label={label}
        subLabel={subLabel}
        src={src}
      />
    )
    expect(wrapper.find('img')).toBeTruthy()
  })


})
