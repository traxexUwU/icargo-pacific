import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: () => import('../views/LandingPage.vue') },
    { path: '/sign-in', component: () => import('../views/SignIn.vue') },
    { path: '/sign-in', component: () => import('../views/Signin.vue') },
    {
      path: '/create-account',
      component: () => import('../views/CreateAccount.vue')
    },
    {
      path: '/customer-sign-in',
      component: () => import('../views/CustomerSignIn.vue')
    },
    {
      path: '/customer-sign-up',
      component: () => import('../views/CustomerSignUp.vue')
    },
    {
      path: '/merchant-sign-in',
      component: () => import('../views/MerchantSignIn.vue')
    },
    {
      path: '/merchant-sign-up',
      component: () => import('../views/MerchantSignUp.vue')
    },
    {
      path: '/partner-sign-in',
      component: () => import('../views/PartnerSignIn.vue')
    },
    {
      path: '/partner-sign-up',
      component: () => import('../views/PartnerSignUp.vue')
    }
  ]
})

export default router
