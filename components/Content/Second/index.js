import React from 'react'
import { observer } from 'startupjs'
import './index.styl'
import { View, Text, Image } from 'react-native'
import { Hr } from '@startupjs/ui'
import { BASE_URL } from '@env'
import Button from 'components/Button'

export default observer(function Second () {
  const base = BASE_URL
  const data = [
    {
      image: '/img/currency.png',
      count: '5,120',
      explanation: 'Etiam'
    },
    {
      image: '/img/customer.png',
      count: '8,192',
      explanation: 'Magna'
    },
    {
      image: '/img/sale.png',
      count: '2,048',
      explanation: 'Tempus'
    },
    {
      image: '/img/warranty.png',
      count: '4,096',
      explanation: 'Aliquam'
    },
    {
      image: '/img/qr-code.png',
      count: '1,024',
      explanation: 'Nullam'
    }
  ]

  return pug`
    View.root
      View.infoBox
        Text.h2 Ipsum consequat
        Hr.sep
        Text.text Donec imperdiet consequat consequat. Suspendisse feugiat congue posuere. Nulla massa urna, fermentum eget quam aliquet.

      View.items
        each value in data
          View.item(styleName = value.explanation.toLowerCase())
            View.imageBox
              Image.image(
                source={uri: base + value.image}
              )
            View.count #{value.count}
            View.explanation #{value.explanation}

      Text.text.justify Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum ac arcu sit amet, fermentum pellentesque et purus. Integer maximus varius lorem, sed convallis diam accumsan sed. Etiam porttitor placerat sapien, sed eleifend a enim pulvinar faucibus semper quis ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer eget purus nec nulla mattis et accumsan ut magna libero. Morbi auctor iaculis porttitor. Sed ut magna ac risus et hendrerit scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras eu ornare dui curabitur lacinia.
      
      View.btnWrapper
        Button(action = 'Learn More')

  `
})
