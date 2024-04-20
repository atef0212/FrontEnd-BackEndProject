import { useContext } from "react";
import { AuthContext } from "../Context/useCon";


 function Delete() {
    const {data}=useContext(AuthContext)
     const handleDelete=async () => {
  
        try {
          await fetch(
            `http://localhost:4000/api/user/${data._id}`, {
                method: 'DELETE'
            }
          
         
         
          );
        } catch (err) {console.log(err)}
      };
   
   return (
   <>
    <button onClick={handleDelete}>ss</button>
   </>
   )
 }

 export default Delete