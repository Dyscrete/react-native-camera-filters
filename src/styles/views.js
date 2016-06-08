import { StyleSheet } from 'react-native'
import { WINDOW_WIDTH, WINDOW_HEIGHT } from './constants'

export default StyleSheet.create({
  full: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  fullCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullSize: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
  },
  fullWidth: {
    flex: 1,
    justifyContent: 'flex-start',
    width: WINDOW_WIDTH,
  },
  fullHeight: {
    flex: 1,
    alignItems: 'flex-start',
    height: WINDOW_HEIGHT,
  }
})
