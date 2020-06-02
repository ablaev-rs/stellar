import React from 'react'
import { observer } from 'startupjs'
import './index.styl'
import { Text, View } from 'react-native'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
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
