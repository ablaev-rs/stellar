import React from 'react'
import { observer } from 'startupjs'
import './index.styl'
import { View, Text, Image, Linking } from 'react-native'
import { BASE_URL } from '@env'
import Button from 'components/Button'

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
      View.footerBox
        View.infoBox
          Text.h2 Aliquam sed mauris
          Text.text Sed lorem ipsum dolor sit amet et nullam consequat feugiat consequat magna adipiscing tempus etiam dolore veroeros. eget dapibus mauris. Cras aliquet, nisl ut viverra sollicitudin, ligula erat egestas velit, vitae tincidunt odio.
          View.btnWrapper
            Button(action = 'Learn More' addStyle = 'btnPink')

        View.contact
          Text.h2 Etiam feugiat
          View.contactBox
            View.contactData 
              Text.title Address
              Text.value 1234 Somewhere Road • Nashville, TN 00000 • USA
            View.contactData 
              Text.title Phone
              Text.value (000) 000-0000 x 0000
            View.contactData 
              Text.title Email
              Text.value.link(onPress=() => Linking.openURL('#')) information@untitled.tld

          View.social
            each url, index in icons
              View.imageBorder(styleName=index === 0 ? 'first' : '')
                Image.image(
                  source={uri: base + url}
                )

      View.copyright
        Text.text © Untitled. Design: 
        Text.text.link(onPress=() => Linking.openURL('#')) HTML5 UP 
        Text.text Demo Images: 
        Text.text.link(onPress=() => Linking.openURL('#')) Unsplash.

  `
})
