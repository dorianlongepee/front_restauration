<template>
  <div class="plat-card">
    <div class="image-card">
    </div>
    <div>
      <h2>{{ name }}</h2>
      <p class="price-card">{{ type }} - {{ price }}€</p>
      <Aliment v-for="aliment in aliments"
               :aliment="aliment"
               class="aliment-badge"
               :key="aliment._id"
      />
    </div>
  </div>
</template>

<script lang="ts">
  import {defineComponent} from "vue";
  import Aliment from "../components/Aliment"

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
    components:{
      Aliment
    }
  })
</script>

<style scoped>
  .plat-card{
    background-color: white;
    padding: 12px;
    border-radius: 8px;
    cursor: pointer;
    text-align: left;
    display: flex;
  }

  .plat-card .price-card,
  .plat-card h2{
    margin: .8rem .4rem ;
  }

  .image-card{
    background-image: url("../assets/hamburger.png") ;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    height: 5rem;
    width: 5rem;
    align-self: center;
  }

  .aliment-badge{
    display: inline-block;
    background: linear-gradient(45deg, #2ECC71, #27AE60);
    padding: .8rem 1.2rem;
    border-radius: .6rem;
    margin: .4rem ;
    color: #fafafa;
    font-weight: bold;
    line-height: calc(1rem - 1px);
  }
</style>