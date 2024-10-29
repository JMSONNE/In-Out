import { useState } from 'react'
import Router from './Components/Router/Router'
import { NavigationBar } from './Components/NavigationBar'
import { Footer } from './Components/Footer'


function App() {


  return (
    <>
      <NavigationBar />
      <Router />
      <Footer />
    </>
  )
}

export default App
