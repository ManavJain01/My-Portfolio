import {Route, Routes} from 'react-router-dom'

//      * Home Page *
import Portfolio from './Home Page/components/Main'

//      * Page Not Found *
import Page404 from './Page 404/components/Page404'

function App() {
  return (
    <div>
      <Routes>
          {/* Main Page */}
          <Route path="/" element={<Portfolio />}></Route>
 
          {/* Page Not Found */}
          <Route path="/*" element={<Page404 />}></Route>
        </Routes>
    </div>
  )
}

export default App
