<template>
  <div>
    <v-chip
      v-if="chip1"
      class="ma-2"
      color="red"
      text-color="white"
      close
      @click:close="chip1 = false"
    >
      <v-avatar left>
        <v-icon>mdi-bullseye-arrow</v-icon>
      </v-avatar>
      X-Ray
    </v-chip>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chip1: true,
    };
  },
};
</script>
