import { useContext } from "react";
import Pic from "../Imges/sd.jpeg";
import LogOut from "../users/Pages/LogOut";
import { AuthContext } from "../Context/useCon";
function Mainpage() {
  const auth=useContext(AuthContext)
 const user=auth.data
 console.log(user)
  return (
    <>{
         <main className="border-0 w-[35%] h-[70%] absolute left-[30%] top-[20%] rounded-lg flex flex-col flex-nowrap gap-5 ">
  


         <div className="flex justify-center">
            <img
              className="h-52 w-50 mb-4 rounded-2xl transition-transform duration-300 transform scale-100 group-hover:scale-110"
              src={Pic}
              alt="profilePicture"
            />
          </div>
  


  <div className="flex justify-center">
   <span className="border-0 font-bold text-black">Name: </span>    {user.name}
  </div>



  <div>
  <span className="border-0 font-bold text-black">Email: </span>  {user.email}
  </div>


  <div >
  <span className="border-0 font-bold text-black">Gender: </span> {user.gender}
  </div>



</main>
    }
    <nav>     <ul><li ><LogOut  /></li>
    </ul> </nav>
   
    </>
  );
}

export default Mainpage;
