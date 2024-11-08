import { useState } from 'react'
import Router from './Components/Router/Router'
import { NavigationBar } from './Components/NavigationBar'
import { Footer } from './Components/Footer'
import { Analytics } from '@vercel/analytics/react'


function App() {


  return (
    <>
      <Analytics />
      <NavigationBar />
      <Router />
      <Footer />
    </>
  )
}

export default App
