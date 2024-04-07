import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Left_bar from './Left_bar.tsx'
import Primary from './Primary.tsx'

ReactDOM.createRoot(document.getElementById('left_bar')!).render(
  <React.StrictMode>
    <Left_bar />
  </React.StrictMode>,
)
ReactDOM.createRoot(document.getElementById('main')!).render(
  <React.StrictMode>
    <Primary />
  </React.StrictMode>
)