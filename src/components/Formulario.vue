<template>
  <div class="row box bg-dark justify-content-center">
    <div class="col-md-6">
      <form>
        <div class="form-group col-md-3 mb-2">
          <label for="numero">Numero Pliego</label>
          <input type="number" class="form-control" id="numero" v-model="Pliego.numero" min="0" />
        </div>
        <div class="form-group col-md-4 mb-2">
          <label for="FechaCreacion">Fecha de Creacion</label>
          <input type="date" class="form-control" id="FechaCreacion" v-model="Pliego.FechaCreacion" />
        </div>
        <div class="form-group col-md-6 mb-2">
          <label for="Servicio">Servicio</label>
          <select class="form-control" id="Servicio" v-model="Pliego.Servicio">
            <option></option>
            <option v-for="sector in sectores" :key="sector">{{ sector }}</option>
          </select>
        </div>
      </form>
    </div>
    <div class="col-md-6 pr-2 pl-2">
      <form>
        <div class="form-group col-md-8 mb-2">
          <label for="Objeto">Objeto del llamado</label>
          <textarea class="form-control" id="Objeto" v-model="Pliego.Objeto"></textarea>
        </div>
        <div class="row ml-2">
          <div class="form-group col-md-6">
            <div class="custom-control custom-radio">
              <input
                type="radio"
                id="customRadio1"
                name="Procedimiento"
                class="custom-control-input"
                v-model="Pliego.Procedimiento"
                value="LA"
              />
              <label class="custom-control-label" for="customRadio1">LA</label>
            </div>
            <div class="custom-control custom-radio">
              <input
                type="radio"
                id="customRadio2"
                name="Procedimiento"
                class="custom-control-input"
                v-model="Pliego.Procedimiento"
                value="LP"
              />
              <label class="custom-control-label" for="customRadio2">LP</label>
            </div>
          </div>
          <div class="form-group col-md-6">
            <div class="custom-control custom-radio">
              <input
                type="radio"
                id="customRadio3"
                name="Procedimiento"
                class="custom-control-input"
                v-model="Pliego.Procedimiento"
                value="CDE"
              />
              <label class="custom-control-label" for="customRadio3">CDE</label>
            </div>
            <div class="custom-control custom-radio">
              <input
                type="radio"
                id="customRadio4"
                name="Procedimiento"
                class="custom-control-input"
                v-model="Pliego.Procedimiento"
                value="Pregon"
              />
              <label class="custom-control-label" for="customRadio4">Pregon</label>
            </div>
          </div>
        </div>
        <div class="form-group col-md-6 mb-2">
          <label for="Estado">Estado</label>
          <select class="form-control" id="Estado" v-model="Pliego.Estado">
            <option></option>
            <option>En Proceso</option>
            <option>Vigente</option>
            <option>Finalizado</option>
          </select>
        </div>
      </form>
    </div>

    <button class="btn btn-green" @click="Guardar" v-show="guardando">Guardar</button>
    <button class="btn btn-green" id="boton" v-show="modificando">Modificar</button>
    <button class="btn btn-green" @click="Cancelar" v-show="cancelando">Cancelar</button>

    <table class="table table-striped table-dark table-sm">
      <thead>
        <tr>
          <th scope="col">Nº Pliego</th>
          <th scope="col">Fecha Creacion</th>
          <th scope="col">Servicio</th>
          <th scope="col">Objeto Llamado</th>
          <th scope="col">Procedimiento</th>
          <th scope="col">Estado</th>
          <th scope="col">Borrar / Editar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(Pliego, id) in Pliegos" :key="id">
          <th scope="row">{{ Pliego.numero }}</th>
          <td>{{ Pliego.FechaCreacion }}</td>
          <td>{{ Pliego.Servicio }}</td>
          <td>{{ Pliego.Objeto }}</td>
          <td>{{ Pliego.Procedimiento }}</td>
          <td>{{ Pliego.Estado }}</td>
          <td>
            <button class="btn btn-success m-2" @click="Borrar(id)">Borrar</button>
            <button
              class="btn btn-success m-2"
              @click="Editar(id,Pliego.numero,Pliego.FechaCreacion,Pliego.Servicio,Pliego.Objeto,Pliego.Procedimiento,Pliego.Estado,Pliego.Usuario)"
            >Editar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Formulario",
  data() {
    return {
      guardando: true,
      modificando: false,
      cancelando: false,
      sectores: [
        "Compras",
        "Recursos Materiales",
        "Direccion Administrativa",
        "Direccion H. de la Mujer",
        "Direccion H. Pediatrico",
        "Gerencia Financiera",
        "Arquitectura",
        "Mantenimiento"
      ],
      Pliegos: [],
      Pliego: {
        numero: "",
        FechaCreacion: "",
        Servicio: "",
        Objeto: "",
        Procedimiento: "",
        Estado: "",
        Lugar: "",
        Tramite: "",
        Ingreso: "",
        Egreso: "",
        Destino: "",
        Usuario: ""
      }
    };
  },
  methods: {
    Guardar() {
      if (
        (this.Pliego.numero === "") |
        (this.Pliego.FechaCreacion === "") |
        (this.Pliego.Servicio === "") |
        (this.Pliego.Objeto === "") |
        (this.Pliego.Procedimiento === "") |
        (this.Pliego.Estado === "")
      ) {
        swal("Error!", "Debe completar todos los campos", "error");
      } else {
        firebase
          .database()
          .ref("Pliegos")
          .push(this.Pliego);
          (this.Pliego.numero = ""),
          (this.Pliego.FechaCreacion = ""),
          (this.Pliego.Servicio = ""),
          (this.Pliego.Objeto = ""),
          (this.Pliego.Procedimiento = ""),
          (this.Pliego.Estado = ""),
          (this.Pliego.Lugar = ""),
          (this.Pliego.Tramite = ""),
          (this.Pliego.Ingreso = ""),
          (this.Pliego.Egreso = ""),
          (this.Pliego.Destino = "");
        swal("Se guardo correctamente el documento!", { icon: "success" });
      }
    },

    Borrar(id) {
      swal({
        title: "Esta seguro?",
        text: "Si decea eliminar precione OK, caso contrario cancelar!",
        icon: "warning",
        buttons: true,
        dangerMode: true
      }).then(willDelete => {
        if (willDelete) {
          firebase
            .database()
            .ref("Pliegos/" + id)
            .remove();
          swal("Se elimino correctamente el documento!", { icon: "success" });
        } else {
          swal("No se ha eliminado el documento!");
        }
      });
    },

    Editar(
      id,
      numero,
      FechaCreacion,
      Servicio,
      Objeto,
      Procedimiento,
      Estado,
      Usuario
    ) {
      this.guardando = false;
      this.modificando = true;
      this.cancelando = true;
      this.Pliego.numero = numero;
      this.Pliego.FechaCreacion = FechaCreacion;
      this.Pliego.Servicio = Servicio;
      this.Pliego.Objeto = Objeto;
      this.Pliego.Procedimiento = Procedimiento;
      this.Pliego.Estado = Estado;
      this.Pliego.Usuario = Usuario;

      boton.onclick = function() {
        var PliegoRef = firebase.database().ref("Pliegos/" + id);

        var numero = document.getElementById("numero").value;
        var FechaCreacion = document.getElementById("FechaCreacion").value;
        var Servicio = document.getElementById("Servicio").value;
        var Objeto = document.getElementById("Objeto").value;
        var Procedimiento = $("input[name=Procedimiento]:checked").val();
        var Estado = document.getElementById("Estado").value;

        return PliegoRef.update({
          numero,
          FechaCreacion,
          Servicio,
          Objeto,
          Procedimiento,
          Estado,
          Usuario
        }).then(function() {
          document.getElementById("numero").value = "";
          document.getElementById("FechaCreacion").value = "";
          document.getElementById("Servicio").value = "";
          document.getElementById("Objeto").value = "";
          document.getElementById("Estado").value = "";
          swal(
            "Exito!",
            "Se guardaron los cambios en el documento.",
            "success"
          );
        });
      };
    },
    Cancelar() {
      this.guardando = true;
      this.modificando = false;
      this.cancelando = false;
      (this.Pliego.numero = ""),
        (this.Pliego.FechaCreacion = ""),
        (this.Pliego.Servicio = ""),
        (this.Pliego.Objeto = ""),
        (this.Pliego.Procedimiento = ""),
        (this.Pliego.Estado = "");
    }
  },
  created() {
    firebase
      .database()
      .ref("Pliegos")
      .on("value", listar => {
        this.Pliegos = listar.val();
      });
    this.Pliego.Usuario = this.$store.state.UserLog;
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