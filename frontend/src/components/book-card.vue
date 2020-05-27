<script>
export default {
    name:'BookCard',
    props: ['book']
    
}
</script>

<template lang="pug">
  div.name {{ book.name }} {{ book.year }}
    
</template>