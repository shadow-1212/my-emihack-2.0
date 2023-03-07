import React, {Suspense} from "react";
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
const PublicRoutes = React.lazy(() => import('./PublicRoutes'))
const AdminRoutes = React.lazy(() => import('./AdminRoutes'))
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
