import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../partials/Header';
import Sidebar from '../partials/Sidebar';


export default function Dasboardlayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className='flex h-screen overflow-hidden'>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <Outlet/>
      </div>

    </div>
  )
}
