export default class TodoFilters {
    all(todos) {
        return todos;
    }

    completed(todos) {
        return todos.filter((todo) => todo.completed);
    }

    active(todos) {
        return todos.filter((todo) => !todo.completed);
    }
}