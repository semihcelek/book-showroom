<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {mapState, mapActions } from 'vuex'


export default {
  name: 'Home',
  components: {
    HelloWorld
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
   div {{ counter }}
   div {{ books }}
  


</template>



