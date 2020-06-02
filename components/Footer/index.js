import React from 'react'
import { observer } from 'startupjs'
import './index.styl'
import { View, TouchableOpacity, Text, Image } from 'react-native'
import { BASE_URL } from '@env'

export default observer(function Header () {
  const base = BASE_URL
  const icons = [
    '/img/twitter.png',
    '/img/facebook.png',
    '/img/instagram.png',
    '/img/whatsapp.png',
    '/img/youtube.png'
  ]

  return pug`
    View.root
      View.container

        View.infoBox
          Text.h2 Aliquam sed mauris
          Text.text Sed lorem ipsum dolor sit amet et nullam consequat feugiat consequat magna adipiscing tempus etiam dolore veroeros. eget dapibus mauris. Cras aliquet, nisl ut viverra sollicitudin, ligula erat egestas velit, vitae tincidunt odio.
          TouchableOpacity.btn
            Text.btnText.btnPink Get Started

        View.contact
          Text.h2 Etiam feugiat
            View.contactData 
              Text.header Address
              Text.value 1234 Somewhere Road • Nashville, TN 00000 • USA
            View.contactData 
              Text.header Phone
              Text.value (000) 000-0000 x 0000
            View.contactData 
              Text.header Email
              Text.value information@untitled.tld

        View.social
          each url in icons
            View.imageBorder
              Image.image(
                source={uri: base + url}
              )


        View.copyright
          Text.text © Untitled. Design: HTML5 UP.

  `
})
