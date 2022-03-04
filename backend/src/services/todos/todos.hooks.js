const updateTodo = () => {
    return async (context) => {
        const { app } = context;
        const todo = await app.service("todos").get(context.id);
        context.data = {
            ...todo,
            completed: !todo.completed,
        };
        return context;
    };
};

module.exports = {
    before: {
        all: [],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [updateTodo()],
        remove: [],
    },

    after: {
        all: [],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: [],
    },

    error: {
        all: [],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: [],
    },
};
