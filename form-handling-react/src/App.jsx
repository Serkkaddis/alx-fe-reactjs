import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/formikForm'; 
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
      <h1>Welcome to the Registration Page</h1>
          <FormikForm />  
            {/* <RegistrationForm /> */}
      </div>
  )
}

export default App
