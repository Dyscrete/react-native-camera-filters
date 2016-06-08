import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { AsyncStorage } from 'react-native'
import { persistStore, autoRehydrate } from 'redux-persist'
import IdleTimerManager from 'react-native-idle-timer'
import reducers from './reducers'
import { debug } from 'AppUtils'
import { AppContainer } from 'AppContainers'

// eslint-disable-next-line
debug(() => console.disableYellowBox = true)

const appStore = createStore(reducers, undefined, autoRehydrate())

// Persist redux state to React Native's Async Storage
persistStore(appStore, { storage: AsyncStorage })

export class App extends Component {

  componentWillMount() {
    debug(() => IdleTimerManager.setIdleTimerDisabled(true))
  }

  componentWillUnmount() {
    debug(() => IdleTimerManager.setIdleTimerDisabled(false))
  }

  render() {
    return (
      <Provider store={appStore}>
        <AppContainer />
      </Provider>
    )
  }
}
