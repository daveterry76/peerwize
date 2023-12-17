import React from 'react'
import { useEffect } from 'react'
import Activity from '../../components/Dashboard/Activity'
import Feed from '../../components/Dashboard/Feed'
import Navbar from '../../components/Dashboard/Navbar'
import Sidebar from '../../components/Dashboard/Sidebar'
import Skills from '../../components/Dashboard/Skills'
import Track from '../../components/Dashboard/Track'
import '../Dashboard/styles/dashboard.scss'

const Dashboard = () => {

  useEffect(() => {
    document.title = 'Dashboard'
  })

  return (
    <>
        <div className='dashboard'>
            <div>
              <Sidebar />
            </div>
            <div className='dashboard__main'>
              <Navbar />
              <div className='dashboard__main--first'>
                <Activity />
                <div>
                  <Track />
                  <Skills />
                </div>
              </div>
              <Feed />
            </div>
        </div>
    </>
  )
}

export default Dashboard