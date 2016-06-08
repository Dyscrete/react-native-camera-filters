import React from 'react'
import { View, StatusBar } from 'react-native'
import Camera from './camera'
import AppStyles from 'AppStyles'

export default () => (
  <View style={AppStyles.views.fullCenter}>
    <StatusBar hidden={true} />
    <Camera
      style={{ width: 100, height: 100 }}
      aspect={Camera.constants.Aspect.fill}
    />
  </View>
)
