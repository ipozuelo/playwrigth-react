import React from 'react'
import Header from '../components/Header'
import Home from '../pages/Home'
import Footer from '../components/Footer'
import { Outlet, useNavigation } from 'react-router-dom'

const LayaoutPublic = () => {

  const navigation = useNavigation()


  return (
    <>
    <Header/>
    <main>
    {navigation.state === "loading" && (
                    <div className="alert alert-info my-5">Loading...</div>
                )}
      <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default LayaoutPublic