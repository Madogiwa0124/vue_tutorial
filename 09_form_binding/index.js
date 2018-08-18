var vm1 = new Vue({
  el: '#app1',
  data: {
    message1: "",
    message2: "",
    checked: false,
    checkedNames: [],
    picked: "",
    selected: "",
    options: [
      { text: "One", value: "A" },
      { text: "Two", value: "B" },
      { text: "Three", value: "C" },
    ]

  }
})

var vm2 = new Vue({
  el: '#app2',
  data: {
    toggle: '',
    pick: '',
    pick_val: 'hoge',
    selected: '',
    msg: '',
    age: 0
  }
})
