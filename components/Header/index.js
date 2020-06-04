import React from 'react'
import { observer } from 'startupjs'
import './index.styl'
import { Image, View, Text, Linking } from 'react-native'
import { BASE_URL } from '@env'

export default observer(function Header () {
  const logoUrl = '/img/logo.png'
  const base = BASE_URL

  return pug`
    View.root
      Image.image(
        source={uri: base + logoUrl}
      )
      Text.h1 Stellar

      View.sloganBox
        View.sloganRow
          Text.slogan Just another free, fully responsive site template built by
        View.sloganRow
          Text.slogan.link(onPress=() => Linking.openURL('#')) @ajlkn 
          Text.slogan for 
          Text.slogan.link(onPress=() => Linking.openURL('#')) HTML5 UP
          Text.slogan .
        

  `
})
