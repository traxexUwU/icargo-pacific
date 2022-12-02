<template>
  <!-- Sign in-->
  <section class="vh-100" id="partner">
  <div class="container-fluid">
    <div class="row">

      <div class="col-sm-6 px-0 d-none d-sm-block">
        <img src="../assets/img/signin.png"
          alt="Login image" class="w-100 vh-100" style="object-fit: cover; object-position: center;">
      </div>
      <div class="col-sm-6 text-black">

        <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
  
            <form style="width: 23rem;">

                <div class="heading my-3">
                    <h4>Welcome to<span style="color: #0d6efd"> iCargo</span> <span style="color:#ffc800"> Pacific</span></h4>
                    <h5 style="font-size: 15px;">Sign in as</h5>
                </div>


            <div class="form-outline mb-4">
              <button type="button" class="btn btn-warning btn-md  m-2 text-white" style="width: 20rem;">
              <router-link class="route" to="/customer-sign-in">Customer</router-link>
              </button>
            </div>

            <div class="form-outline mb-4">
              <button type="button" class="btn btn-warning btn-md  m-2 text-white" style="width: 20rem;">
              <router-link class="route" to="/merchant-sign-in">Merchant</router-link>
              </button>
            </div>

            <div class="form-outline mb-4">
              <button type="button" class="btn btn-warning btn-md  m-2 text-white" style="width: 20rem;">
              <router-link class="route" to="/partner-sign-in">Partner</router-link>
              </button>
            </div>


              <div class="pt-1 mb-4 d-flex justify-content-center">
                <p>Already have an account?</p>
                  <router-link class="nav text-warning" to="/sign-in" exact> Sign in</router-link>
              </div>

              <div class="form-outline mb-4 pt-1 d-flex justify-content-center">
              <button type="button" class="btn btn-warning btn-md  m-2 text-white">
              <router-link class="route" to="/">Back</router-link>
              </button>
            </div>
           </form>
          </div>
      </div>
    </div>
  </div>
</section>



</template>

<script>
export default {
  name: 'signin'
}
</script>

<style>
#partner-signup .form-outline .btn {
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  width: 20px;
  border-radius: 20px;
}

#partner-signup .pt-1 .link-warning {
  text-decoration: none;
}

#partner-signup.pt-1 .btn-group {
  border: none;
}


@media (min-width: 576px) {
  .container-sm,
  .container {
    max-width: 540px;
  }
}
@media (min-width: 768px) {
  .container-md,
  .container-sm,
  .container {
    max-width: 720px;
  }
}
@media (min-width: 992px) {
  .container-lg,
  .container-md,
  .container-sm,
  .container {
    max-width: 960px;
  }
}
@media (min-width: 1200px) {
  .container-xl,
  .container-lg,
  .container-md,
  .container-sm,
  .container {
    max-width: 1140px;
  }
}
@media (min-width: 1400px) {
  .container-xxl,
  .container-xl,
  .container-lg,
  .container-md,
  .container-sm,
  .container {
    max-width: 1320px;
  }
}
</style>
