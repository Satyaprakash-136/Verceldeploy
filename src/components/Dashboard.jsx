import AdminPanel from "./AdminPanel";
import EditorPanel from "./EditorPanel";
import ViewerPanel from "./ViewerPanel";

const Dashboard = ({ user }) => {
    return (
        <div>
           <h1>Dashboard</h1>
{user.role === "admin" ? (
  <AdminPanel />
) : user.role === "editor" ? (
  <EditorPanel />
) : (
  <ViewerPanel />
)}

        </div>
    );
};

export default Dashboard;
