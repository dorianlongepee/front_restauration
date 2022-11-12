<template>
  <div class="accueil">
    <h1>Accueil</h1>

    <div class="container-plats">
      <Plat
          v-for="plat in plats"
          :key="plat._id"
          :name="plat.nom"
          :type="plat.type"
          :aliments="plat.aliments"
          :price="plat.prix"
      />
    </div>
  </div>
</template>

<script>
import Plat from "@/components/Plat";
import {PlatsApi} from "@/api/plats.api.ts";

export default {
  name: "Accueil",
  data(){
    return {
      plats : []
    }
  },
  components: {Plat},
  methods:{
    async getPlats(){
      this.plats = await PlatsApi.fetchPlats();
    }
  },
  async mounted() {
    await this.getPlats();
  }
}

</script>

<style scoped>

.container-plats{
  display: grid;
  gap: 16px;
  margin: auto;
  max-width: 1920px;
  align-self: center;
}

@media screen and (min-width:900px) {
  .container-plats{
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>