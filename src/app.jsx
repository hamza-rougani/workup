import { useState } from 'preact/hooks'
import {BrowserRouter} from 'react-router-dom'
import RoutesApp from './RoutesApp'
export function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>

     <RoutesApp/>
    </BrowserRouter>
  )
}
