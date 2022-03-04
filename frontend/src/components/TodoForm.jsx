import React, { useState } from "react";
import client from "../utils/featherApp";

const TodoForm = () => {
    const [text, setText] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        client
            .service("todos")
            .create({ text })
            .then(() => {
                setText("");
            });
    };
    return (
        <section className="form">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Enter Todo"
                        className="form-control"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <button className="btn btn-block">Submit</button>
                </div>
            </form>
        </section>
    );
};

export default TodoForm;
