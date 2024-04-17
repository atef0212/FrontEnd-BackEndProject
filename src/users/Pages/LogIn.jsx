import { Link, useNavigate} from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/useCon";
//import {useDaContext} from "../../pages/useContext";
//import { useContext, useState } from "react";

function LogIn() {
  const auth=useContext(AuthContext)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

//const auth=useContext(useDaContext)
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/api/user/login', {
        method: "POST",
        credentials:"include",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      if (!response.ok) {
        // If the response status is not OK, throw an error
        throw new Error('Failed to log in');
      }
      
      const data = await response.json();
      // Optionally, you can redirect the user to a new page or show a success message here
     // auth.setId(data.user._id)
      const userData=data.user
      auth.setData(userData)


      navigate("/mainPage", {replace:true})
      

    } catch (error) {
      console.error('Login failed:', error);
      setError('Invalid email or password');
      // Optionally, you can clear the password field here
      setPassword('');
    }
  }

  return (
    <>

      <form onSubmit={handleLogin} className="max-w-md mx-auto">
        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Log In
          </button>
          <button className="bg-blue-500 text-white p-3 rounded focus:outline-none hover:bg-blue-600">
            <Link to="/signup">SignUp</Link>
          </button>
        </div>
      </form>
    </>
  );
}

export default LogIn;
