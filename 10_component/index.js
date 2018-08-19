Vue.component('button-counter', {
  data: function () {
    return { count: 8 }
  },
  template: '<button @click="count++">You clicked me {{count}} times </button>'
})

Vue.component('blog-post', {
  data: function () {
    return {
      postFontSize: 1.5
    }
  },
  props: ['post'],
  methods: {
    onEnlargeText: function (enlargeAmount) {
      this.postFontSize += enlargeAmount
    }
  },
  template: `
  <div class="blog-post"  :style="{ fontSize: postFontSize + 'em' }">
    <h3>{{ post.title }}</h3>
    <div v-html="post.content"></div>
    <button @click="onEnlargeText(0.1)">
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
    searchText: ''
  }
})

new Vue({
  el: '#app1',
})
