<template>
  <div class="container">
    <h1>Egreso de Pliego</h1>
    <FormularioEgreso/>
  </div>
</template>

<script>
import FormularioEgreso from "@/components/FormularioEgreso.vue";

export default {
  name:'Egreso',
  components:{
    FormularioEgreso,
  }
};
</script>