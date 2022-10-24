<template lang="pug"> 
  .main
    .stage.fixed.outline-none
    Nuxt.relative.z-10
</template>

<script>
export default {
    
}
</script>

<style >
.stage{
    outline: 0;
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: #e2e8f0;
    position: fixed;
        overflow: hidden;
    margin: 0px;
}
</style>