import {Route, Routes} from 'react-router-dom'

//      * Main Page *
import Body from './Body';

//      * Page Not Found *
import Page404 from '../Page 404/Page404'

//      * Dice Game *
import FrontPage from '../../my-projects/Dice Game/components/FrontPage'
import Playarea from '../../my-projects/Dice Game/components/Playarea'

//      * Foody Zone *
import FoodyZone from '../../my-projects/Foody Zone/components/Body'

//      * Contact App *
import ContactApp from '../../my-projects/Contact App/components/Body'

//      * Crypto Dashboard *
import CryptDashboard from '../../my-projects/crypto dashboard/pages/Dashboard/components/Body'

//      * Redux Implementation *
import TodoRedux from '../../my-projects/Todo with Redux/components/App'

//      * OTP Authentication *
import OtpAuth from '../../my-projects/OTP Authentication/components/OtpAuth'


function Index(){
  return(
    <>
      <div>

        <Routes>
          {/* Main Page */}
          <Route path="/Body" element={<Body />}></Route>
 
          {/* Page Not Found */}
          <Route path="/*" element={<Page404 />}></Route>

          {/* Dice Game */}
          <Route path="FrontPage" element={<FrontPage />}></Route>
          <Route path="FrontPage/Playarea" element={<Playarea />}></Route>

          {/* Foody Zone */}
          <Route path="/FoodyZone" element={<FoodyZone />}></Route>

          {/* Contact App */}
          <Route path="/ContactApp" element={<ContactApp />}></Route>
          
          {/* Crypto Dashboard */}
          <Route path="/CryptoDashboard" element={<CryptDashboard />}></Route>
          
          {/* Redux Implementation */}
          <Route path="/Todo-with-redux" element={<TodoRedux />}></Route>

          {/* OTP Authentication */}
          <Route path="/Otp-Authentication" element={<OtpAuth />}></Route>
        </Routes>
        
      </div>
    </>
  )
}

export default Index;