<template>
    <div>
    <q-page padding>
        <q-card flat class="bg-white">
            <q-card-section class="q-gutter-md">
                <div class="text-h6">Tambah Daftar Motor</div>
                <q-form
                    @submit="onSubmit"
                    @reset="onReset"
                    class="q-mt-lg"
                >
                    <div class="q-gutter-md">
                        <div class="q-gutter-y-md column" style="max-width: 300px"> <q-select v-model="jenismotor" :options="options" label="Jenis Motor" :rules="[ val => val && val.length > 0 || 'Pilih jenis motor yang akan di input']" /></div>
                        <q-input filled v-model="Type" label="Type" :rules="[ val => val && val.length > 0 || 'Tolong Ketik Type Motor']"></q-input>
                        <q-input filled v-model="Harga" label="Harga" :rules="[ val => val && val.length > 0 || 'Tolong Masukan Harga']"></q-input>
                        <div class="q-pa-md" style="max-width: 10px">
                            <q-uploader
                                url="http://localhost:4444/upload" label="Masukan gambar" grey v-model="Gambar"
                            />
                        </div>
                        <q-btn type="submit" label="input" icon="input" class="bg-blue-4" unelevated></q-btn>
                        <q-btn type="reset" label="Reset" icon="update" class="bg-red-8" flat unelevated></q-btn>
                    </div>
                </q-form>
            </q-card-section>
        </q-card>
    </q-page>
    </div>
</template>
<script>
export default {
  data () {
    return {
      Type: null,
      Harga: null,
      jenismotor: null,
      Gambar: null,
      options: [
        'Hurley Davition', 'JapStyle', 'Vespa Klasik'
      ]
    }
  },
  methods: {
    onReset () {
      this.Type = null
      this.Harga = null
      this.Gambar = null
      this.jenismotor = null
    },
    onSubmit () {
      this.$q.notify({
        type: 'positive',
        message: 'Berhasil Input Jadwal'
      })
      this.$router.push({ name: 'Daftar Mokas' })
    }
  }
}
</script>
