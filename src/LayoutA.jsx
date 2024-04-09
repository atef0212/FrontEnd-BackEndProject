import { Outlet } from 'react-router-dom'
import LogIn from './users/Pages/LogIn'
import Header from './Header'

function LayoutA() {
  return (
    <>
<Header/>
    <LogIn/>

      <Outlet/>
    </>
  )
}

export default LayoutA