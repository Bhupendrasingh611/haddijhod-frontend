import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    
const adminUser = import.meta.env.VITE_ADMIN_USERNAME;
const adminPass = import.meta.env.VITE_ADMIN_PASSWORD;

if (username === adminUser && password === adminPass) {
      localStorage.setItem("isAdminLoggedIn", "true");
      navigate("/orders");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card shadow border-0">
            <div className="card-body p-4">
              <h3 className="text-center mb-4">Admin Login</h3>

              <form onSubmit={handleLogin}>
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />

                <input
                  type="password"
                  className="form-control mb-3"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button className="btn btn-dark w-100" type="submit">
                  Login
                </button>
              </form>

              <p className="text-center text-muted mt-3 mb-0">
                Default: admin / admin123
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;