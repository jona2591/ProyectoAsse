<template>
  <div class="container">
    <div class="row">
    </div>
    <div class="row justify-content-center">
      <div class="col-md-4">
        <div class="box-login bg-dark">
        <img class="logo" src="../assets/Imagen/Logo_Pereira2.jpg" alt="">
          <form>
            <div class="form-group mt-2">
              <label for="email2">Direccion de Email</label>
              <input
                type="email"
                class="form-control"
                id="email2"
                aria-describedby="emailHelp"
                v-model="email2"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Contraseña</label>
              <input type="password" class="form-control" id="password2" v-model="password2" />
            </div>
            <div class="row justify-content-center">
              <button type="submit" class="btn btn-success btn-lg mt-4" @click.prevent="ingresar">Ingresar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: 'Login',
  data() {
    return {
      email2: "",
      password2: "",
      error: ""
    };
  },
  methods: {
    ingresar() {
      if (this.email2 && this.password2) {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email2, this.password2)
          .then(user => {
            this.email2 = "";
            this.password2 = "";
            this.$router.push({ name: "Crear" });
          })
          .catch(err => {
            this.error = err.message;
            swal("Atencion!", "Usuario no registrado", "warning");
          });
      } else {
        swal("Error!", "Debe completar todos los campos", "error");
      }
    },
    // observador() {
    //   firebase.auth().onAuthStateChanged(function(user) {
    //     if (user) {
    //       console.log("existe usuario");
    //       var displayName = user.displayName;
    //       var email = user.email;
    //       var emailVerified = user.emailVerified;
    //       var photoURL = user.photoURL;
    //       var isAnonymous = user.isAnonymous;
    //       var uid = user.uid;
    //       var providerData = user.providerData;
    //     } else {
    //       console.log("no existe usuario");
    //     }
    //   });
    // }
  },
};
</script>

<style>
.logo{
  width: 100%;
  border-radius: 10px;
}
.box-login {
  margin-top: 25px;
  border-radius: 10px;
  padding: 40px 25px 40px 25px;
  color: white;
  border: 3px solid green;
}
</style>