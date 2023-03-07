import React, {Suspense} from "react";
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AdminRoutes  from "./AdminRoutes";
const PublicRoutes = React.lazy(() => import('./PublicRoutes'))
function App() {

  return (
      <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="admin/*" element={<AdminRoutes/>}/>
                <Route path="*" element={<PublicRoutes/>}/>
            </Routes>
        </Suspense>
      </Router>
  )
}

export default App
