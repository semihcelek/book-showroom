<script>
// @ is an alias to /src
import BookCard from '@/components/book-card.vue' 
import HelloWorld from '@/components/HelloWorld.vue'
import {mapState, mapActions } from 'vuex'


export default {
  name: 'Home',
  components: {
    HelloWorld,
    BookCard
  },
  computed: {
    ...mapState(['counter','books'])
  },
  methods: {
    ...mapActions([
     'incrementCounter','fetchBooks'
    ])
  },
  created(){
    this.incrementCounter()
    this.fetchBooks()
  }
}
</script>


<template lang="pug">
h2 Hello Mf 
   
  button(@click="incrementCounter") Increment
  div {{ counter }}
   
  book-card(v-for="book in books", :book="book") 
  


</template>



