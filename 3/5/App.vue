<template>
  <div class="my-app">
    <b-container>
      <TheCardAdd @add="add" />

      <transition name="fade" mode="out-in">
        <div key="1" v-if="loading" class="d-flex justify-content-center my-5">
          <b-spinner variant="primary" />
        </div>

        <b-row key="2" v-else>
          <b-col sm="3" :key="nodeId" v-for="(player, nodeId) in players">
            <CardPlayer
              @delete="remove"
              :name="player.name"
              :lastName="player.lastName"
              :nodeId="nodeId"
            />
          </b-col>
        </b-row>
      </transition>
    </b-container>
  </div>
</template>

<script>
import TheCardAdd from "./components/TheCardAdd";
import CardPlayer from "./components/CardPlayer";
export default {
  data() {
    return {
      loading: true,
      players: [],
    };
  },
  components: {
    TheCardAdd,
    CardPlayer,
  },
  methods: {
    async add(userData) {
      try {
        let {data} = await this.axios.post(
          "https://adv-vue.firebaseio.com/players.json",
          userData
        );
        // this.players[data.name] = userData; - nie działa
        this.$set(this.players, data.name, userData);
      } catch (e) {
        console.log("Async Error", e);
      }
    },
    async remove(nodeId) {
      try {
        if(this.players[nodeId] === undefined) {
          throw 'Node doesn\'t exist';
        }
        await let response = await this.axios.delete(
          `https://adv-vue.firebaseio.com/players/${nodeId}.json`
        );
        // delete this.players[nodeId];
        this.$delete(this.players, nodeId);
      } catch (e) {
        console.log("Async Error", e);
      }
    },
  },
  async created() {
    try {
      let { data } = await this.axios(
        "https://adv-vue.firebaseio.com/players.json"
      );
      this.players = data;
      this.loading = false;
    } catch (e) {
      console.log("Async Error", e);
    }
  },
};
</script>

<style>
.my-app {
  padding: 50px 0;
}

/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>