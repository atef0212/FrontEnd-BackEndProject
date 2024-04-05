import { Link } from "react-router-dom"

function LogIn() {
  return (
    <>
         <div className=" h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>

        {/* Username Input */}
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value=""
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex flex-row justify-center gap-2">
      <button className=" bg-blue-500  text-white p-3 rounded focus:outline-none hover:bg-blue-600">
          Login
        </button>
        <button className=" bg-blue-500 text-white p-3 rounded focus:outline-none hover:bg-blue-600">
        <Link to="/signup">SignUp</Link>
          
        </button>

        </div>
  
      </div>
    </div>
    </>
  )
}

export default LogIn