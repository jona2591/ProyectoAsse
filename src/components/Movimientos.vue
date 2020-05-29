<template>
  <div class="container">
    <div class="movimientos">
      <div class="form-group col-md-2">
        <label for="exampleInputEmail1">Numero de Pliego</label>
        <input type="number" class="form-control" id="exampleInputEmail1" v-model="numero" min="0" />
        <button class="btn btn-dark mt-2">Buscar</button>
      </div>
<div class="box bg-dark">
      <table class="table table-striped table-dark table-sm">
        <thead>
          <tr>
            <th scope="col">Nº Pliego</th>
            <th scope="col">Fecha Creacion</th>
            <th scope="col">Servicio</th>
            <th scope="col">Objeto Llamado</th>
            <th scope="col">Procedimiento</th>
            <th scope="col">Lugar</th>
            <th scope="col">Tramite</th>
            <th scope="col">Ingreso</th>
            <th scope="col">Egreso</th>
            <th scope="col">Destino</th>
            <th scope="col">Estado</th>
            <th scope="col">Usuario</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(pliego, index) in Pliegos" :key="index">
            <th scope="row">{{ pliego.numero }}</th>
            <td>{{ pliego.FechaCreacion }}</td>
            <td>{{ pliego.Servicio }}</td>
            <td>{{ pliego.Objeto }}</td>
            <td>{{ pliego.Procedimiento }}</td>
            <td>{{ pliego.Lugar }}</td>
            <td>{{ pliego.Tramite }}</td>
            <td>{{ pliego.Ingreso }}</td>
            <td>{{ pliego.Egreso }}</td>
            <td>{{ pliego.Destino }}</td>
            <td>{{ pliego.Estado }}</td>
            <td>{{ pliego.Usuario }}</td>
          </tr>
        </tbody>
      </table>
</div>
      <div class="alert alert-danger" role="alert" v-show="Pliegos.length == 0">Sin resultados para mostrar ! ! !</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Movimientos",
  data() {
    return {
      numero: "",
      Pliegos:[],
    };
  },
  methods: {
    // Buscar() {
    //   this.pliegoBuscado = this.Pliegos.filter(pliego => {
    //     return pliego.numero == this.numero;
    //   });
    // }
  },
    created(){
    firebase.database().ref('Pliegos').on('value', (listar)=>{
      this.Pliegos = listar.val();
    })
  }

};
</script>

<style>
.box {
  border: 3px solid green;
  border-radius: 10px;
  padding: 5px;
  color: white;
}
</style>