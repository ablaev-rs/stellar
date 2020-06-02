import React from 'react'
import { observer } from 'startupjs'
import './index.styl'
import { Div } from '@startupjs/ui'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import Header from '../Header'
import Content from '../Content'
import Footer from '../Footer'

export default observer(function Main ({ style }) {
  return pug`
    Div.root(style=style)
      Div.templateParams
        Header
        Content
        Footer
  `
})
