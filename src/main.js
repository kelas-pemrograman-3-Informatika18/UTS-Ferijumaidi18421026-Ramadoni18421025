// main.js

// This is needed ONLY if NOT chosen to import everything from Quasar
// when you installed vue-cli-plugin-quasar.

import {
    Quasar,
    QDrawer
  } from 'quasar'
  
  Vue.use(Quasar, {
    components: {
      QDrawer
    }
  })