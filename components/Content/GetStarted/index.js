import React from 'react'
import { observer } from 'startupjs'
import './index.styl'
import { View, Text } from 'react-native'
import Button from 'components/Button'

export default observer(function GetStarted () {
  return pug`
    View.root
      View.infoBox
        Text.h2 Congue imperdiet
        View.sep
        Text.text Donec imperdiet consequat consequat. Suspendisse feugiat congue posuere. Nulla massa urna, fermentum eget quam aliquet.

      View.groupBtn
        Button(action='Get Started' color='blue')
        View.btnWrapper
          Button(action='Learn More')


  `
})
