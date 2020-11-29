import React from 'react';
import './App.css';
import { Footer } from './components/Footer';
import { Logo } from './components/Logo';

export const App = () => {
  return (
    <div className="app">
      <Logo />
      <main className="app-content" />
      <Footer />
    </div>
  )
}

