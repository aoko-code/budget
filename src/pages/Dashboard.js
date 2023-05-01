import React from 'react'
import { fetchData } from '../Helpers'
import { useLoaderData } from 'react-router-dom'

export function DashboardLoader(){
    const userName = fetchData("userName")
    return {userName}
}

function Dashboard() {
    const { userName } = useLoaderData()
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard