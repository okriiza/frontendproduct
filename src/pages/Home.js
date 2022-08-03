import React from 'react'
import Navbar from '../components/navbar'
export default function Home() {
  const getUser = localStorage.getItem('user')
  const user = JSON.parse(getUser)
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h2>Selamat Datang {`${user.firstName} ${user.lastName}`}</h2>
      </div>
    </>
  )
}
