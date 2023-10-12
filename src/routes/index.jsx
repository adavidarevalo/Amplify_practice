import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from "./../pages/home"
import ProtectedRouter from "./protected_routes"

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: 'dashboard/*',
    element: <ProtectedRouter />,
  },
]);

export default function AppRouter() {
  return (
    <RouterProvider router={router} />
  );
}
