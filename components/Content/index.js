import React from 'react'
import { observer } from 'startupjs'
import './index.styl'
import { View } from 'react-native'
import Navigation from 'components/Content/Navigation'
import Introduction from 'components/Content/Introduction'
import First from 'components/Content/First'
import Second from 'components/Content/Second'
import GetStarted from 'components/Content/GetStarted'

export default observer(function Content () {
  return pug`
    View.root
      View.container
        Navigation
        Introduction
        First
        Second
        GetStarted

  `
})
