import { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import "./LoginForm.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); // Hook for navigation

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!email || !password) {
            alert("Both fields are required!");
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                alert(data.message || "Login failed");
                return;
            }

            // Store token in localStorage
            localStorage.setItem("token", data.token);
            localStorage.setItem("role", data.role);

            // Redirect based on user role
            if (data.role === "admin") {
                navigate("/admin-panel");
            } else if(data.role === "editor"){
                navigate("/editor-panel");
            }
            else{
                navigate("/viewer-panel");
            }
        } catch (error) {
            console.error("Login Error:", error);
            alert("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account?</p>
            <button className="register-btn" onClick={() => navigate("/register")}>
                Register
            </button>
        </div>
    );
};

export default Login;
