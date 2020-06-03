import React from 'react'
import { observer } from 'startupjs'
import './index.styl'
import { Image, Text, View, TouchableOpacity } from 'react-native'
import { Hr } from '@startupjs/ui'
import { BASE_URL } from '@env'

export default observer(function Header () {
  const introUrl = '/img/intro.jpg'
  const base = BASE_URL

  return pug`
    View.root
      View.container

        View.imageBox
          View.imageBorder
            Image.image(
              source={uri: base + introUrl}
            )

        View.infoBox
          Text.h2 Ipsum sed adipiscing
          Hr.sep
          Text.text Sed lorem ipsum dolor sit amet nullam consequat feugiat consequat magna adipiscing magna etiam amet veroeros. Lorem ipsum dolor tempus sit cursus. Tempus nisl et nullam lorem ipsum dolor sit amet aliquam.
          TouchableOpacity.btn
            Text.btnText Learn More



  `
})
