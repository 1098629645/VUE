<template>
    <div>
        <the-login> </the-login>
        <!-- aquí puedo agregar cualquier componente -->
    </div>
    
</template>

<script>

import TheLogin from '../components/TheLogin.vue'


export default {
  
  name: "Login",

  components: {
    TheLogin
    },
    
    data(){
        return{
        }
    },

    methods:{
    }
}
</script>