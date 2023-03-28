import "./App.css";
import "./styles.scss";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { currentUser } = useContext(AuthContext);
  // console.log(currentUser);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
    // <div>
    //   <Register />
    // </div>
  );
}

// https://www.youtube.com/watch?v=k4mjF4sPITE&t=440s  1:34m
export default App;
