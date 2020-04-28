<template>
    <div class="container">
        <div class="form-group col-md-12 mb-2">
            <label for="NumeroReferencia">Numero Referencia</label>
            <input type="text" class="form-control" id="NumeroReferencia" v-model="pliego.Referencia"/>
        </div>
        <div class="form-group col-md-12 mb-2">
            <label for="Inicio">Inicio</label>
            <input type="date" class="form-control" id="Inicio" v-model="pliego.Inicio"/>
        </div>
        <div class="form-group col-md-12 mb-2">
            <label for="Final">Final</label>
            <input type="date" class="form-control" id="Final" v-model="pliego.Final"/>
        </div>
        <div class="form-group col-md-12 mb-2">
            <label for="InicioProrroga">Inicio Prorroga</label>
            <input type="date" class="form-control" id="InicioProrroga" v-model="pliego.InicioProrroga" />
        </div>
        <div class="form-group col-md-12 mb-2">
            <label for="FinalProrroga">Final Prorroga</label>
            <input type="date" class="form-control" id="FinalProrroga" v-model="pliego.FinalProrroga" />
        </div>
        <div class="form-group col-md-12 mb-2">
            <label for="Ampliacion">Periodo de Ampliacion</label>
            <input type="text" class="form-control" id="Ampliacion" v-model="pliego.Ampliacion"/>
        </div>
        <div class="form-group col-md-10 mb-2">
          <label for="NumeroPliego">Expediente</label>
          <select class="form-control" id="Servicio" v-model="pliego.Expediente">
            <option>...</option>
            <option>Original</option>
            <option>Copia</option>
          </select>
        </div>
        <div class="form-group col-md-12 mb-2">
          <label for="Fecha">Ingreso</label>
          <input type="date" class="form-control" id="Fecha" v-model="pliego.Ingreso"/>
        </div>
    </div>
</template>