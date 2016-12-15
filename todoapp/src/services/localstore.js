

export default class LocalStorage {
    constructor(storageKey) {
        // Constructor.
        this.STORAGE_KEY = storageKey;
    }
    fetch() {
        console.log("Retrieving stuff from localstore");
        let todos = JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
        todos.forEach((todo, index) => {
            todo.id = index;
        });

        return todos;
    }

    store(todos) {
        console.log("Storing stuff to localstore");
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(todos));
    }

}