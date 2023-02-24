import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import Provider from './contexts/userContexts/userContexts'
import TechProvider from './contexts/TechContext/TechContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <Provider>
          <TechProvider>
            <App />
          </TechProvider>
        </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
