<template>
  <div id="app">
    <AsyncQuery/>  
    <div>Tekst: <strong>{{test}}</strong> <BaseInput v-model="test"/> </div>
    <SquareToCircle/>
  </div>
</template>

<script>
import AsyncQuery from './components/Features/AsyncQuery.js'
import BaseInput from './components/Features/BaseInput.js'
import SquareToCircle from './components/Features/SquareToCircle.js'

export default {
  name: 'app',
  data(){
    return {
      test: null
    }
  },
  components: {
    AsyncQuery,
    BaseInput,
    SquareToCircle
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap; 
}

.special-square {
        width: 100px;
        height: 100px;
        transition: 1s;
        will-change: border-radius;
        background: red;
        
    }

    .--toCircle {
        border-radius: 50%;
    }

    .--toBlue{
        background: blue;
    }
</style>