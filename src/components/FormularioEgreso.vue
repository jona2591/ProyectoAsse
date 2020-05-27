<template>
  <div class="row box bg-dark justify-content-center">
    <div class="col-md-6 pr-2 pl-2">
      <form>
        <div class="form-group col-md-3 mb-2">
          <label for="numero">Numero Pliego</label>
          <input type="number" class="form-control" id="numero" v-model="Pliego.numero" disabled/>
        </div>
        <div class="form-group col-md-5 mb-2">
          <label for="Lugar">Lugar Actual</label>
          <input type="text" class="form-control" id="Lugar" disabled v-model="Pliego.Lugar"/>
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
          <label for="Egreso">Egreso</label>
          <input type="date" class="form-control" id="Egreso" v-model="Pliego.Egreso"/>
        </div>
        <div class="form-group col-md-5 mb-2">
          <label for="Destino">Servicio de Destino</label>
          <select class="form-control" id="Destino" v-model="Pliego.Destino">
            <option></option>
            <option v-for="sector in sectores" :key="sector">{{ sector }}</option>
          </select>
        </div>
      </form>
    </div>
    <button class="btn btn-green" id="boton" v-show="modificando">Egresar Pliego</button>
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
          <button class="btn btn-success m-2" @click="Editar(id,Pliego.numero,Pliego.Lugar,Pliego.Objeto,Pliego.Egreso,Pliego.Destino)">Egresar</button>
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
        Egreso:'',
        Destino: '',
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
    Editar(id,numero,Lugar,Objeto,Egreso,Destino){
      this.modificando = true
      this.cancelando = true
      this.Pliego.numero = numero;
      this.Pliego.Lugar = Lugar;
      this.Pliego.Objeto = Objeto;
      this.Pliego.Egreso = Egreso
      this.Pliego.Destino = Destino;
      
      boton.onclick = function(){
        var PliegoRef = firebase.database().ref('Pliegos/'+id);
        
        var numero = document.getElementById('numero').value;
        var Lugar = document.getElementById('Lugar').value;
        var Objeto = document.getElementById('Objeto').value;
        var Egreso = document.getElementById('Egreso').value;
        var Destino = document.getElementById('Destino').value;

        if (numero === '' | Lugar === '' | Objeto === '' | Egreso === '' | Destino === '') {
        swal("Error!", "Debe completar todos los campos", "error");
      }else{        return PliegoRef.update({
          numero,
          Lugar,
          Objeto,
          Egreso,
          Destino,
        })
        .then(function(){
          document.getElementById('numero').value = '';
          document.getElementById('Lugar').value = '';
          document.getElementById('Objeto').value = '';
          document.getElementById('Egreso').value = '';
          document.getElementById('Destino').value = '';
          swal("Exito!", "Se egreso el documento.", "success");
        })}
      }
    },
    Cancelar(){
      this.modificando = false
      this.cancelando = false
      this.Pliego.numero = '',
      this.Pliego.Lugar ='',
      this.Pliego.Objeto ='',
      this.Pliego.Egreso ='',
      this.Pliego.Destino =''
    }
  },

  created(){
    firebase.database().ref('Pliegos').on('value', (listar)=>{
      this.Pliegos = listar.val();
    })
  }
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