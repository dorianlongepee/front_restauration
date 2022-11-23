<template>
  <div id="app">
    <v-app id="inspire" style="font-family: Inter, sans-serif">
        <v-navigation-drawer
            v-model="drawer"
            :mini-variant.sync="mini"
            permanent
            clipped
        >
          <v-list-item class="px-2">
              <v-avatar color="blue" size="40" class="me-3">
                <v-icon dark>
                  mdi-account-circle
                </v-icon>
              </v-avatar>

            <v-list-item-title>{{ getFullname }}</v-list-item-title>

            <v-btn
                icon
                @click.stop="mini = !mini"
            >
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
          </v-list-item>

          <v-divider></v-divider>

          <v-list dense>
            <v-list-item
                v-for="item in getVisibleIfLoggedOut"
                :key="item.title"
                link
            >
              <v-list-item-icon>
                <v-badge
                    :content="getCartCount"
                    :value="getCartCount"
                    color="blue"
                    overlap
                    v-if="item.title === 'Panier'"
                >
                  <v-icon>{{ item.icon }}</v-icon>
                </v-badge>

                <v-icon v-else>{{ item.icon }}</v-icon>

              </v-list-item-icon>

              <v-list-item-content style="padding: 0; height: 40px;">
                <router-link :to="item.link" style="color: inherit" class="text-decoration-none fill-height d-flex"><v-list-item-title class="align-self-center">{{ item.title }}</v-list-item-title></router-link>
              </v-list-item-content>
            </v-list-item>

          </v-list>
        </v-navigation-drawer>

      <router-view class="container-router"></router-view>
    </v-app>
  </div>
</template>

<script>
export default {
  data () {
    return {
      drawer: true,
      items: [
        { title: 'Accueil', icon: 'mdi-home', link: '/', visibleLoggedOut : true, visibleLoggedIn: true},
        { title: 'Créer un compte', icon: 'mdi-account-plus', link: '/signup', visibleLoggedOut : true, visibleLoggedIn: false},
        { title: 'Se connecter', icon: 'mdi-account', link: '/signin', visibleLoggedOut : true, visibleLoggedIn: false},
        { title: 'Mon compte', icon: 'mdi-account-edit', link: '/account', visibleLoggedOut : false, visibleLoggedIn: true},
        { title: 'Panier', icon: 'mdi-cart', link: '/cart', visibleLoggedOut : true, visibleLoggedIn: true},
      ],
      mini: true,
    }
  },
  computed : {
    getFullname(){
      return this.$store.state.userLoggedin ? this.$store.state.user.prenom + " " + this.$store.state.user.nom : "Invité"
    },
    getCartCount(){
      return this.$store.state.cartItems
    },
    getVisibleIfLoggedOut(){
      let tabNolog = [];
      let tabLog = [];

      if(!this.$store.state.userLoggedin) {
        this.items.forEach(item => {
          if (item.visibleLoggedOut) {
            tabNolog.push(item)
          }
        })
        return tabNolog
      }

      this.items.forEach(item => {
        if (item.visibleLoggedIn) {
          tabLog.push(item)
        }
      })
      return tabLog
    }
  }
}
</script>
<style>

.v-application{
  font-family: Inter, sans-serif;
  font-size: 10px;
}

.v-application--wrap{
  flex-direction: row;
  background-color: #fafafa;
}

.container-router{
  margin: 1rem auto;
}

router-link {
  color: #212121;
  text-decoration: none;
}
</style>
