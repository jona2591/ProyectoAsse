<template>
  <div class="container">
    <div class="row">
      <div class="col text-center">
        <h2>Registrar</h2>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-4">
        <form>
          <div class="form-group">
            <label for="usuario">Usuario</label>
            <input type="text" class="form-control" id="usuario" v-model="usuario" />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Direccion de Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
              v-model="email"
            />
          </div>
          <div class="form-group">
            <label for="password">Contraseña</label>
            <input type="password" class="form-control" id="password" v-model="password" />
          </div>
          <button type="submit" class="btn btn-primary m-1" @click.prevent="registrar">Registrar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Registrar",
  data() {
    return { usuario: "", email: "", password: "", error: "" };
  },
  methods: {
    registrar() {
      var user = null;
      const displayName = this.usuario;
      if (this.usuario && this.email && this.password) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(() => {
            user = firebase.auth().currentUser;
            user.sendEmailVerification();
          })
          .then(() => {
            user
              .updateProfile({
                displayName: displayName,
                photoURL: "photoURL"
              })
              .then(() => {
                // mandar al padre
              });
          });
      } else {
        this.error = "todos los campos son obligatorios";
      }
    }
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.usuario = user.displayName;
      } else {
        this.usuario = null;
      }
    });
  }
};
</script>