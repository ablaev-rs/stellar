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
      View.container
        Image.image(
          source={uri: base + logoUrl}
        )
        Text.h1 Stellar

        View.sloganBox
          View.sloganRow
            Text.slogan Just another free, fully responsive site template built by
          View.sloganRow
            Text(onPress=() => Linking.openURL('#')).slogan.link @ajlkn 
            Text.slogan for 
            Text(onPress=() => Linking.openURL('#')).slogan.link HTML5 UP
            Text.slogan .
          

  `
})
