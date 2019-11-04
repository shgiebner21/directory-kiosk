import React from 'react'

import TabPanel from './TabPanel'

describe('TabPanel', () => {
  const tabList = [
    { id: '1', label: 'Hello'},
    { id: '2', label: 'World'},
  ]

  it('matches the snapshot', () => {
    const wrapper = window.shallow(
      <TabPanel tabs={tabList} />
    )
    expect(wrapper).toMatchSnapshot()
  })

  // Need to come back and fix this.

  // it('should render 2 tags', () => {
  //   const wrapper = window.shallow(
  //     <TabPanel tabs={tabList} />
  //   )
  //   expect(wrapper.children()).toHaveLength(2)
  // })

})
