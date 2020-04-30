<template>
  <q-page>
  <q-table
      title="Daftar Motor Vespa"
      :data="data"
      :columns="columns"
      row-key="name"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="Type" :props="props">
            {{ props.row.Type }}
          </q-td>
          <q-td key="Harga" :props="props">
            {{ props.row.Harga }}
          </q-td>
          <q-td key="Aksi" :props="props">
            <div class="row">
              <div class="col">
                <q-btn color="positive" icon="edit" unelevated></q-btn>
              </div>
              <div class="col">
                <q-btn color="negative" icon="delete" unelevated></q-btn>
              </div>
            </div>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      columns: [
        {
          name: 'Type',
          required: true,
          label: 'Type',
          align: 'left',
          field: 'Type',
          sortable: true
        },
        { name: 'Harga', align: 'center', label: 'Harga', field: 'Harga', sortable: true },
        { name: 'Aksi', label: 'Aksi', field: 'Aksi', align: 'Aksi' }
      ],
      data: [
        {
          Type: 'moto piagio 5',
          Harga: 'Rp. 16,500,000'
        },
        {
          Type: 'MP6 Prototipe',
          Harga: 'Rp. 27,600,000'
        },

        {
          Type: 'MP5 1998 II ',
          Harga: 'Rp. 20,000,000'
        },
        {
          Type: 'vespa 98 cc racing',
          Harga: 'Rp.17,800,00'
        },
        {
          Type: 'Vespa 125 ',
          Harga: 'Rp. 25,000,000'
        },
        {
          Type: 'Vespa 125 (VNA2)',
          Harga: 'Rp. 32,000,000'
        }

      ]
    }
  }
}
</script>
