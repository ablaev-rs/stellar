import React from 'react'
import { observer } from 'startupjs'
import './index.styl'
import { View, Text, Image } from 'react-native'
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
      View.infoBox
        Text.h2 Magna veroeros
        View.sep

      View.items
        each value, index in data
          View.item(key=index styleName=index === data.length-1 ? 'last' : '')
            View.imageBorder
              Image.image(
                source={uri: base + value.image}
              )
            Text.h3 #{value.header}
            Text.text #{value.description}

      View.btnWrapper
        Button(action='Learn More')

  `
})
