<template>
  <div class="sign-up">
    <button>
      <router-link to="/customer-sign-up">Sign Up as Customer</router-link>
    </button>
    <button>
      <router-link to="/merchant-sign-up">Sign Up as Merchant</router-link>
    </button>
    <button>
      <router-link to="/customer-sign-up">Sign Up as Customer</router-link>
    </button>
    <button>
      <router-link to="/create-account">BACK</router-link>
    </button>
  </div>
</template>

<style scoped>
.sign-up {
  display: flex;
  margin-top: 20vh;
  justify-content: center;
  gap: 16px;
}
</style>
