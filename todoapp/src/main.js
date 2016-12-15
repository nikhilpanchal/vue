import Vue from 'vue'
import LocalStorage from './services/localstore'
import TodoFilters from './services/todofilters'
// import App from './App''

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })

var localStore = new LocalStorage("vue-2.0-todos");
var todoFilters = new TodoFilters();

new Vue({
    el: '.todoapp',
    // Initial app state
    data: {
        newTodo: "",
        todos: localStore.fetch(),
        visibility: "all"
    },

    methods: {
        addTodo: function(e) {
            let value = e.target.value && e.target.value.trim();

            if(!value) {
                return;
            }

            this.todos.push({
                id: 1,
                message: value,
                completed: false
            });

            // Blank out the todo
            e.target.value = '';
        },
        toggleTodo: function(todo) {
            console.log(`Todo status ${todo}`);
            todo.completed = !todo.completed;
        },
        deleteTodo: function(todo) {
            let index = this.todos.indexOf(todo);
            this.todos.splice(index, 1);
        },
        filterTodo: function(mode) {
            console.log(`The filter mode ${mode}`);
        },
        toggleAllTodos: function () {
            this.todos.forEach((todo) => todo.completed = !todo.completed);
        }
    },

    filters: {
        pluralize: function (n) {
            return (n > 1) ? "items" : "item";
        }
    },

    computed: {
        // Nice little feature
        // functions that can store pre-cached computations based on values in the data object
        // If the dependent values in data change, this function will be called automatically
        // to create the new computed value.
        filteredTodos: function () {
            switch (this.visibility) {
                case 'active':
                    return todoFilters.active(this.todos);
                    break;
                case 'completed':
                    return todoFilters.completed(this.todos);
                    break;
                default:
                    return todoFilters.all(this.todos);
            }
        },
        remainingTodos: function () {
            return todoFilters.active(this.todos).length;
        }
    }
});