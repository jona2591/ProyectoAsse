<template>
  <div class="container">
    <div class="movimientos">
      <div class="form-group col-md-2">
        <label for="exampleInputEmail1">Numero de Pliego</label>
        <input type="number" class="form-control" id="exampleInputEmail1" />
        <button class="btn btn-dark mt-2">Buscar</button>
      </div>

      <table class="table table-striped table-dark table-sm">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nº Pliego</th>
            <th scope="col">Lugar</th>
            <th scope="col">Ingreso</th>
            <th scope="col">Egreso</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>356</td>
            <td>Recursos Materiales</td>
            <td>11/04/2020</td>
            <td>14/04/2020</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>356</td>
            <td>Direccion Administrativa</td>
            <td>14/04/2020</td>
            <td>16/04/2020</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>356</td>
            <td>Compras</td>
            <td>16/04/2020</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Movimientos"
};
</script>