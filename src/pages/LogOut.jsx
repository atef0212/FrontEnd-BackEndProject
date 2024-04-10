import Mainpage from "./Main-page";
function LogOut() {

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const response = await  fetch('http://localhost:4000/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        // Clear local storage or cookies here if needed
        window.localStorage.clear(); // Example: clear local storage
        window.location.reload(); // Refresh the page or redirect to login
      } else {
        console.error('Logout failed:', response.statusText);
      }
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
   <>
 <button onClick={handleLogout}>Logout</button>
<Mainpage logOut-btn={handleLogout}/>

   </>
  )
}

export default LogOut