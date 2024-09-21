import { useState } from 'react'
import Router from './Components/Router/Router'
import { NavigationBar } from './Components/NavigationBar'
import { Footer } from './Components/Footer'


function App() {


  return (
    <>
      <main>
        <NavigationBar />
        <Router />
      </main>
      <Footer />
    </>
  )
}

export default App
