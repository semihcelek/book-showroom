<script>
export default {
    name:'BookCard',
    props: ['book']
    
}
</script>

<template lang="pug">
  article.card 
    img(:src="`http://picsum.photos/300/200?random=${book._id}`", alt="")
    h1 {{ book.name }} 
    h2   {{ book.year }}
    
</template>

<style scoped>
.card {
   display: inline-block;
   text-align: left;
   padding: 20px;
   border: 1px solid #ddd ;
   border-radius: 3px;
   margin: 20px;


 }
</style>