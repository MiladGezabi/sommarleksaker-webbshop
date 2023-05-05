import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom"
import { router } from './RoutConfig.jsx'
import { RecoilRoot } from 'recoil'




ReactDOM.createRoot(document.getElementById('root')).render(
  <RecoilRoot>
    < React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  </RecoilRoot>
)
