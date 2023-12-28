import React from 'react';
import { Navigate } from 'react-router-dom';
import Login from '../pages/login';
import Dashboard from '../pages/dashboard';
import Q15StaffConfiguration from '../pages/staffConfiguration';
import Q15PatientCheck from '../pages/q15PatientCheck';
import AccessControl from '../pages/accesscontrol';
import Organization from '../pages/organizationDetails';
import OrganizationForm from '../pages/organizationDetails/Form';

const authProtectedRoutes = [
  { path: '/dashboard', element: <Dashboard /> },
  { path: '/access-control', element: <AccessControl /> },
  { path: '/q15-staff-configuration', element: <Q15StaffConfiguration /> },
  { path: '/q15-patient-check', element: <Q15PatientCheck /> },
  { path: '/organizationDetails', element: <Organization /> },
  {path:'/organization-form',element:<OrganizationForm/>},
  { path: '/', element: <Navigate to="/dashboard" /> }
];

const publicRoutes = [
  { path: '/login', element: <Login /> }
];

export { authProtectedRoutes, publicRoutes };
