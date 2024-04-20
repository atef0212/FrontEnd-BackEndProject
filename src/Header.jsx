import { NavLink } from "react-router-dom"


function Header() {
  return (
    <>
      <nav>
        
      <ul>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200  ${
                    isActive ? "text-blue-900" : "text-blue-400"
                  } lg:hover:bg-transparent lg:border-0 font-bold w-20 hover:text-orange-700 lg:p-0`
                }
                to="/signup"
              >
                signup
              </NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200  ${
                    isActive ? "text-blue-900" : "text-blue-400"
                  } lg:hover:bg-transparent lg:border-0 font-bold w-20 hover:text-orange-700 lg:p-0`
                }
                to="/login"
              >
                LogIn
              </NavLink>
            </li>
          </ul>


          <ul>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200  ${
                    isActive ? "text-blue-900" : "text-blue-400"
                  } lg:hover:bg-transparent lg:border-0 font-bold w-20 hover:text-orange-700 lg:p-0`
                }
                to="/mainPage"
              >
                mainPage
              </NavLink>
            </li>
          </ul>


          <ul>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200  ${
                    isActive ? "text-blue-900" : "text-blue-400"
                  } lg:hover:bg-transparent lg:border-0 font-bold w-20 hover:text-orange-700 lg:p-0`
                }
                to="/profile"
              >
                mainPage
              </NavLink>
            </li>
          </ul>


          <ul>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200  ${
                    isActive ? "text-blue-900" : "text-blue-400"
                  } lg:hover:bg-transparent lg:border-0 font-bold w-20 hover:text-orange-700 lg:p-0`
                }
                to="/dashboard"
              >
                Dashboard
              </NavLink>
            </li>
          </ul>
      </nav>
    </>
  )
}

export default Header