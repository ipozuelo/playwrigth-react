import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useUserContext } from '../context/userContext'

const LayoutPrivate = () => {

  const {user} = useUserContext()
  return (
    <>
    {
      user ?   <Outlet/> : <Navigate to='/'/>
    
    }
    </>
  )
}

export default LayoutPrivate