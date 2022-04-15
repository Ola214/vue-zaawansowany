<template>
  <b-container>
    <b-alert v-my-on:click="click" show> Mój alert </b-alert>
  </b-container>
</template>

<script>
export default {
  methods: {
    click() {
      alert("Clicked!");
    },
  },
};
</script>

<style>
</style>