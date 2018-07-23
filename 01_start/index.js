var app = new Vue({ 
  el: '#app',
  data: {
      message: 'Hello Vue!'
  }
});

var app2 = new Vue({ 
  el: '#app2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
});

var app3 = new Vue({
  el: '#app3',
  data: {
    seen: true
  }
})

var app4 = new Vue({
  el: '#app4',
  data: {
    todos: [
      { text: 'Learn Javascript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
})

var app5 = new Vue({
  el: '#app5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

var app6 = new Vue({
  el: '#app6',
  data: {
    message: 'Hello Vue.js!'
  }
})
