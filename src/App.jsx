import { useState } from 'react'
import Signup from './components/SignUp'
import Authenticate from './components/Authenticate'


function App() {

  const [token, setToken] = useState(null)

  return (
    <>
      <Signup setToken={setToken} />
      <Authenticate token={token} />
    </>
  )
}

export default App
