<template>
  <div class="accueil">
    <v-container>
    <h1 class="text-h2 font-weight-bold my-10">{{ mainTitle }}</h1>

    <v-row>
      <Plat
          v-for="plat in plats"
          :key="plat._id"
          :name="plat.nom"
          :type="plat.type"
          :aliments="plat.aliments"
          :price="plat.prix"
          :image="plat.image"
          :dispo="plat.disponible"
      />
    </v-row>
    </v-container>
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
  components: { Plat },
  methods:{
    async getPlats(){
      this.plats = await PlatsApi.fetchPlats();
    }
  },
  async beforeMount() {
    await this.getPlats();
  },
  computed:{
    mainTitle(){
      return this.$store.state.userLoggedin ? `👋🏼 On mange quoi, ${this.$store.state.user.prenom} ?` : "🤗 Bonjour toi"
    }
  }
}

</script>