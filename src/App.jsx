import { useState } from 'react'
import './App.css'
import SDESheetTracker from './Page'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   
  <SDESheetTracker />
  <Footer />

  </>
  )
}

export default App
