<template>
  <div class="plat-card">
    <h2>{{ name }}</h2>
    <p>{{ type }} | {{ price }}€</p>
    <div v-for="aliment in aliments"
         class="aliment-badge"
         :key="aliment._id"
    >
      {{ alimentsList(aliment) }}
    </div>
  </div>
</template>

<script lang="ts">
  import {defineComponent} from "vue";

  export default defineComponent ({
    name: "Plat",
    props: {
      name: {
        type: String,
        required: true
      },
      type: {
        type: String,
        required: true
      },
      aliments: {
        type: Array,
        required: true
      },
      price: {
        type: Number,
        required: true
      },
    },
    methods: {
      alimentsList(aliment){
        return aliment.quantite + ' x ' + aliment.nom
      }
    }
  })
</script>

<style scoped>
  .plat-card{
    background-color: white;
    padding: 12px;
    border-radius: 8px;
    cursor: pointer;
  }
  .aliment-badge{
    display: inline-block;
    background: linear-gradient(45deg, #2ECC71, #27AE60);
    padding: 12px 16px;
    border-radius: 8px;
    margin: 8px 3px ;
    color: #fafafa;
    font-weight: bold;
    line-height: calc(1rem - 1px);
  }
</style>