import React, { useState } from 'react'

import DashboardCard10 from "../../partials/dashboard/DashboardCard10"

export default function Customers() {



  return (
    <div className='m-10'>



      <h2 className='text-xl text-center'>Customers</h2>
      <div className='text-right mb-2'>
        <DashboardCard10 />
      </div>


      <div className='flex bg-indigo-200' style={{ height: 400, width: '100%', background: 'white' }}>

      </div>
    </div>
  )
}
