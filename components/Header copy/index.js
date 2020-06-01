import React from 'react'
import { observer } from 'startupjs'
import './index.styl'
import { Text } from 'react-native'
import { Div, Span, Button, Br, Row, Card } from '@startupjs/ui'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

export default observer(function Header () {
  return pug`
    Div.root
      Text i am here
  `
})
