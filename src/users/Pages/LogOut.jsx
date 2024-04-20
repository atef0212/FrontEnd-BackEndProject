import { useNavigate} from "react-router-dom";



function LogOut() {


const navigate=useNavigate()
  const handleLogout = async (e) => {
   
    e.preventDefault();
    try {
      const response = await  fetch('http://localhost:4000/api/user/logout', {
        method: 'POST',
        credentials:"include",
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {

        navigate("/login",{replace:true})
      } else {
        console.error('Logout failed:', response.statusText);
      }
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
   <>
 <button className="relative left-[1%] bg-black text-white w-20 hover:text-blue-600"  onClick={handleLogout}>Logout</button>

   </>
  )
}

export default LogOut