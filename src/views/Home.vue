<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="logout" type="button" class="btn btn-danger">Log Out</button>
  </div>
</template>

<script>
import swal from 'sweetalert';
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods:{
    logout(){
      localStorage.removeItem("token");
      swal("Sesion cerrada", "Te esperamos pronto.", "info");
      this.$router.push('/')
    }
  }
}
</script>
