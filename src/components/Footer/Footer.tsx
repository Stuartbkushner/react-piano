import React, { FunctionComponent } from "react"
import "./style.css"

export const Footer: FunctionComponent = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <br/>
Ch      {currentYear} Stuart Kushner
    </footer>
  )
}
