// Importing React Packages
import { StrictMode } from 'react'
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
  // Vanilla
import Vanilla from '@/Projects/Techs/Vanilla/Vanilla'
  // React
import React from '@/Projects/Techs/React/React'
import React_FrontPage from '@/Projects/Techs/React/my-projects/Dice Game/components/FrontPage'
import React_Playarea from '@/Projects/Techs/React/my-projects/Dice Game/components/Playarea'
import React_FoodyZone from '@/Projects/Techs/React/my-projects/Foody Zone/components/Body'
import React_ContactApp from '@/Projects/Techs/React/my-projects/Contact App/components/Body'
import React_TodoRedux from '@/Projects/Techs/React/my-projects/Todo with Redux/components/App'
import React_OtpAuth from '@/Projects/Techs/React/my-projects/OTP Authentication/components/OtpAuth'
  // MERN
import MERN from '@/Projects/Techs/MERN/MERN'
import MERN_Main from '@/Projects/Techs/MERN/Main'
import MERN_StudentDetails from '@/Projects/Techs/MERN/my-projects/Student Details/StudentDetails'
import MERN_UsersInfo from '@/Projects/Techs/MERN/my-projects/Users Info/Users'
import NextJs from '@/Projects/Techs/NextJs/NextJs'
import ML from '@/Projects/Techs/ML/ML'
import BlockChain from '@/Projects/Techs/BlockChain/BlockChain'
import ReactNative from '@/Projects/Techs/React Native/Native'
import Java from '@/Projects/Techs/Java/Java'
import DSA from '@/Projects/Techs/DSA Problems/DSA'


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
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
          {/* Vanilla */}
        <Route path="/Projects/Vanilla" element={<Vanilla />}></Route>
          {/* React */}
        <Route path="/Projects/React" element={<React />}></Route>
        <Route path="/Projects/React/Dice/FrontPage" element={<React_FrontPage />} />
        <Route path="/Projects/React/Dice/Playarea" element={<React_Playarea />} />
        <Route path="/Projects/React/FoodyZone" element={<React_FoodyZone />} />
        <Route path="/Projects/React/ContactApp" element={<React_ContactApp />} />
        <Route path="/Projects/React/Todo-with-redux" element={<React_TodoRedux />} />
        <Route path="/Projects/React/Otp-Authentication" element={<React_OtpAuth />} />
          {/* MERN */}
        <Route path="/Projects/MERN" element={<MERN />}>
          <Route index element={<MERN_Main />} />
          <Route path="StudentDetails" element={<MERN_StudentDetails />} />
          <Route path="UsersInfo" element={<MERN_UsersInfo />} />
        </Route>
        <Route path="/Projects/NextJs" element={<NextJs />}></Route>
        <Route path="/Projects/MachineLearning" element={<ML />}></Route>
        <Route path="/Projects/BlockChain" element={<BlockChain />}></Route>
        <Route path="/Projects/ReactNative" element={<ReactNative />}></Route>
        <Route path="/Projects/Java" element={<Java />}></Route>
        <Route path="/Projects/DSA-Problems" element={<DSA />}></Route>

        {/* Page Not Found */}
        <Route path="/*" element={<Page404 />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)