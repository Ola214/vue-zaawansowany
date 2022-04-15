<template>
  <b-container>
    <b-alert show>
      Default Alert
      <div v-font-size="12 + 20">Wielki tekst</div>
      Wielkość tekstu: <input type="text" v-model="fontSize" />
    </b-alert>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      fontSize: 25,
    };
  },
};
</script>

<style>
</style>