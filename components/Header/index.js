import React from 'react'
import { observer } from 'startupjs'
import './index.styl'
import { Image } from 'react-native'
import { Div, H1, Span } from '@startupjs/ui'
import { BASE_URL } from '@env'

export default observer(function Header () {
  const logoUrl = '/img/logo.png'
  const base = BASE_URL

  return pug`
    Div.root
      Div.container
        Image.image(
          source={uri: base + logoUrl}
        )
        H1.header Stellar
        Span.slogan Just another free, fully responsive site template
        Span.slogan built by @ajlkn for HTML5 UP.

  `
})
