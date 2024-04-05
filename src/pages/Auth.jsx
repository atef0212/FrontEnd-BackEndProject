import { useEffect, useState } from "react";

function Auth() {
    const [signupUrl, setSignupUrl] = useState('');
    const [loading, setLoading] = useState(true); // Initialize loading state as true

    useEffect(() => {
        const fetchSignupUrl = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/user');
                if (!response.ok) {
                    throw new Error('Failed to fetch signup URL');
                }
                setSignupUrl(response.url);
            } catch (error) {
                console.error('Error fetching signup URL:', error);
                // Handle error (e.g., display error message)
            } finally {
                setLoading(false); // Update loading state when fetching completes (success or error)
            }
        };

        fetchSignupUrl();
    }, []); // Empty dependency array to run the effect only once
console.log(loading)
    return (
        <div>
            {loading ? ( // Display loading message or spinner while fetching
                <p>Loading...</p>
            ) : (
                <>
                    <h1>Signup URL: {signupUrl}</h1>
                    {/* Add authentication components here */}
                </>
            )}
        </div>
    );
}

export default Auth;
