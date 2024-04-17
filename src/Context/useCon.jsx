import { createContext, useState } from 'react';

export const AuthContext = createContext({  
 
});

export default function UserProvider({children}){
  const [auth, setAuth]=useState({})
  const [token, setToken]=useState(null)
  const [userId, setId]=useState(null)
  const [data, setData]=useState("")
  return <AuthContext.Provider value={{auth, setAuth, token, setToken, userId, setId, data, setData}}>
    {children}
  </AuthContext.Provider>
}
