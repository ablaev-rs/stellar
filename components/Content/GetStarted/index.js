import React from 'react'
import { observer } from 'startupjs'
import './index.styl'
import { View, Text } from 'react-native'
import { Hr } from '@startupjs/ui'
import Button from 'components/Button'

export default observer(function GetStarted () {
  return pug`
    View.root
      View.container

        View.infoBox
          Text.h2 Congue imperdiet
          Hr.sep
          Text.text Donec imperdiet consequat consequat. Suspendisse feugiat congue posuere. Nulla massa urna, fermentum eget quam aliquet.

        View.groupBtn
          View.btnWrapper
            Button(action = 'Get Started' addStyle = 'btnBlue')
          View.btnWrapper
            Button(action = 'Learn More')


  `
})
