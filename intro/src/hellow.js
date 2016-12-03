import Vue from 'vue'
import axios from 'axios'


// Vue.component('todo-item', {
//     props: ['text'],
//     template: '<li>{{text}}</li>'
// });

var todoItem = {
    props: {
        text: {
            type: String,
            required: true
        }
    },
    template: '<li>{{this.text}}</li>'
};

new Vue({
	el: "#app",
	data: {
		title: "Hello, World!",
		message: "This is my first Vue",
		spanTitle: `Page reloaded on new ${new Date()}`,
		show: false,
        todos: [
            {text: "Learn Vue"},
            {text: "Understand how components work"},
            {text: "See how styles can be inserted"},
            {text: "This is a test"}
        ],
        modelText: "",
        question:"",
        answer: "Nothing asked yet"
	},
    // All components used here are available only within the scope of this root Vue instance.
    // This is different from creating a component using Vue.component() which creates a 
    // global app-wide component
    components: {
        'todo-item': todoItem
    },
    methods: {
        showHiddenText: function (e) {
            this.show = !this.show;
        },
        reverseMessage: function (e) {
            this.message = this.message.split('').reverse().join('');
        },
        getAnswer: function () {
            let self = this;
            if(this.question.indexOf('?') < 0) {
                this.answer = "The question must end with a question mark";
                return;
            }

            this.answer = "Thinking...";

            axios.get("https://yesno.wtf/api")
                .then(function(response) {
                    self.answer = response.data.answer;
                })
                .catch(function(error) {
                    console.error(`Failed: ${error}`);
                });
        }
    },
    computed: {
        reversedMessage: function () {
            return this.message.split('').reverse().join('');
        }
    },
    watch: {
        question: function (newVal) {
            this.getAnswer();
        }
    },
    filters: {
        capitalize: function (val) {
            return val.toUpperCase();
        }
    },
    beforeCreate: function() {

    },
    created: function () {
        // This refers to the vue instance.
        // console.log(`Root instance created. The show flag is ${this.show}...`);
    },
    beforeMount: function () {

    },
    mounted: function () {
        // console.log(`Root component mounted...`);
    },
    beforeUpdate: function () {
        // console.log(`Before root component updated...`);
    },
    updated: function () {
        // console.log(`Root component updated...`);
    },
    beforeDestroy: function () {

    },
    destroyed: function () {
        // console.log(`Root component destroyed...`);
    }
});
