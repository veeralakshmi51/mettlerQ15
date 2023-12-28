import React from 'react'
import { Navigate } from 'react-router-dom'

interface AuthRoutesProps {
  children?: React.ReactNode
}

const ProtectedAuth = ({ children }: AuthRoutesProps) => {
  if (!localStorage.getItem('authStaff')) {
    return <Navigate to={{ pathname: '/login' }} />
  }
  return <React.Fragment>{children}</React.Fragment>
}

export default ProtectedAuth
