<template>
  <q-page>
  <q-table
      title="Daftar Motor Custom"
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
                <q-btn color="orange" icon="edit" unelevated></q-btn>
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
          Type: 'GL100 Bratstyle',
          Harga: 'Rp. 6,500,000 '
        },
        {
          Type: 'Japstyle GL100 Modif',
          Harga: 'Rp. 7,600,000'
        },

        {
          Type: 'Megapro Tahun 2001',
          Harga: 'Rp.7,800,000'
        },
        {
          Type: 'GL Max Tahun 2002',
          Harga: 'Rp. 10,000,000 '
        },
        {
          Type: 'Japstyle GL100 Modif',
          Harga: 'Rp. 7,600,000'
        },
        {
          Type: 'Kawasaki W 175',
          Harga: 'Rp. 32,000,000'
        }

      ]
    }
  }
}
</script>
