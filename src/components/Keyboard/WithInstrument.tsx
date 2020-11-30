import React, { FunctionComponent, useEffect } from "react"
import { useInstrument } from "../../state/Instrument"
import { useAudioContext } from "../AudioContextProvider"
import "./style.css"
import { SoundfontProvider } from "../../adapters/Soundfont/SoundfontProvider"
import { Keyboard } from "./Keyboard"

export const KeyboardWithInstrument: FunctionComponent = () => {
  const AudioContext = useAudioContext()!
  const { instrument } = useInstrument()

  return (
    <SoundfontProvider
      AudioContext={AudioContext}
      instrument={instrument}
      render={(props) => <Keyboard {...props} />}
    />
  )
}
