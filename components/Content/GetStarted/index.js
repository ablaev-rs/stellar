import React from 'react'
import { observer } from 'startupjs'
import './index.styl'
import { View, TouchableOpacity, Text } from 'react-native'
import { Hr } from '@startupjs/ui'

export default observer(function GetStarted () {
  return pug`
    View.root
      View.container

        View.infoBox
          Text.h2 Congue imperdiet
          Hr.sep
          Text.text Donec imperdiet consequat consequat. Suspendisse feugiat congue posuere. Nulla massa urna, fermentum eget quam aliquet.

        View.groupBtn
          TouchableOpacity.btn
            Text.btnText.btnBlue Get Started
          TouchableOpacity.btn
            Text.btnText Learn More

  `
})
