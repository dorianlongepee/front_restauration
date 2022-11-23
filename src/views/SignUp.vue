<template>
  <div class="accueil">
    <v-container>
      <h1 class="text-h2 font-weight-bold my-10">Créer un compte</h1>

      <v-card>
        <v-card-text>
          <v-form v-model="user.isValid" @submit.prevent="registerForm">
            <v-text-field
                label="Prénom"
                v-model="user.prenom"
                :rules="[v => !!v || 'Un prénom est requis !']"
                required>

            </v-text-field>
            <v-text-field
                label="Nom"
                v-model="user.nom"
                :rules="[v => !!v || 'Un nom est requis !']"
                required>

            </v-text-field>
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
            <v-switch
                v-model="user.admin"
                :label="`Admin : ${user.admin.toString()}`"
            ></v-switch>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" :disabled="!user.isValid" @click="registerForm">S'inscrire</v-btn>
        </v-card-actions>
      </v-card>

      <v-snackbar
        v-model="snackbar"
        :timeout="timeout"
        :color="snackbarColor"
      >
        {{ text }}
      </v-snackbar>

    </v-container>
  </div>
</template>

<script>
import {UsersApi} from "@/api/users.api.ts";
import router from "@/router";

export default {
  name: "SignUp",
  data : () => ({
    user : {
      email: null,
      password: null,
      prenom: null,
      nom: null,
      isValid: true,
      admin: false
    },
    snackbar: false,
    text: null,
    timeout: 2000,
    snackbarColor: "blue"
  }),
  methods:{
    registerForm(){
      let _this=this;
      const res = UsersApi.signup(this.user);

      res.then(function(response){
        _this.snackbar = true
        if(response.status === 201 ){
          _this.text = response.data.message

          _this.$store.state.userLoggedin = true;
          _this.$store.state.user.nom = _this.user.nom;
          _this.$store.state.user.prenom = _this.user.prenom;
          _this.$store.state.user.isAdmin = _this.user.admin;

          router.push('/');
        }

        if(response.status === 400){
          _this.snackbarColor = "red"

          if(response.data.error.keyValue.mail) {
            _this.text = "Erreur lors de la création : Email déjà utilisé";
          }
        }
      })
    }
  }
}
</script>

<style scoped>

</style>