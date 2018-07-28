
var vm1 = new Vue({
  el: '#example1',
  data: {
    isActive: true,
    hasError: false,
    classObject: {
      active: true,
      error: false
    }
  }
})

var vm2 = new Vue({
  el: '#example2',
  data: {
    classObject: {
      active: true,
      'text-danger': false
    }
  }
})

var vm3 = new Vue({
  el: '#example3',
  data: {
    isActive: true,
    hasError: false,
  },
  computed: {
    classObject: function () {
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal'
      }
    }
  }
})

var vm4 = new Vue({
  el: '#example4',
  data: {
    activeClass: 'active',
    errorClass: 'text-danger'
  }
})

var vm5 = new Vue({
  el: '#example5',
  data: {
    isActive: true,
    hasError: false,
    activeClass: 'active',
    errorClass: 'text-danger'
  }
})

Vue.component('my-component', {
  template: '<p class="foo bar">Hi</p>'
})

var vm6 = new Vue({
  el: '#example6',
  data: {
    isActive: true,
    hasError: false,
    errorClass: 'text-danger'
  }
})

var vm7 = new Vue({
  el: '#example7',
  data: {
    color: 'blue',
    fontSize: '30px',
    styleObject: {
      color: 'red',
      fontSize: '50px'
    }
  }
})
