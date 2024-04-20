import  { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const Dashboard = () => {
  const userId=useParams().userId
  const [users, setUsers] = useState([]);
console.log(userId)
  
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Fetch users from backend API
        const response = await fetch("http://localhost:4000/api/user");
        const data = await response.json();
        if(data.users.length > 0){
          setUsers(data.users)
        }

      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);
  const deleteUser = async () => {
    try {
      // Delete user from backend API
   const res=   await fetch(`http://localhost:4000/api/user/${userId}`, {
        method: "DELETE",
      });
      const data=await res.json()

      // Update the user list after deletion
      setUsers(data.users.filter(user => user._id !== userId));

    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };
  return (
<div className="overflow-x-auto">
  <h2 className="text-2xl font-bold mb-4">User List</h2>
  <table className="min-w-full">
    <thead>
      <tr className="bg-gray-200">
      <th className="px-4 py-2">Id</th>
        <th className="px-4 py-2">Name</th>
        <th className="px-4 py-2">Gender</th>
        <th className="px-4 py-2">Email</th>
        <th className="px-4 py-2">Age</th>
        <th className="px-4 py-2">Land</th>
        <th className="px-4 py-2">Tall</th>
        <th className="px-4 py-2">Action</th>
      </tr>
    </thead>
    <tbody>
      {users.map(user => (
        <tr key={user._id} className="border-b border-gray-200">
        <td className="px-4 py-2">{user.id}</td>
          <td className="px-4 py-2">{user.name}</td>
          <td className="px-4 py-2">{user.gender}</td>
          <td className="px-4 py-2">{user.email}</td>
          <td className="px-4 py-2">{user.age}</td>
          <td className="px-4 py-2">{user.land}</td>
          <td className="px-4 py-2">{user.tall}</td>
          <td className="px-4 py-2">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Edit
            </button>
            <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => deleteUser(user._id)}
                >
                  Delete
                </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  );
};

export default Dashboard;
