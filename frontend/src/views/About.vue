<script>
import AuthorCard from '@/components/author-card.vue'
import { mapState, mapActions } from 'vuex'

export default {
    name:'About',
    components: {
        AuthorCard
    },
computed: {
    ...mapState(['author'])
},
methods: {
    ...mapActions(['fetchAuthor'])
},
created(){
    this.fetchAuthor(this.$route.params.id)
}
}

</script>



<template lang="pug">
 article
   h1 Our Best Writers !!
   author-card(:author="author")

   
</template>



<style>

</style>