
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import LogIn from './users/Pages/LogIn'
import LayoutA from './LayoutA'
import SignUp from './users/Pages/SignUp'
import Mainpage from './pages/Main-page'
import ProfilePage from './pages/ProfilePage'
function App() {
 
const router=createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path='/' element={<LayoutA/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/login' element={<LogIn/>}/>
    <Route path='/mainPage' element={<Mainpage/>}/>
    <Route path='/profile' element={<ProfilePage/>}/>
  </Route>
))
  return (
    <>
 <RouterProvider router={router}/>
 
    </>
  )
}

export default App
