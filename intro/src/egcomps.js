import Vue from 'vue'

Vue.component('my-button', {
    template: '<button v-on:click=incrementCounter>{{this.counter}}</button>',
    data: function() {
        return {
            counter: 0
        }
    },
    methods: {
        incrementCounter: function (e) {
            this.counter++;
            this.$emit("increment");
        }
    }
});

new Vue({
    el: '#egcomponents',
    data: {
        total: 0
    },
    methods: {
        incrementTotal: function (e) {
            this.total++;
        }
    }
})