import React from "react"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Main } from "./components/Main"
import "./App.css"

export const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="app-content">
        <Main />
      </main>
      <Footer />
    </div>
  )
}
