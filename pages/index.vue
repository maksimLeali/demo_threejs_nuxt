<template lang="pug">
.content
  //- button(v-for="(obj, index) in objects" :key="index" @click="$stage.lookAt({ index, zoom:obj.zoom })" ) {{ obj.name }}

</template>

<script>
export default {
  data() {
    return {
      // objects: [
      //   {
      //     name: "Cube",
      //     zoom: 1.5
      //   },
      //   {
      //     name: "Ico"
      //   },
      //   {
      //     name: "Sphere",
      //     zoom: 1.8
      //   }
      // ]
    };
  },
  mounted() {
    console.log(this.$stage);
  }
};
</script>

<style>
.content {
  position: relative;
  z-index: 10
  ;
}
</style>