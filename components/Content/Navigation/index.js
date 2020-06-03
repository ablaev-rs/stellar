import React from 'react'
import { observer } from 'startupjs'
import './index.styl'
import { View } from 'react-native'
import { Menu } from '@startupjs/ui'

export default observer(function Header () {
  const navigation = ['Introduction', 'First Section', 'Second Section', 'Get Started']
  return pug`
    View.root
      Menu.nav(variant='horizontal')
        each val in navigation
          Menu.item= val
      
  `
})
