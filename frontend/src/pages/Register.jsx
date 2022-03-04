import React, { useState } from "react";
import client from "../utils/featherApp";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== password2) {
            console.log("Password dont match");
            return;
        } else {
            const userData = {
                name,
                email,
                password,
            };
            console.log(userData);
            try {
                await client.service("users").create(userData);
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <>
            <section className="heading">
                <h1>Register</h1>
                <p>Please Create an Account</p>
            </section>
            <section className="form">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter Name"
                            required
                        />
                    </div>
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
                        <input
                            type="password"
                            className="form-control"
                            value={password2}
                            onChange={(e) => setPassword2(e.target.value)}
                            placeholder="Confirm Password"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-block">Register</button>
                    </div>
                </form>
            </section>
        </>
    );
};

export default Register;
