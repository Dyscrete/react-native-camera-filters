/* eslint-disable no-param-reassign, no-underscore-dangle */
import log from './log'

export default function debug(msg, fn) {
  if (! global.__DEV__) return

  if (typeof msg !== 'function') {
    log(msg)
  } else {
    fn = msg
    msg = null
  }

  if (fn) fn()
}
