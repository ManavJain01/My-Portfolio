// Importing React Packages
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Importing TailwindCss
import './index.css'

//      * Main Page *
import App from './App.jsx'

//      * Portfolio 1 *
import Portfolio1 from './Portfolio 1/Home Page/components/Main'

//      * Page Not Found *
import Page404 from './Page 404/components/Page404'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Main Page */}
        {/* <Route path="/" element={<App />}></Route> */}

        {/* Portfolio 1 */}
        {/* <Route path="/Portfolio1" element={<Portfolio1 />}></Route> */}
        <Route path="/" element={<Portfolio1 />}></Route>

        {/* Page Not Found */}
        <Route path="/*" element={<Page404 />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
