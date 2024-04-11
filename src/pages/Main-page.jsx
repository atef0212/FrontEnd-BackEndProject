import Pic from "../Imges/P1010299.png";
import LogOut from "../users/Pages/LogOut";
function Mainpage() {
  return (
    <>
      <main className="border-2 w-[35%] h-[70%] absolute left-[10%] rounded-lg flex flex-col flex-nowrap gap-5 ">
        <LogOut />

  


          <div className="flex justify-center">
            <img
              className="h-52 w-50 mb-4 rounded-2xl transition-transform duration-300 transform scale-100 group-hover:scale-110"
              src={Pic}
              alt="profilePicture"
            />
          </div>



          <div>
           <input className="border-2 w-1/2" type="text"/>
          </div>


          <div >
            <input className="border-2 w-1/2 h-72" type="textarea" />
          </div>


  
      </main>
    </>
  );
}

export default Mainpage;
