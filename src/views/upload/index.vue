<template>
  <div>{{name}}</div>
</template>
<script>
export default {
  data() {
    return {
      name: "串串香",
    };
  },
  mounted() {
    console.log(this.cc.a)
  },
};
</script>
<style scoped></style>
