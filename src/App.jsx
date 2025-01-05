import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UserContextProvider } from './userContextProvide'
import { Login } from './components/login'
import { Profile } from './components/profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <UserContextProvider>
        <h1>hi hum ajj ye context api ka cras course kree</h1>
        <Login/>
        <Profile/>
     </UserContextProvider>
     </>
  )
}

export default App
