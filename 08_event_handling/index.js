var vm1 = new Vue({
  el: '#app1',
  data: {
    counter: 0
  }
})
var vm2 = new Vue({
  el: '#app2',
  data: {
    name: 'Vue.js'
  },
  methods: {
    greet: function (event) {
      alert('Hello' + this.name)
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
})
var vm3 = new Vue({
  el: '#app3',
  methods: {
    warn: function (message, event) {
      if (event) event.preventDefault()
      alert(message)
    },
    sumbit: function () {
      alert('enter!!')
    }
  }
})
