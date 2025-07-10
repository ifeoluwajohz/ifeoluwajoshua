import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Theme } from '@radix-ui/themes'
import './index.css'
import '@fontsource/josefin-sans'; // Default weight 400
// Optional: import specific weights/styles
// import '@fontsource/josefin-sans/300.css';
// import '@fontsource/josefin-sans/600.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Theme>
      <App />
    </Theme>
  </React.StrictMode>,
)
