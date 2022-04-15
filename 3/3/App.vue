<template>
  <div class="my-app">
    <b-container>
      <TheCardAdd @add="add" />
      <CardPlayer name="Darek" lastName="Nowy" />
    </b-container>
  </div>
</template>

<script>
import TheCardAdd from "./components/TheCardAdd";
import CardPlayer from "./components/CardPlayer";
export default {
  components: {
    TheCardAdd,
    CardPlayer,
  },
  methods: {
    add(userData) {
      this.axios.post(
        "https://adv-vue-a0d31-default-rtdb.firebaseio.com/players.json",
        // {
        //   name: userData.name,
        //   lastName: userData.lastName
        // }
        userData
      ).then(response => {
        console.log('Sukces', response);
      })
      .catch(err => console.log('Err', err););
    },
    sync add2(userData) {
      try {
        let response = await this.axios.post("https://adv-vue-a0d31-default-rtdb.firebaseio.com/players.json", userData); //póki to się nie skończy to kod nie wywoła się dalej -> await
        console.log('Async success', response);
      } catch(err) {
        console.log('Async error', err);
      }
    }
  },
};
</script>

<style>
.my-app {
  padding: 50px 0;
}
</style>