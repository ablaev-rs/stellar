import React from 'react'
import { observer } from 'startupjs'
import './index.styl'
import { TouchableOpacity, Text } from 'react-native'

export default observer(function Button ({ action, color = '' }) {
  return pug`
    TouchableOpacity.btn(styleName = color) 
      Text.btnText(styleName = color) #{action}
  `
})
