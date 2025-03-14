import React, { useEffect, useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import root from './router/root'
import Sample from './pages/sample/sample'

function App() {
  return (
    <>
      <RouterProvider router={root}></RouterProvider>
    </>
  )
}

export default App
