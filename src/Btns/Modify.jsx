import { useState } from "react";
import { useParams } from "react-router-dom";

function Modify() {
    const userId = useParams().userId;
    const [gender, setGender] = useState("");
    const [land, setLand] = useState("");
    const [password, setPassword] = useState("");

    const handleUpdateUser = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/api/user/${userId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ gender, land, password })
            });

            if (!response.ok) {
                // If the response status is not OK, throw an error
                throw new Error('Failed to update user');
            }

            // If update is successful, you can optionally redirect the user to another page or show a success message
            console.log('User update successful');

        } catch (error) {
            console.log('User update failed:', error);
        }
    }

    return (
        <>
            <input type="password" value={land} onChange={(e) => setLand(e.target.value)} placeholder="Please enter your New Password" />
            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Please enter your New Password" />
            <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} placeholder="Please enter your New Password" />

            <button onClick={handleUpdateUser}>Update User</button>
        </>
    )
}

export default Modify;
