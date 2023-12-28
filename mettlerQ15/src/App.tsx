import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { authProtectedRoutes, publicRoutes } from './Routes/allRoutes'
import { ToastContainer } from 'react-toastify'
import ProtectedAuth from './Routes/protectedAuth'
import Sidebar from './components/sidebar/sidebar'
const App = () => {
  return (
    <React.Fragment>
      <Routes>
        {publicRoutes.map((route, idx) => (
          <Route
            path={route.path}
            key={idx}
            element={route.element}
          />
        ))}
      </Routes>
      {
        localStorage.getItem('authStaff') && 
      <Sidebar>
        <Routes>
          {authProtectedRoutes.map((route, idx) => (
            <Route
              path={route.path}
              key={idx}
              element={
                <React.Fragment>
                  <ProtectedAuth>
                    {route.element}
                  </ProtectedAuth>
                </React.Fragment>
              }
            />
          ))}
        </Routes>
      </Sidebar>
     }
      <ToastContainer />
    </React.Fragment>
  )
}

export default App