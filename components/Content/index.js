import React from 'react'
import { observer } from 'startupjs'
import './index.styl'
import { View } from 'react-native'
import Navigation from './Navigation'
import Introduction from './Introduction'
import First from './First'
import Second from './Second'
import GetStarted from './GetStarted'

export default observer(function Content () {
  return pug`
    View.root
      View.container
        Navigation
        Introduction
        First
        Second
        GetStarted

  `
})
