import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({ username: "", email: "", password: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
        try {
            const response = await fetch("http://localhost:3002/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: 'include',
                body: JSON.stringify(user), // Send user object directly
            });

            const data = await response.json();
            if (!response.ok) {
                toast.error("Signup failed: " + data.message);
                return; // Exit if there's an error
            }

            toast.success("Signup successful!");
            navigate('/'); // Redirect on success
        } catch (error) {
            console.error('Error during signup:', error);
            toast.error("An error occurred: " + error.message);
        }
    };

    return (
        <div className="form_container">
            <h2>Signup Account</h2>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={user.email}
                            placeholder="Enter your email"
                            onChange={handleChange}
                            required // Add required validation
                        />
                    </div>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input
                            name="username"
                            value={user.username}
                            placeholder="Enter your username"
                            onChange={handleChange}
                            required // Add required validation
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password" // Change to password type
                            name="password"
                            value={user.password}
                            placeholder="Enter your password"
                            onChange={handleChange}
                            required // Add required validation
                        />
                    </div>
                    <button type="submit">Submit</button>
                    <span>
                        Already have an account? <Link to="/login">Login</Link>
                    </span>
                </fieldset>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Signup;
