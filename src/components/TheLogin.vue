<template>
    
    <div>
        <div class="container">
            <div class="mb-3 row">
                <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                <input v-model="login.email" type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                </div>                
            </div>
            <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10">
                    <input v-model="login.password" type="password" class="form-control" id="inputPassword">
                </div>
            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button @click="iniciarsesion" class="btn btn-primary me-md-2" type="button">Iniciar Sesion</button>
            </div>
                <pre>
                    {{$data}}
                </pre>
        </div>
    </div>
    
</template>
<script>
import swal from 'sweetalert';

export default {
    name: "TheLogin",
    
    data(){
        return{
            login: {
                email: '',
                password:'',
            }
        }
    },

 //seguro en methods colocaste function, y allí no se nombran funciones como tal D:si tienes alguna función, le quitas el function y listo.
       
    methods: {
        
        async iniciarsesion() {
            
            try{
                let response = await this.$http.post('/api/usuario/login', this.login);
                let token = response.data.tokenReturn;
                let usuario = response.data.user;
                if (token){
                    localStorage.setItem('token', token);
                    localStorage.setItem('usuario', JSON.stringify(usuario));
                    swal("Exito!", "Ha iniciado sesion correctamente.", "success");
                    this.$router.push('/home')
                }
            } catch (error) {
                swal("Error!", "clave o contraseña incorrecta", "error");                
                }
        }
    }
}

</script>