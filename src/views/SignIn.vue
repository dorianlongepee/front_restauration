<template>
  <div class="accueil">
    <v-container>
      <h1 class="text-h2 font-weight-bold my-10">Se connecter</h1>

      <v-card>
        <v-card-text>
          <v-form v-model="isValid" @submit.prevent="loginForm">
            <v-text-field
                label="Email"
                v-model="user.email"
                :rules="[v => !!v || 'Un email est requis !']"
                required>

            </v-text-field>
            <v-text-field
                label="Password"
                v-model="user.password"
                type="password"
                :rules="[v => !!v || 'Un mot de passe est requis !']"
                required
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" :disabled="!isValid" @click="loginForm">S'inscrire</v-btn>
        </v-card-actions>
      </v-card>

    </v-container>
  </div>
</template>

<script>
import {UsersApi} from "@/api/users.api.ts";
import router from "@/router";

export default {
  name: "SignUp",
  data : () => ({
    user :{
      email: null,
      password: null,
    },
    isValid: true,
  }),
  methods:{
    async loginForm(){
      let _this=this;
      UsersApi.login(this.user)
      .then((response) => {
        console.log(response);
        _this.$store.state.userLoggedin = true;
        _this.$store.state.user.nom = response.nom;
        _this.$store.state.user.prenom = response.prenom;
        _this.$store.state.user.isAdmin = response.admin;
        router.push('/');
      })
    }
  }
}
</script>

<style scoped>

</style>