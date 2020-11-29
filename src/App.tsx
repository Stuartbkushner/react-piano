import React from "react"
import { Footer } from "./components/Footer/Footer"
import { Logo } from "./components/Logo/Logo"
import { Main } from "./components/Main/Main"
import "./App.css"

export const App = () => {
  return (
    <div className="app">
      <Logo />
      <main className="app-content">
        <Main />
      </main>
      <Footer />
    </div>
  )
}
