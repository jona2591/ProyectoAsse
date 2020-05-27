<template>
  <div class="BarMenu bg-dark">
    <ul>
      <li class="menu">
        <span class="efect">
          <i class="far fa-caret-square-right"></i>
          <router-link to="/"> Crear Pliego</router-link>
        </span>
      </li>
      <li class="menu">
        <span class="efect">
          <i class="far fa-caret-square-right"></i>
          <router-link to="/Ingreso"> Ingreso</router-link>
        </span>
      </li>
      <li class="menu">
        <span class="efect">
          <i class="far fa-caret-square-right"></i>
          <router-link to="/Egreso"> Egreso</router-link>
        </span>
      </li>
            <li class="menu">
        <span class="efect">
          <i class="far fa-caret-square-right"></i>
          <router-link to="/Modificacion"> Modificacion</router-link>
        </span>
      </li>
      <li class="menu">
        <span class="efect">
          <i class="far fa-caret-square-right"></i>
          <router-link to="/Movimientos"> Movimientos</router-link>
        </span>
      </li>
      <li class="menu">
        <span class="efect">
          <i class="far fa-caret-square-right"></i>
          <router-link to="/Nomina"> Crear Nomina</router-link>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BarMenu",
};
</script>

<style>
.BarMenu {
  position: fixed;
  padding-right: 10px;
  padding-left: 25px;
  height: 100%;
  color: white;
  opacity: 0.8;
  width: 15%;
}
.menu {
  list-style-type: none;
  overflow: hidden;
  line-height: 60px;
  position: relative;
}
a,
a:hover {
  color: white;
  text-decoration: none;
}

.menu::before {
  content: "";
  position: absolute;
  left: 2px;
  top: 17px;
  transition: 0.5s;
  background: white;
  width: 24px;
  height: 25px;
  border-radius: 10px;
}
.menu:hover::before {
  width: 97%;
}
.efect {
  mix-blend-mode: difference;
  padding-left: 5px;
  padding-right: 10px;
}

@media only screen and (max-width: 600px) {
    .BarMenu {
    width: 40%;
    }
    .menu::before {
      width: 18px;
    }
}
</style>
