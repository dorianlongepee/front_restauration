<template>
  <v-container>
    <h1 class="text-h2 font-weight-bold my-10">Mon compte</h1>

    <v-card>
      <v-card-title>Infos de mon profil</v-card-title>
      <v-card-text v-if="this.$store.state.user.isAdmin">
        Mode admin
      </v-card-text>

      <v-card-text v-else>
        Mode client
      </v-card-text>
      <v-card-actions>
        <v-btn @click="disconnect" outlined class="me-2">Se déconnecter</v-btn>
        <v-btn @click="deleteAccount" color="error" outlined class="mx-2" v-if="! this.$store.state.user.isAdmin">Supprimer mon compte</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import {UsersApi} from "@/api/users.api.ts";
import router from "@/router";

export default {
  name: "Account",
  methods:{
    disconnect(){
      let _this = this
      UsersApi.logout();
      _this.$store.state.userLoggedin = false;
      _this.$store.state.nom = null;
      _this.$store.state.prenom = null;
      router.push('/')
    }
  }
}
</script>

<style scoped>

</style>