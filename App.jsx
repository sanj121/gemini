import React from 'react'
import Sidebar from './components/sidebar/Sidebar'
import Main from './components/main/Main'
import { BrowserRouter ,Routes,Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  return (<>
    <BrowserRouter>
    <Sidebar/>
      <Routes>
      <Route path='/Sidebar' element={<Sidebar/>}/>
      <Route path='/Main' element={<Main/>}/>
      </Routes>
      <Main/>
    </BrowserRouter>
    </>
    // <>
    // <Sidebar/>
    // <Main/>
    // </>
  )
}

export default App