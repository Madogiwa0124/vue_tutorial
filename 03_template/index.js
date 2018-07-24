let data1 = {
  msg: 'hello vue!!',
  html: '<span style="color: red;">red text<span>',
  dynamicId: 'hoge',
  disabled: true
}
new Vue({
  el: '#app1',
  data: data1
})

let data2 = {
  seen: true,
  url: 'https://google.com'
}
new Vue({
  el: '#app2',
  data: data2,
  methods: {
    flashAleart() {
      alert('hoge!!')
    }
  }
})
