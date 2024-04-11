import { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [age, setAge] = useState('');
  const [land, Setland] = useState('');
  const [tall,setTall] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/api/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
      body: JSON.stringify({ name, gender, email, password, age,land, tall })

    
      });

      if (!response.ok) {
        // If the response status is not OK, throw an error
        throw new Error('Failed to sign up');
      }

      // If signup is successful, you can optionally redirect the user to a login page or show a success message
      console.log('Signup successful');
    } catch (error) {
      console.error('Signup failed:', error);
      setError('Failed to sign up. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSignup} className="max-w-md mx-auto">
      {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter your name"
          required
        />
      </div>
    <div className="mb-4">
        <label htmlFor="age" className="block text-gray-700 text-sm font-bold mb-2">OLd</label>
        <input
          type="number"
          id="old"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter your age"
          required
        />
      </div> 



      <div className="mb-4">
        <label htmlFor="gender" className="block text-gray-700 text-sm font-bold mb-2">Gender</label>
        <input
          type="text"
          id="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter your gender"
          required
        />
      </div>
      
 <div className="mb-4">
        <label htmlFor="country" className="block text-gray-700 text-sm font-bold mb-2">Country</label>
        <input
          type="text"
          id="land"
          value={land}
          onChange={(e) => Setland(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter your country"
          required
        />
      </div> 
      

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


      <div className="mb-6">
        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
        <input
          type="tall"
          id="tall"
          value={tall}
          onChange={(e) => setTall(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter your password"
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <button className="bg-blue-500 text-white p-3 rounded focus:outline-none hover:bg-blue-600">
          <Link to="/login">Login</Link>
        </button>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default SignUp;
