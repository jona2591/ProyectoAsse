<template>
  <div id="app">

    <div id="nav" class="header bg-dark">
      
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Crear Pliego</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/Ingreso">| Ingreso</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/Egreso">| Egreso</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/Modificacion">| Modificacion</router-link>
        </li>
      </ul>
    </div>
      <div class="menu-line">
        <div class="boton">
        <i style="color:white" class="btn btn-dark fas fa-bars " @click="menu = !menu"> Menu</i>
        </div>
        <transition name="slide-fade">
          <BarMenu v-show="menu"/>
        </transition>
      </div>
      <div class="box">
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
  data(){
    return{
      menu:false,
    }
  },
};
</script>

<style>
*{
	margin:0;
   padding:0;
   font-size: 12px;
	}
  h1{
  text-align: center;
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: bolder;
}

.slide-fade-enter-active {
  transition: all 1.0s ease;
}
.slide-fade-leave-active {
  transition: all 1.0s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
{
  transform: translateX(10px);
  opacity: 0;
}
.header{
  border-bottom: 4px solid green;
  margin-bottom: 10px;
}


#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  color: green;
}

.boton{
  position: relative;
  top: -7px;
  left:20px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1.0s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.shadow{
   position:absolute;
   width:100%;
   height:100vh;
   top:0;
   left:0;
   background-color:rgba(0,0,0,0.7);
	}
  .menu-line {
	z-index:1;
  position: absolute;
	top:11px;
  }
  
  @media only screen and (max-width: 600px) {
*{
  font-size: 11px;
}
  h1{
    font-size: 16px;
  }
  .nav-link{
    padding-right:4px;
    padding-left: 2px;
  }
  .nav{
    padding-right: 7px;
  }
}

</style>
