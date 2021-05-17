<template>
  <div>
    <v-chip
      v-if="chip1"
      class="ma-2"
      color="green"
      text-color="white"
      close
      @click:close="chip1 = false"
    >
      <v-avatar left>
        <v-icon>mdi-doctor</v-icon>
      </v-avatar>
      {{ providerInfo.name }}
    </v-chip>
  </div>
</template>

<script>
export default {
  props: ["providerInfo"],
  data() {
    return {
      chip1: true,
    };
  },
};
</script>
