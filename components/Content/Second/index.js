import React from 'react'
import { observer } from 'startupjs'
import './index.styl'
import { View, TouchableOpacity, Text, Image } from 'react-native'
import { Hr } from '@startupjs/ui'
import { BASE_URL } from '@env'

export default observer(function First () {
  const base = BASE_URL
  const currencyUrl = '/img/currency.png'
  const customerUrl = '/img/customer.png'
  const saleUrl = '/img/sale.png'
  const warrantyUrl = '/img/warranty.png'
  const qrcodeUrl = '/img/qr-code.png'

  return pug`
    View.root
      View.container

        View.infoBox
          Text.h2 Ipsum consequat
          Hr.sep
          Text.text Donec imperdiet consequat consequat. Suspendisse feugiat congue posuere. Nulla massa urna, fermentum eget quam aliquet.

        View.items
          View.item.etiam
            View.imageBox
              Image.image(
                source={uri: base + currencyUrl}
              )
            View.count 5,120
            View.explanation Etiam

          View.item.magna
            View.imageBox
              Image.image(
                source={uri: base + customerUrl}
              )
            View.count 8,192
            View.explanation Magna

          View.item.tempus
            View.imageBox
              Image.image(
                source={uri: base + saleUrl}
              )
            View.count 2,048
            View.explanation Tempus

          View.item.aliquam
            View.imageBox
              Image.image(
                source={uri: base + warrantyUrl}
              )
            View.count 4,096
            View.explanation Aliquam

          View.item.nullam
            View.imageBox
              Image.image(
                source={uri: base + qrcodeUrl}
              )
            View.count 1,024
            View.explanation Nullam

        Text.text.justify Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum ac arcu sit amet, fermentum pellentesque et purus. Integer maximus varius lorem, sed convallis diam accumsan sed. Etiam porttitor placerat sapien, sed eleifend a enim pulvinar faucibus semper quis ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer eget purus nec nulla mattis et accumsan ut magna libero. Morbi auctor iaculis porttitor. Sed ut magna ac risus et hendrerit scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras eu ornare dui curabitur lacinia.

        TouchableOpacity.btn
          Text.btnText Learn More

  `
})
