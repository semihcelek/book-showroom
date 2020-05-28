<script>
export default {
    name:'AuthorCard',
    props: ['author']
    
}
</script>

<template lang="pug">
div.card {{author.name}} {{author.age}}

    
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