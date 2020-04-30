
const routes = [
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Login.vue') },
      { path: 'Register', component: () => import('pages/Register.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: 'loginadmin', component: () => import('pages/admin/Loginadmin.vue') },
      { path: 'Lihat User', component: () => import('pages/Login.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/admin/adminLAyout.vue'),
    children: [
      { path: 'Index admin', component: () => import('pages/admin/Indexadmin.vue') },
      { path: 'Daftar Mokas', name: 'Daftar Mokas', component: () => import('pages/admin/daftarmokas.vue') },
      { path: 'Daftar Vespa', name: 'Daftar Vespa', component: () => import('pages/admin/daftarvespa.vue') },
      { path: 'Daftar Hurley', name: 'Daftar Hurley', component: () => import('pages/admin/daftarhurley.vue') }
    ]
  },

  {
    path: '/',
    component: () => import('layouts/MainLAyout.vue'),
    children: [
      { path: 'home', component: () => import('pages/Index.vue') },
      { path: 'Moge', name: 'Moge', component: () => import('pages/Moge.vue') },
      { path: 'Motor Custom', name: 'Motor Custom', component: () => import('pages/Motorcustom.vue') },
      { path: 'Vespa Klasik', name: 'Vespa Klasik', component: () => import('pages/vespaklasik.vue') }
    ]
  }

]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
