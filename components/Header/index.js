import React from 'react'
import { observer } from 'startupjs'
import './index.styl'
import { Image, View, Text } from 'react-native'
import { BASE_URL } from '@env'

export default observer(function Header () {
  const logoUrl = '/img/logo.png'
  const base = BASE_URL

  return pug`
    View.root
      View.container
        Image.image(
          source={uri: base + logoUrl}
        )
        Text.h1 Stellar
        View.sloganBox
          Text.slogan Just another free, fully responsive site template
          Text.slogan built by @ajlkn for HTML5 UP.

  `
})
