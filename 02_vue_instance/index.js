var obj = {
  foo: 'bar'
}

Object.freeze(obj)

new Vue({
  el: '#app1',
  data: obj
})

new Vue({
  el: '#app2',
  data: {
    hoge: 'hoge'
  },
  created: function () {
    console.log('created: hoge is ' + this.hoge)
  }
})
