import  { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Retrieve user data from cookie
    const token = document.cookie
      .split(";")
      .find((cookie) => cookie.trim().startsWith("token="));

    if (token) {
      // Decode the token to extract user data
      const decodedToken = decodeURIComponent(token).split(".")[1];
      const base64 = decodedToken.replace(/-/g, "+").replace(/_/g, "/");
      const userDataString = decodeURIComponent(
        atob(base64)
          .split("")
          .map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      );

      setUserData(JSON.parse(userDataString).user);
    } else {
      // If token doesn't exist, redirect to login page
      navigate("/signup");
    }
  }, [navigate]);

  return (
    <div>
      <h1>Profile Page</h1>
      {userData && (
        <div>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          {/* Display other user details as needed */}
          
        </div>
      )}
    </div>
  );
}

export default ProfilePage;
