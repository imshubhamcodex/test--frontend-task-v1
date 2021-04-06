<template>
  <div class="hello">
    <h1>Home</h1>
    <template>
  <div class="text-center">
    <v-btn
      class="mx-2"
      fab
      dark
      small
      color="primary"
    >
      <v-icon dark>
        mdi-minus
      </v-icon>
    </v-btn>

    <v-btn
      class="mx-2"
      fab
      dark
      small
      color="pink"
    >
      <v-icon dark>
        mdi-heart
      </v-icon>
    </v-btn>

    <v-btn
      class="mx-2"
      fab
      dark
      color="indigo"
    >
      <v-icon dark>
        mdi-plus
      </v-icon>
    </v-btn>

    <v-btn
      class="mx-2"
      fab
      dark
      color="teal"
    >
      <v-icon dark>
        mdi-format-list-bulleted-square
      </v-icon>
    </v-btn>

    <v-btn
      class="mx-2"
      fab
      dark
      large
      color="cyan"
    >
      <v-icon dark>
        mdi-pencil
      </v-icon>
    </v-btn>

    <v-btn
      class="mx-2"
      fab
      dark
      large
      color="purple"
    >
      <v-icon dark>
        mdi-android
      </v-icon>
    </v-btn>
  </div>
</template>
    <template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        md="4"
      >
        <v-skeleton-loader
          v-bind="attrs"
          type="card-avatar, article, actions"
        ></v-skeleton-loader>

        <v-skeleton-loader
          v-bind="attrs"
          type="date-picker"
        ></v-skeleton-loader>
      </v-col>

      <v-col
        cols="12"
        md="4"
      >
        <v-skeleton-loader
          v-bind="attrs"
          type="article, actions"
        ></v-skeleton-loader>

        <v-skeleton-loader
          v-bind="attrs"
          type="table-heading, list-item-two-line, image, table-tfoot"
        ></v-skeleton-loader>
      </v-col>

      <v-col
        cols="12"
        md="4"
      >
        <v-skeleton-loader
          v-bind="attrs"
          type="list-item-avatar, divider, list-item-three-line, card-heading, image, actions"
        ></v-skeleton-loader>

        <v-skeleton-loader
          v-bind="attrs"
          type="list-item-avatar-three-line, image, article"
        ></v-skeleton-loader>
      </v-col>
    </v-row>
  </v-container>
</template>
  </div>
</template>

<script>
export default {
   data: () => ({
      attrs: {
        class: 'mb-6',
        boilerplate: true,
        elevation: 2,
      },
    })
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
