Vue.component('button-counter', {
  data: function () {
    return { count: 8 }
  },
  template: '<button @click="count++">You clicked me {{count}} times </button>'
})

Vue.component('blog-post', {
  props: ['post'],
  template: `
  <div class="blog-post">
    <h3>{{ post.title }}</h3>
    <div v-html="post.content"></div>
    <button @click="$emit('enlarge-text')">
      Enlarge text
    </button>
  </div>
  `
})

Vue.component('custom-input', {
  props: ['value'],
  template: `
    <input
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
  `
})

new Vue({
  el: '#components-demo',
  data: {
    posts: [
      { id: 1, title: 'My journey with vue1', content: '<b>content 1</b>' },
      { id: 2, title: 'My journey with vue2', content: '<i>content 2</i>' },
      { id: 3, title: 'My journey with vue3', content: 'content 3' }
    ]
  }
})

new Vue({
  el: '#blog-posts-events-demo',
  data: {
    posts: [
      { id: 1, title: 'My journey with vue1', content: '<b>content 1</b>' },
      { id: 2, title: 'My journey with vue2', content: '<i>content 2</i>' },
      { id: 3, title: 'My journey with vue3', content: 'content 3' }
    ],
    postFontSize: 1.5,
    searchText: ''
  },
  methods: {
    onEnlargeText: function (enlargeAmount) {
      this.postFontSize += enlargeAmount
    }
  }
})

new Vue({
  el: '#app1',
})
