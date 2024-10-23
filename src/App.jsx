import { useState } from 'react'
import { Formulario } from './components/formulario'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { generate_token, messaging } from './notifications/firebase';
import { useEffect } from 'react';
import { onMessage } from 'firebase/messaging';
import { Home } from './components/home'

function App() {
  const [usuario, set_usuario] = useState("");
  const [fcm_token, set_token] = useState('');

  useEffect(() => {
    //generate_token();
    onMessage(messaging, (payload) => {
      console.log(payload);
    })
  }, [])
  return (

    <div className='App'>
      {!usuario.length > 0 ? <Formulario set_usuario={set_usuario} set_token={set_token} /> : <Home usuario={usuario} fcm_token={fcm_token} />}
    </div>

  )
}

export default App
