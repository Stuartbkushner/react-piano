import React, { FunctionComponent } from 'react'

export const NoAudioMessage: FunctionComponent = () => {
  return (
    <div>
      <p>Sorry, it's not gonna work.</p>
      <p>Your browser doesn't seem to support <code>Audio API</code>.</p>
    </div>
  )
}
