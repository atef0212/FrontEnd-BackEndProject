import { Outlet } from 'react-router-dom'
import LogIn from './users/Pages/LogIn'

function LayoutA() {
  return (
    <>

    <LogIn/>

      <Outlet/>
    </>
  )
}

export default LayoutA