import React from 'react'
import { observer } from 'startupjs'
import './index.styl'
import { View, Text, TouchableOpacity } from 'react-native'

export default observer(function Header () {
  const navigation = ['Introduction', 'First Section', 'Second Section', 'Get Started']
  return pug`
    View.root
      each val, index in navigation
        TouchableOpacity.item(key = index styleName=index === 0 ? 'first' : '')
          Text.text #{val}
      
  `
})
