import React from 'react'
import { observer } from 'startupjs'
import './index.styl'
import { TouchableOpacity, Text } from 'react-native'

export default observer(function Button ({ action, addStyle = '' }) {
  return pug`
    TouchableOpacity.btn
      Text.btnText(styleName = addStyle) #{action}
  `
})
