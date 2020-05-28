<script>
// @ is an alias to /src
import AuthorCard from '@/components/author-card'
import BookCard from '@/components/book-card.vue' 
import HelloWorld from '@/components/HelloWorld.vue'
import {mapState, mapActions } from 'vuex'


export default {
  name: 'Home',
  components: {
    HelloWorld,
    BookCard,
    AuthorCard
  },
  computed: {
    ...mapState(['counter','books', 'authors'])
  },
  methods: {
    ...mapActions([
     'incrementCounter','fetchBooks', 'fetchAuthors'
    ])
  },
  created(){
    this.incrementCounter()
    this.fetchBooks()
    this.fetchAuthors()
  }
}
</script>


<template lang="pug">
main 
  h2 Hello Mf 
  
  section
    button.increment-btn(@click="incrementCounter") Increment
    div {{ counter }}
  section
    book-card(v-for="book in books", :book="book") 
    author-card(v-for= "author in authors", :author="author")
    button.increment-btn(@click="incrementCounter") Increment
    div {{ counter }}

</template>

  <<style scoped>
  .increment-btn {
     color: darkcyan;
     padding: 10px;
     border-radius: 8px;
     background-color: white;
     border: 1px solid darkcyan;
     font-size: 14;
     font-weight: 600;
     cursor: pointer;
      margin-bottom: 20px;

  }
  .increment-btn:hover {
    background-color: darkcyan;
    color: white;

  }
  
  </style>



