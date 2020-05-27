<template>
  <div class="row box bg-dark justify-content-center">
    <div class="col-md-6 pr-2 pl-2">
      <form>
        <div class="form-group col-md-3 mb-2">
          <label for="numero">Numero Pliego</label>
          <select class="form-control" id="numero" v-model="Pliego.numero" min="0">
            <option>...</option>
            <option v-for="(Pliego, id) in Pliegos" :key="id">{{ Pliego.numero }}</option>
          </select>
        </div>
        <div class="form-group col-md-5 mb-2">
          <label for="Lugar">Lugar</label>
          <select class="form-control" id="Lugar" v-model="Pliego.Lugar">
            <option></option>
            <option v-for="sector in sectores" :key="sector">{{ sector }}</option>
          </select>
        </div>
        <div class="form-group col-md-8 mb-2">
          <label for="Objeto">Objeto del llamado</label>
          <textarea class="form-control" id="Objeto" disabled v-model="Pliego.Objeto"></textarea>
        </div>
      </form>
    </div>

    <div class="col-md-6 pr-2 pl-2">
      <form>
        <div class="form-group col-md-5 mb-2">
          <label for="Ingreso">Ingreso</label>
          <input type="date" class="form-control" id="Ingreso" v-model="Pliego.Ingreso" />
        </div>
        <div class="form-group col-md-8 mb-2">
          <label for="Tramite">Tramite a realizar</label>
          <textarea class="form-control" id="Tramite" v-model="Pliego.Tramite"></textarea>
        </div>
      </form>
    </div>
    <button class="btn btn-green" id="boton" v-show="modificando">Ingresar Pliego</button>
    <button class="btn btn-green" @click="Cancelar" v-show="cancelando">Cancelar</button>

    <table class="table table-striped table-dark table-sm">
      <thead>
        <tr>
          <th scope="col">Nº Pliego</th>
          <th scope="col">Objeto Llamado</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(Pliego, id) in Pliegos" :key="id">
          <th scope="row">{{ Pliego.numero }}</th>
          <td>{{ Pliego.Objeto }}</td>
          <td>
          <button class="btn btn-success m-2" @click="Editar(id,Pliego.numero,Pliego.Lugar,Pliego.Objeto,Pliego.Tramite,Pliego.Ingreso)">Ingresar</button>
          </td>          
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "FormularioEgreso",
  data() {
    return {
      modificando: false,
      cancelando: false,

      Pliegos:[],
      Pliego: {
        numero:'',
        Lugar:'',
        Objeto:'',
        Tramite:'',
        Ingreso: '',
      },

      sectores: [
        "Compras",
        "Recursos Materiales",
        "Direccion Administrativa",
        "Direccion H. de la Mujer",
        "Direccion H. Pediatrico",
        "Gerencia Financiera",
        "Arquitectura",
        "Mantenimiento"
      ]
    };
  },
  methods: {
    Editar(id,numero,Lugar,Objeto,Tramite,Ingreso){
      this.modificando = true
      this.cancelando = true
      this.Pliego.numero = numero;
      this.Pliego.Lugar = Lugar;
      this.Pliego.Objeto = Objeto;
      this.Pliego.Tramite = Tramite
      this.Pliego.Ingreso = Ingreso;
      
      boton.onclick = function(){
        var PliegoRef = firebase.database().ref('Pliegos/'+id);
        
        var numero = document.getElementById('numero').value;
        var Lugar = document.getElementById('Lugar').value;
        var Objeto = document.getElementById('Objeto').value;
        var Tramite = document.getElementById('Tramite').value;
        var Ingreso = document.getElementById('Ingreso').value;

        if (numero === '' | Lugar === '' | Objeto === '' | Tramite === '' | Ingreso === '') {
        swal("Error!", "Debe completar todos los campos", "error");
      }else{
        return PliegoRef.update({
          numero,
          Lugar,
          Objeto,
          Tramite,
          Ingreso,
        })
        .then(function(){
          document.getElementById('numero').value = '';
          document.getElementById('Lugar').value = '';
          document.getElementById('Objeto').value = '';
          document.getElementById('Tramite').value = '';
          document.getElementById('Ingreso').value = '';
          swal("Exito!", "Se ingreso el documento.", "success");
        })}
      }
    },
    Cancelar(){
      this.modificando = false
      this.cancelando = false
      this.Pliego.numero = '',
      this.Pliego.Lugar ='',
      this.Pliego.Objeto ='',
      this.Pliego.Tramite ='',
      this.Pliego.Ingreso =''
    }
  },

  created(){
    firebase.database().ref('Pliegos').on('value', (listar)=>{
      this.Pliegos = listar.val();
    })
  }

  

    // guardar() {
    //   let { numero, Servicio, Tramite } = this.Pliego;
    //   let Ingreso = this.Ingreso;
    //   this.Pliego.Ingresos.push({
    //     Ingreso
    //   });
    //   for (let index = 0; index < this.Pliego.Ingresos.length; index++) {
    //     var Fingreso = this.Pliego.Ingresos[index];
    //   }
    //   this.Pliegos.push({
    //     numero,
    //     Servicio,
    //     Tramite,
    //     Fingreso
    //   });
    // }
};
</script>

<style scoped>
.box {
  border: 3px solid green;
  border-radius: 10px;
  padding: 5px;
  color: white;
}
.btn-green {
  background: rgb(0, 90, 0);
  color: white;
  margin: 10px;
}
.movimientos {
  height: 100%;
  border: 1px solid rgb(149, 145, 145);
  border-radius: 10px;
  padding: 3px;
}
.titulo {
  text-align: center;
}

@media only screen and (max-width: 600px) {
  .row {
    margin: 0;
  }
}
</style>