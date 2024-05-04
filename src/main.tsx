import React from 'react'
import './App.css'
import App from './App'
import * as ReactDOM from 'react-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Cutoff from './components/Cutoff'
import { PrimeReactProvider } from 'primereact/api'
import Tailwind from 'primereact/passthrough/tailwind'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello world!</div>
  },
  {
    path: '/cutoff',
    element: Cutoff
  }
])

ReactDOM.render(
  <React.StrictMode>
    <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
      <App />
    </PrimeReactProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
