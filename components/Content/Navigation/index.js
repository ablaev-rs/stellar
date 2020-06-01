import React from 'react'
import { observer } from 'startupjs'
import './index.styl'
import { Text } from 'react-native'
import { Div, Menu } from '@startupjs/ui'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

export default observer(function Header () {
  const navigation = ['Introduction', 'First Section', 'Second Section', 'Get Started']
  return pug`
    Div.root
      Menu.nav(variant='horizontal')
        each val in navigation
          Menu.item= val
      
  `
})
