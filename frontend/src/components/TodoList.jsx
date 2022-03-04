import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import client from "../utils/featherApp";
const TodoList = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
    
        const fetchTodos = async () => {
            const todosData = await client
                .service("todos")
                .find({ query: { $sort: "-createdAt" } });
            setTodos(todosData.data);
        };
        fetchTodos();
        client.service("todos").on("created", (todo) => {
            fetchTodos();
        });
        client.service("todos").on("patched", (todo) => {
            fetchTodos();
        });
        client.service("todos").on("removed", (todo) => {
            fetchTodos();
        });
    }, []);

    return (
        <section className="todos">
            {todos.length > 0 ? (
                todos.map((todo) => <TodoItem key={todo._id} todo={todo} />)
            ) : (
                <h2>No Todos Set. Please Add One</h2>
            )}
        </section>
    );
};

export default TodoList;
