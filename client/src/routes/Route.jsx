// Importing React Packages
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Importing TailwindCss
import './index.css'

//      * Main Page *
import App from '../App.jsx'

//      * Portfolio 1 *
import Portfolio1 from '../My Portfolio/Portfolio 1/Home Page/components/Main.jsx'

//      * Portfolio 2 *
import Portfolio2 from '../My Portfolio/Portfolio 2/Home Page/components/Main.jsx'

//      * Page Not Found *
import Page404 from '../Page 404/components/Page404.jsx'

//      * Projects *
import Projects from '@/Projects/Home Page/Index.jsx'
import MERN from '@/Projects/Techs/MERN/MERN'
import MERN_Main from '@/Projects/Techs/MERN/Main'
import MERN_StudentDetails from '@/Projects/Techs/MERN/my-projects/Student Details/StudentDetails'
import MERN_UsersInfo from '@/Projects/Techs/MERN/my-projects/Users Info/Users'
import NextJs from '@/Projects/Techs/NextJs/NextJs'
import ReactNative from '@/Projects/Techs/React Native/Native'
import Java from '@/Projects/Techs/Java/Java'
import DSA from '@/Projects/Techs/DSA Problems/DSA'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Main Page */}
        <Route path="/HomePage" element={<App />}></Route>

        {/* Portfolio 1 */}
        {/* Uncomment 🢛 */}
        {/* <Route path="/Portfolio1" element={<Portfolio1 />}></Route> */}

        {/* Comment 🢛 */} 
        <Route path="/" element={<Portfolio1 />}>
          <Route path="/Portfolio1" element={<Portfolio1 />}></Route>
        </Route>

        {/* Portfolio 2 */}
        <Route path="/Portfolio2" element={<Portfolio2 />}></Route>

        {/* Projects */}
        <Route path="/Projects" element={<Projects />}></Route>
        <Route path="/Projects/MERN" element={<MERN />}>
          <Route index element={<MERN_Main />} />
          <Route path="StudentDetails" element={<MERN_StudentDetails />} />
          <Route path="UsersInfo" element={<MERN_UsersInfo />} />
        </Route>
        <Route path="/Projects/NextJs" element={<NextJs />}></Route>
        <Route path="/Projects/ReactNative" element={<ReactNative />}></Route>
        <Route path="/Projects/Java" element={<Java />}></Route>
        <Route path="/Projects/DSA-Problems" element={<DSA />}></Route>

        {/* Page Not Found */}
        <Route path="/*" element={<Page404 />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)