<template>
  <div id="app">
    <div id="nav" class="header bg-dark">
      <nav v-if="usuario">
        <ul class="nav justify-content-end">
          <h1 class="title">Gestion de Documentos CHPR</h1>
          <li class="nav-item">
            <a class="nav-link">Usuario: {{ usuario }}</a>
          </li>
          <button class="btn btn-success btn-sm m-2" @click="cerrar">Cerrar Secion</button>
        </ul>
      </nav>
      <div v-else>
        <h1>Gestion de Documentos CHPR</h1>
      </div>
      <div class="menu-line">
        <div class="boton">
          <i style="color:white" class="btn btn-dark fas fa-bars" @click="menu = !menu">Menu</i>
        </div>
        <transition name="slide-fade">
          <BarMenu v-show="menu" />
        </transition>
      </div>
    </div>
    <div>
      <router-view />
    </div>
    <transition name="fade">
      <div class="shadow" v-show="menu" @click="menu = !menu"></div>
    </transition>
  </div>
</template>

<script>
import BarMenu from "@/components/BarMenu.vue";

export default {
  name: "App",
  components: {
    BarMenu
  },
  data() {
    return {
      menu: false,
      usuario: null
    };
  },
  methods: {
    cerrar() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "Login" });
        });
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

<style>
* {
  margin: 0;
  padding: 0;
  font-size: 12px;
}
.title {
  margin-right: 16%;
}
h1 {
  text-align: center;
  color: white;
  font-size: 20px;
  font-weight: bolder;
}

.slide-fade-enter-active {
  transition: all 1s ease;
}
.slide-fade-leave-active {
  transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
.header {
  border-bottom: 4px solid green;
  margin-bottom: 10px;
}

#nav a {
  font-weight: bold;
  color: white;
}

.boton {
  position: relative;
  top: -7px;
  left: 20px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.shadow {
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
}
.menu-line {
  z-index: 1;
  position: absolute;
  top: 11px;
}

@media only screen and (max-width: 600px) {
  * {
    font-size: 10px;
  }
  h1 {
    font-size: 16px;
  }
  .nav-link {
    padding-right: 4px;
    padding-left: 2px;
  }
  .nav {
    padding-right: 7px;
  }
}
</style>
