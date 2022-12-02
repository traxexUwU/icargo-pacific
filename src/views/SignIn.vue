<template>
  <!-- Sign in-->
  <div class="vh-100" id="partnership-signup">
    <div class="container-fluid">
      <div style="background-color: #f8f9fa" class="row">
        <div class="col-sm-6 px-0 d-none d-sm-block">
          <img
            src="../assets/img/deliveryman-image.webp"
            alt="Login image"
            class="w-100 vh-100"
            style="object-fit: cover; object-position: left"
          />
        </div>

        <div class="col-sm-6 text-black">
          <div
            class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5"
          >
            <form style="width: 23rem">
              <div class="icons p-1">
                <div
                  class="fa-stack fa-1x d-flex position-absolute top-0 end-0 pt-3"
                >
                  <i
                    style="color: #0d6efd"
                    class="fa-sharp fa-solid fa-house"
                  ></i>
                </div>
              </div>

              <div class="heading my-3">
                <h4>
                  Welcome to<span style="color: #0d6efd"> iCargo</span>
                  <span style="color: #ffc800"> Pacific</span>
                </h4>
                <h5 style="font-size: 15px">Sign in as</h5>
              </div>

              <div class="form-outline mb-4 d-flex justify-content-center">
                <router-link
                  to="/customer-sign-in"
                  class="btn btn-link btn-primary btn-md text-light"
                  >Customer</router-link
                >
              </div>

              <div class="form-outline mb-4 d-flex justify-content-center">
                <router-link to="/merchant-sign-in" class="btn btn-primary"
                  >Merchant</router-link
                >
              </div>

              <div class="form-outline mb-4 d-flex justify-content-center">
                <router-link to="/partner-sign-in" class="btn btn-primary"
                  >Partner</router-link
                >
              </div>

              <div class="pt-1 mb-4 d-flex justify-content-center">
                <p>
                  Don't have an accout yet?
                  <router-link to="/create-account" class="link-warning"
                    >Create one</router-link
                  >
                </p>
              </div>

              <div class="pt-1 mb-4 mt-1 d-flex justify-content-center">
                <router-link
                  to="/"
                  class="btn btn-primary btn-md btn-block bg-light text-dark shadow-lg"
                  role="button"
                  >Back</router-link
                >
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
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
  width: 250px;
  border-radius: 20px;
}

#partner-signup .pt-1 .link-warning {
  text-decoration: none;
}

#partner-signup.pt-1 .btn-group {
  border: none;
}

/*--Container--*/
.container,
.container-fluid,
.container-xxl,
.container-xl,
.container-lg,
.container-md {
  width: 100%;
  padding-right: var(--bs-gutter-x, 0.75rem);
  padding-left: var(--bs-gutter-x, 0.75rem);
  margin-right: auto;
  margin-left: auto;
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
