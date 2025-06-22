import React from 'react'
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './router/AppRoutes'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Routes>
        <Route path='/*' element={<AppRoutes />}></Route>
      </Routes>
    </div>
  )
}

export default App