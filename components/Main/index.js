import React from 'react'
import { observer } from 'startupjs'
import './index.styl'
import { View } from 'react-native'
import Header from 'components/Header'
import Content from 'components/Content'
import Footer from 'components/Footer'

export default observer(function Main ({ style }) {
  return pug`
    View.root(style=style)
      View.width
        Header
        Content
        Footer
  `
})
