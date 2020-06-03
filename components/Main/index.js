import React from 'react'
import { observer } from 'startupjs'
import './index.styl'
import { Div } from '@startupjs/ui'
import Header from 'components/Header'
import Content from 'components/Content'
import Footer from 'components/Footer'

export default observer(function Main ({ style }) {
  return pug`
    Div.root(style=style)
      Div.templateParams
        Header
        Content
        Footer
  `
})
