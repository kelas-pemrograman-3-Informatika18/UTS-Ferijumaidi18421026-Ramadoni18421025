<template>
<center>
  <div class="q-pa-md">
    <q-responsive :ratio="16/9" style="width: 800px; max-width: 100%;">
      <q-carousel
        swipeable
        animated
        arrows
        v-model="slide"
        infinite
      >
        <q-carousel-slide :name="1" img-src="statics/moge/harli.jpg" />
        <q-carousel-slide :name="2" img-src="statics/moge/Sportster-Forty-Eight.jpg" />
        <q-carousel-slide :name="3" img-src="statics/moge/CVO-Prostreet-Breakout.jpg" />
        <q-carousel-slide :name="4" img-src="statics/moge/coi.jpg" />

        <template v-slot:control>
          <q-carousel-control
            position="bottom"
            :offset="[16, 8]"
            class="text-white text-center rounded-borders"
            style="background: rgba(255, 255, 255, .2); padding: 4px 8px;"
          >
            SELAMAT DATANG
          </q-carousel-control>
        </template>
      </q-carousel>
    </q-responsive>
  </div>
  <div>
    Situs Dealer Motor Laki Terpercaya<br/><br>
    Pilih Motor Yang Anda Inginkan Lengkap Dan Berkualitas<br/>
    Ubdate Harga 2020

  </div>
</center>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      slide: 1
    }
  }
}
</script>

<style lang="sass" scoped>
.row > div
  padding:
.row + .row
  margin-top: 1rem
</style>
