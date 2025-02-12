import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Routes.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import './assets/css/bootstrap.min.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
      <RouterProvider router={router} />

  </StrictMode>,
)
