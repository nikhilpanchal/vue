import Vue from 'vue'
import App from './App'
import HelloWorld from './hello-world'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<HelloWorld />',
  components: {
    HelloWorld
  }
  // template: '<App/>',
  // components: { App }
})
