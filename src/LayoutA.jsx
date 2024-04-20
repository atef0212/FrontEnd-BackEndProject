import Header from './Header'
import LogIn from './users/Pages/LogIn'
import { Outlet} from 'react-router-dom'

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