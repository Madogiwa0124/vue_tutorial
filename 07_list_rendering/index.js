var vm1 = new Vue({
  el: '#app1',
  data: {
    parentMassage: 'Foo',
    items: [
      { message: 'hoge' },
      { message: 'fuga' },
      { message: 'piyo' }
    ]
  }
})


var vm2 = new Vue({
  el: '#app2',
  data: {
    object: {
      firstName: 'Hoge',
      lastName: 'Fuga',
      age: '10'
    }
  }
})

var vm3 = new Vue({
  el: '#app3',
  data: {
    parentMassage: 'Foo',
    items: [
      { message: 'hoge' },
      { message: 'fuga' },
      { message: 'piyo' }
    ]
  }
})

var vm4 = new Vue({
  el: '#app4',
  data: {
    numbers: [ 1, 2, 3, 4, 5 ]
  },
  computed: {
    evenNumbers: function () {
      return this.numbers.filter(function (number) {
        return number % 2 === 0
      })
    }
  },
  methods: {
    even: function (numbers) {
      return numbers.filter(function (number) {
        return number % 2 === 0
      })
    }
  }
})

var vm5 = new Vue({
  el: '#app5'
})

var vm6 = new Vue({
  el: '#app6',
  data: {
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    isActive: true
  },
  methods: {
    isOdd: function (num) {
      return num % 2 == 0 
    }
  }
})

Vue.component('todo-item', {
  template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">Remove</button>\
    </li>\
  ',
  props: ['title']
})

var vm7 = new Vue({
  el: '#todo-list-example',
  data: {
    newTodoText: '',
    todos: [
      {
        id: 1,
        title: 'Do the dishes',
      },
      {
        id: 2,
        title: 'Take out the trash',
      },
      {
        id: 3,
        title: 'Mow the lawn'
      }  
    ],
    nextTodoId: 4
  },
  methods: {
    addNewTodo: function () {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      })
      this.newTodoText = ''
    }
  }
})

