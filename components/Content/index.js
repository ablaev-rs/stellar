import React from 'react'
import { observer } from 'startupjs'
import './index.styl'
import { Text } from 'react-native'
import { Div } from '@startupjs/ui'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import Navigation from './Navigation'

export default observer(function Header () {
  return pug`
    Div.root
      Div.container
        Navigation

  `
})
