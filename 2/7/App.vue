<template>
  <b-container>
    <b-alert v-shadow show> Mój alert </b-alert>
    <b-alert v-shadow="'rgba(255, 0, 0, 0.75)'" show> Mój alert </b-alert>
    <b-alert v-shadow="color" show>
      Kolor: <input type="text" v-model="color" />
    </b-alert>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      color: "rgba(255,0,255,0.75)",
    };
  },
  directives: {
    shadow(el, binding) {
      const color = binding.value ? binding.value : "rgba(0,0,0,0.75)";
      el.style.boxShadow = `10px 10px 36px 0px ${color}`;
    },
  },
};
</script>

<style>
</style>