import {Route, Routes} from 'react-router-dom'

//      * Portfolio *
import Portfolio from './Portfolio/components/Main'

//      * More Projects Page *
import More_Projects from './More Projects Page/components/Index'

//      * Page Not Found *
import Page404 from './Page 404/components/Page404'

function App() {
  return (
    <div>
      <Routes>
          {/* Main Page */}
          <Route path="/" element={<Portfolio />}></Route>

          {/* Portfolio */}
          <Route path="/More-Projects" element={<More_Projects />}></Route>
 
          {/* Page Not Found */}
          <Route path="/*" element={<Page404 />}></Route>
        </Routes>
    </div>
  )
}

export default App
