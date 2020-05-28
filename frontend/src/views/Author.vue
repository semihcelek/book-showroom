<script>
import AuthorCard from '@/components/author-card.vue'
import { mapState, mapActions } from 'vuex'

export default {
    name:'Authors',
    components: {
        AuthorCard
    },
computed: {
    ...mapState(['authors'])
},
methods: {
    ...mapActions(['fetchAuthors'])
},
created(){
    this.fetchAuthors()
}
}

</script>



<template lang="pug">
 article
   h1 Our Best Writers !!
   author-card(v-for="author in authors", :author="author", :key="author.id")

   
</template>



<style>

</style>