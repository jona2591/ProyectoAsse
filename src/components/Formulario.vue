<template>
  <div class="row box bg-dark justify-content-center">
    <div class="col-md-6">
      <form>
        <div class="form-group col-md-3 mb-2">
          <label for="NumeroPliego">Numero Pliego</label>
          <input type="number" class="form-control" id="NumeroPliego" v-model="pliego.numero" />
        </div>
        <div class="form-group col-md-4 mb-2">
          <label for="Fecha">Fecha de Creacion</label>
          <input type="date" class="form-control" id="Fecha" v-model="pliego.FechaCreacion" />
        </div>
        <div class="form-group col-md-6 mb-2">
          <label for="Servicio">Servicio</label>
          <select class="form-control" id="Servicio" v-model="pliego.Servicio">
            <option>...</option>
            <option v-for="sector in sectores" :key="sector">{{ sector }}</option>
          </select>
        </div>
        <div class="form-group col-md-8 mb-2">
          <label for="Objeto">Objeto del llamado</label>
          <textarea class="form-control" id="Objeto" v-model="pliego.Objeto"></textarea>
        </div>
        <div class="form-group col-md-6 mb-2">
          <label for="Lugar">Lugar de creacion de pliego</label>
          <select class="form-control" id="Servicio" v-model="pliego.Lugar">
            <option>...</option>
            <option>Compras</option>
            <option>Recursos Materiales</option>
          </select>
        </div>
        <div class="row ml-2">
          <div class="form-group col-md-6">
            <div class="custom-control custom-radio">
              <input
                type="radio"
                id="customRadio1"
                name="customRadio"
                class="custom-control-input"
                v-model="pliego.Procedimiento"
                value="LA"
              />
              <label class="custom-control-label" for="customRadio1">LA</label>
            </div>
            <div class="custom-control custom-radio">
              <input
                type="radio"
                id="customRadio2"
                name="customRadio"
                class="custom-control-input"
                v-model="pliego.Procedimiento"
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
                name="customRadio"
                class="custom-control-input"
                v-model="pliego.Procedimiento"
                value="CDE"
              />
              <label class="custom-control-label" for="customRadio3">CDE</label>
            </div>
            <div class="custom-control custom-radio">
              <input
                type="radio"
                id="customRadio4"
                name="customRadio"
                class="custom-control-input"
                v-model="pliego.Procedimiento"
                value="Pregon"
              />
              <label class="custom-control-label" for="customRadio4">Pregon</label>
            </div>
          </div>
        </div>
      </form>
    </div>

    <div class="col-md-6 pr-2 pl-2">
      <form>
        <div class="form-group col-md-4 mb-2">
          <label for="Servicio">Estado</label>
          <select class="form-control" id="Servicio" v-model="pliego.Estado">
            <option>...</option>
            <option>En proceso</option>
            <option>Vigente</option>
            <option>Finalizado</option>
          </select>
        </div>
        <div class="row ml-1">
          <div class="col-md-3">
            <div class="form-group">
              <label for="Objeto">Etapa</label>
              <input type="number" class="form-control" id="Servicio" />
            </div>
          </div>
          <div class="col-md-3">
            <div class="form-group">
              <label for="Lugar">Plazo</label>
              <input type="number" class="form-control" id="Lugar" />
            </div>
          </div>
        </div>
        <div class="form-group col-md-7 mb-2">
          <label for="tramite">Procedimiento</label>
          <textarea class="form-control" id="tramite"></textarea>
        </div>
      </form>
    </div>

    <button class="btn btn-green" @click="guardar">Guardar</button>

    <table class="table table-striped table-dark table-sm">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Nº Pliego</th>
          <th scope="col">Fecha Creacion</th>
          <th scope="col">Servicio</th>
          <th scope="col">Objeto Llamado</th>
          <th scope="col">Lugar</th>
          <th scope="col">Procedimiento</th>
          <th scope="col">Estado</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(pliego, id) in Pliegos" :key="id">
          <th scope="row">{{ (++id) }}</th>
          <td>{{ pliego.numero }}</td>
          <td>{{ pliego.FechaCreacion }}</td>
          <td>{{ pliego.Servicio }}</td>
          <td>{{ pliego.Objeto }}</td>
          <td>{{ pliego.Lugar }}</td>
          <td>{{ pliego.Procedimiento }}</td>
          <td>{{ pliego.Estado }}</td>
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

      pliego: {
        numero: "",
        FechaCreacion: "",
        Servicio: "",
        Objeto: "",
        Lugar: "",
        Tramite: "",
        Procedimiento: "",
        Estado: ""
      }
    };
  },
  methods: {
    guardar() {
      let {
        numero,
        FechaCreacion,
        Servicio,
        Objeto,
        Lugar,
        Tramite,
        Procedimiento,
        Estado
      } = this.pliego;

      if (
        this.pliego.numero == 0 ||
        this.pliego.FechaCreacion == 0 ||
        this.pliego.Servicio == 0 ||
        this.pliego.Objeto == 0 ||
        this.pliego.Lugar == 0 ||
        this.pliego.Procedimiento == 0 ||
        this.pliego.Estado == 0) {
        alert("Complete todos los campos");
      } else {
        this.Pliegos.push({
          numero,
          FechaCreacion,
          Servicio,
          Objeto,
          Lugar,
          Procedimiento,
          Estado
        });
        this.pliego.numero = ""
        this.pliego.FechaCreacion = ""
        this.pliego.Servicio = ""
        this.pliego.Objeto = ""
        this.pliego.Lugar = ""
        this.pliego.Procedimiento = ""
        this.pliego.Estado = ""
      }
    }
  }
};
</script>

<style scoped>
.box {
  border: 1px solid rgb(149, 145, 145);
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