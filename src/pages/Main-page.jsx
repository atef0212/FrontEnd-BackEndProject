import Pic from '../Imges/P1010299.png'
function Mainpage({props}) {

  const handleLogoutClick = async () => {
    try {
      await handleLogout();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };
  return (
   <>

<div className=" border-2 w-1/3 h-1/2 absolute ">
<div> 

<img  className="h-52 w-50 mb-4 rounded-2xl transition-transform duration-300 transform scale-100 group-hover:scale-110" src={Pic} alt="profilePicture"/>sfafsadf</div>
<div>
    <p>aref</p>
</div>
<div className='border-2'>
    <input className='border-2 w-1/2' type="textarea"/>
</div>
   
</div>
<button>{props.handleLogout}</button>
   </>
  )
}

export default Mainpage