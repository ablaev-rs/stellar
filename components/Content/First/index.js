import React from 'react'
import { observer } from 'startupjs'
import './index.styl'
import { View, Text, Image } from 'react-native'
import { Hr } from '@startupjs/ui'
import { BASE_URL } from '@env'
import Button from 'components/Button'

export default observer(function First () {
  const base = BASE_URL
  const data = [
    {
      image: '/img/email.png',
      header: 'Ipsum consequat',
      description: 'Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.'
    },
    {
      image: '/img/location.png',
      header: 'Amed sed feugiat',
      description: 'Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.'
    },
    {
      image: '/img/time.png',
      header: 'Dolor nullam',
      description: 'Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.'
    }
  ]

  return pug`
    View.root
      View.container

        View.infoBox
          Text.h2 Magna veroeros
          Hr.sep

        View.items
          each value in data
            View.item
              View.imageBox
                View.imageBorder
                  Image.image(
                    source={uri: base + value.image}
                  )
              View.header
                Text.h3 #{value.header}
              View.textBox
                Text.text #{value.description}

        View.btnWrapper
          Button(action = 'Learn More')

  `
})
