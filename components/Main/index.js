import React from 'react'
import { observer } from 'startupjs'
import './index.styl'
import { Text } from 'react-native'
import { Div, Span, Button, Br, Row, Card } from '@startupjs/ui'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import Header from '../Header'

export default observer(function Main ({ style }) {
  return pug`
    Div.root(style=style)
      Header
  `
})
