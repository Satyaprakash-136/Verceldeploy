import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Register from "./components/Register";
import "./styles.css";
import AdminPanel from "./components/AdminPanel";
import ViewerPanel from "./components/ViewerPanel";
import EditorPanel from "./components/EditorPanel";

function App() {
    return (
        <Router>
            <Routes>
            <Route path="/" element={<LoginForm />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/register" element={<Register />} />
                <Route path="/admin-panel" element={<AdminPanel />} />
                <Route path="/editor-panel" element={<EditorPanel />} />
                <Route path="/viewer-panel" element={<ViewerPanel />} />
            </Routes>
        </Router>
    );
}

export default App;
