import React, { useState } from "react";
import client from "../utils/featherApp";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = {
            strategy: "local",
            email,
            password,
        };
        try {
            await client.authenticate(userData);
        } catch {
            console.log("Error Occurred");
        }
    };
    return (
        <>
            <section className="heading">
                <h1>Login</h1>
                <p>Please Login to your Account</p>
            </section>
            <section className="form">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="abc@xyz.com"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter Password"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <button className="btn btn-block">Login</button>
                    </div>
                </form>
            </section>
        </>
    );
};

export default Login;
