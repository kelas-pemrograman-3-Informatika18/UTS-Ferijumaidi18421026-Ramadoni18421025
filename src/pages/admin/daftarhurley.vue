<template>
  <q-page>
  <q-table
      title="Daftar Motor Hurley"
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
                <q-btn label="Edit" color="orange" icon="edit" unelevated></q-btn>
              </div>
              <div class="col">
                <q-btn label="hapus" color="negative" icon="delete" unelevated></q-btn>
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
          Type: 'Spiderman Irom xv',
          Harga: 'Rp. 100,000,000 '
        },
        {
          Type: 'Sportster Iron 883 ',
          Harga: 'Rp. 120,000,000 '
        },
        {
          Type: 'Sportster Iron 883',
          Harga: 'Rp. 1,020,000,000'
        }

      ]
    }
  }
}
</script>
