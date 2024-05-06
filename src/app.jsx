import { useState } from 'preact/hooks'
import {BrowserRouter} from 'react-router-dom'
import RoutesApp from './RoutesApp'
import './Admin/Languages/i18n'
import { ContextProvider } from './Context/Provider'
export function App() {
  const [count, setCount] = useState(0)

  return (
    <ContextProvider>
    <BrowserRouter>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"/>
    {/* <link href="https://fonts.googleapis.com/css2?family=Cairo&display=swap" rel="stylesheet"/> */}
    {localStorage.getItem('lan') ? document.body.classList.add('FrenchActive'):document.body.classList.remove('FrenchActive')}
     <RoutesApp/>
    </BrowserRouter>
    </ContextProvider>
  )
}
