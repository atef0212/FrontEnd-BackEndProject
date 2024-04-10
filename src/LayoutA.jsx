import LogIn from './users/Pages/LogIn'
import { Outlet} from 'react-router-dom'

function LayoutA() {
  return (
    <>

    <LogIn/>
    <Outlet/>

    </>
  )
}

export default LayoutA