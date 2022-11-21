<template>
<p>{{ aliment.quantite + " x " + aliment.nom }}</p>
</template>

<script>
export default {
  name: "Aliment",
  data(){
    return {
       alimentObj : {}
    }
  },
  props: {
    aliment: {
      type: Object,
      required: true
    }
  }

}
</script>

<style scoped>

</style>