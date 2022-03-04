import React from "react";
import client from "../utils/featherApp";
const dateOptions = {
    hour: "2-digit",
    minute: "2-digit",
    weekday: "short",
    year: "2-digit",
    month: "short",
    day: "2-digit",
};
const dateConverter = (str) => {
    return new Date(str).toLocaleString("en-IN", dateOptions);
};
const TodoItem = ({ todo }) => {
    const handleComplete = () => {
        client.service("todos").patch(todo._id, {});
    };
    const handleDelete = () => {
        client.service("todos").remove(todo._id);
    };
    const isComplete = todo.completed ? "marked" : null;
    return (
        <div className="todo">
            <h2 className={`todo-text ${isComplete}`} onClick={handleComplete}>
                {todo.text}
            </h2>
            <button className="close" onClick={handleDelete}>
                X
            </button>
            <div className="dates">
                <div className="add-on">
                    Added on: {dateConverter(todo.createdAt)}
                </div>
                {todo.completed ? (
                    <div className="marked">
                        Completed on: {dateConverter(todo.updatedAt)}
                    </div>
                ) : (
                    <div className="unmarked">Unmarked</div>
                )}
            </div>
        </div>
    );
};

export default TodoItem;
