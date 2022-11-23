<template>
  <v-col cols="12" lg="4">

    <v-card class="plat-card"
            :loading="loading"
            outlined
            :disabled="!dispo"
    >

      <template v-slot:progress>
        <v-progress-linear
            color="blue"
            height="10"
            indeterminate
            absolute
            background-color="light-blue lighten-5"
        ></v-progress-linear>
      </template>

      <v-img
          height="200"
          :src="image"
      ></v-img>

      <v-card-title tag="h2" class="title-card font-weight-medium text-h4 text-truncate d-inline-block" style="width: 100%">{{ name }}</v-card-title>

      <v-card-text>
        <v-row
            align="center"
            class="mx-0 mb-2"
        >
          <v-rating
              :value="4"
              color="amber"
              dense
              half-increments
              readonly
              size="15"
          ></v-rating>

          <div class="grey--text ms-4">
            4.0 (413)
          </div>
        </v-row>
        <div class="text-subtitle-1 text-overline"><span class="font-weight-bold text-h5 blue--text">{{ price }}€ </span> + livraison (0.99€)</div>
        <v-chip-group column>
          <v-chip color="grey"
                  text-color="white" v-for="aliment in aliments" :key="aliment._id">
            <v-avatar
                left
                class="grey darken-2"
            >
              {{aliment.quantite}}
            </v-avatar>
            {{aliment.nom}}
          </v-chip>
        </v-chip-group>
      </v-card-text>

      <v-card-actions>
        <v-btn
            color="blue lighten-2"
            text
            @click="reserve"
        >
          Ajouter au panier ->
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>

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
      image: {
        type: String,
        required: true
      },
      dispo:{
        type: Boolean,
        required: true
      }
    },
    data: () => ({
      disabled: false,
      loading: false,
    }),
    methods: {
      reserve () {
        this.loading = true
        setTimeout(() => (
            this.loading = false,
            this.$store.dispatch("incrementCart")
        ), 1300)
      },
    }

  })

</script>