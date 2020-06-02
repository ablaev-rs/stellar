import React from 'react'
import { observer } from 'startupjs'
import './index.styl'
import { View, TouchableOpacity, Text, Image } from 'react-native'
import { Hr } from '@startupjs/ui'
import { BASE_URL } from '@env'

export default observer(function First () {
  const base = BASE_URL
  const emailUrl = '/img/email.png'
  const locationUrl = '/img/location.png'
  const timeUrl = '/img/time.png'

  return pug`
    View.root
      View.container

        View.infoBox
          Text.h2 Magna veroeros
          Hr.sep

          View.items
            View.item
              View.imageBox
                View.imageBorder
                  Image.image(
                    source={uri: base + emailUrl}
                  )
              View.header
                Text.h3 Ipsum consequat
              View.textBox
                Text.text Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.

            View.item
              View.imageBox
                View.imageBorder
                  Image.image(
                    source={uri: base + locationUrl}
                  )
              View.header
                Text.h3 Amed sed feugiat
              View.textBox
                Text.text Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.
          
            View.item
              View.imageBox
                View.imageBorder
                  Image.image(
                    source={uri: base + timeUrl}
                  )
              View.header
                Text.h3 Dolor nullam
              View.textBox
                Text.text  Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.
            
        TouchableOpacity.btn
          Text.btnText Learn More

  `
})
