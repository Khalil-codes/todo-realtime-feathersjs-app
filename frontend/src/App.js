import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import client from "./utils/featherApp";

function App() {
    const [login, setLogin] = useState(null);
    useEffect(() => {
        client.authenticate().catch(() => {
            setLogin(null);
        });
        client.on("authenticated", (loginResult) => {
            setLogin(loginResult);
        });
        client.on("logout", () => {
            setLogin(null);
        });
    }, []);

    return (
        <div className="container">
            <Header login={login} />
            <Routes>
                <Route
                    path="/"
                    exact
                    element={login ? <Dashboard /> : <Navigate to="/login" />}
                />
                <Route
                    path="/login"
                    element={!login ? <Login /> : <Navigate to="/" />}
                />
                <Route
                    path="/register"
                    element={!login ? <Register /> : <Navigate to="/" />}
                />
            </Routes>
        </div>
    );
}

export default App;
