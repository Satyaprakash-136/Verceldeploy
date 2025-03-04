import { useNavigate } from "react-router-dom";

const Sidebar = ({ user }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        <div className="sidebar">
            <h2>Dashboard</h2>
            <ul>
                <li onClick={() => navigate("/")}>Home</li>
                {user.role === "admin" && <li onClick={() => navigate("/admin")}>Admin Panel</li>}
                {["admin", "editor"].includes(user.role) && <li onClick={() => navigate("/editor")}>Editor Panel</li>}
                <li onClick={() => navigate("/viewer")}>Viewer Panel</li>
                <li onClick={handleLogout} className="logout">Logout</li>
            </ul>
        </div>
    );
};

export default Sidebar;
