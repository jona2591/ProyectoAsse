<template>
  <div class="row box bg-dark">
    <div class="col-md-6 pr-2 pl-2">
      <form>
        <div class="form-group col-md-3 mb-2">
          <label for="NumeroPliego">Numero Pliego</label>
          <input type="number" class="form-control" id="NumeroPliego" />
        </div>
        <div class="form-group col-md-5 mb-2">
          <label for="NumeroPliego">Lugar Actual</label>
          <input type="text" class="form-control" id="Lugar" disabled/>
        </div>
        <div class="form-group col-md-5 mb-2">
          <label for="Servicio">Servicio de Destino</label>
          <select class="form-control" id="Servicio">
            <option>...</option>
            <option v-for="sector in sectores" :key="sector">{{ sector }}</option>
          </select>
        </div>
        <div class="form-group col-md-8 mb-2">
          <label for="Objeto">Objeto del llamado</label>
          <textarea class="form-control" id="Objeto" disabled></textarea>
        </div>
      </form>
    </div>

    <div class="col-md-6 pr-2 pl-2">
      <form>
        <div class="form-group col-md-5 mb-2">
          <label for="Egreso">Egreso</label>
          <input type="date" class="form-control" id="Egreso" />
        </div>
        <div class="form-group col-md-5 mb-2">
          <label for="Servicio">Estado</label>
          <select class="form-control" id="Servicio">
            <option>...</option>
            <option>En proceso</option>
            <option>Vigente</option>
            <option>Finalizado</option>
          </select>
        </div>
        <div class="row ml-1">
          <div class="col-md-3">
            <div class="form-group mb-2">
              <label for="Objeto">Etapa</label>
              <input type="number" class="form-control" id="Servicio" />
            </div>
          </div>
          <div class="col-md-3">
            <div class="form-group mb-2">
              <label for="Plazo">Plazo</label>
              <input type="number" class="form-control" id="Plazo" disabled/>
            </div>
          </div>
        </div>
        <div class="form-group col-md-8 mb-2">
          <label for="Procedimiento">Procedimiento</label>
          <textarea class="form-control" id="Procedimiento" disabled></textarea>
        </div>
      </form>
    </div>

    <button type="submit" class="btn btn-green">Mover Pliego</button>
  </div>
</template>

<script>
export default {
  name: "FormularioEgreso",
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
      ]
    };
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