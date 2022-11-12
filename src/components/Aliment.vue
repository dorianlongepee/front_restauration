<template>
  <div class="aliment-card">
    <h2>{{name}}</h2>
    <p>{{type}}</p>
    <b>{{quantity}}</b>
  </div>
</template>


<script type="ts">
  import {defineComponent} from "vue";

  export default defineComponent({
    name: "Aliment",
    props: {
        name: String,
        type: String,
        quantity: Number,
    }
  })
</script>


<style scoped>

</style>