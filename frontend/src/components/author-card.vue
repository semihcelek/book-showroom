<script>
export default {
    name:'AuthorCard',
    props: ['author'],
    computed: {
      authorUrl() {
        return `/author/${this.author._id}`
      }
    }
    
}
</script>

<template lang="pug">
article.card 
  img(:src="`http://picsum.photos/300/200?random=${author._id}`", alt="")
  h1 
           router-link(:to="authorUrl") {{author.name}}

  h2 {{author.age}}

    
</template>

<style scoped>
.card {
   display: inline-block;
   text-align: left;
   padding: 20px;
   border: 1px;
   border-radius: 3px;
   margin: 20px;


 }
</style>