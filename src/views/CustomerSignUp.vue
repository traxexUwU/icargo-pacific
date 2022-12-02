<template>
  <!-- Sign in-->
  <div class="vh-100" id="customer-signup">
    <div class="container-fluid">
      <div style="background-color: #f8f9fa" class="row">
        <div class="col-sm-6 px-0 d-none d-sm-block">
          <img
            src="../assets/img/delivery-image.jpg"
            alt="Login image"
            class="w-100 vh-100 img-fluid"
            style="object-fit: cover; object-position: left"
          />
        </div>

        <div class="col-sm-6 text-black">
          <div
            class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5"
          >
            <form style="width: 25rem">
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

              <div class="heading">
                <h4 class="mt-0">
                  <span style="color: #0d6efd"> Be an iCargo</span>
                  <span style="color: #ffc800"> Customer</span>
                  <span style="color: #0d6efd"> today!</span>
                </h4>
                <h6 style="font-weight: 500" class="fw-bold text-center mb-2">
                  LET'S COLLABORATE!
                </h6>
                <h5 style="font-size: 11px" class="mb-2 fw-normal">
                  Get in touch with us to become our logistics partner!
                </h5>
                <h5 style="font-size: 14px">Account details</h5>
              </div>

              <div class="row mb-2">
                <div class="col">
                  <div class="form-outline">
                    <label class="form-label form" for="form3Example1"
                      >First name</label
                    >
                    <input
                      type="text"
                      id="form3Example1"
                      class="form-control form-control-sm fs-6"
                    />
                  </div>
                </div>
                <div class="col">
                  <div class="form-outline">
                    <label class="form-label" for="form3Example2"
                      >Last name</label
                    >
                    <input
                      type="text"
                      id="form3Example2"
                      class="form-control form-control-sm fs-6"
                    />
                  </div>
                </div>
              </div>

              <div class="form-outline mb-4">
                <label class="form-label" for="form3Example3"
                  >Email address</label
                >
                <input
                  type="email"
                  id="form3Example3"
                  class="form-control form-control-sm"
                />
              </div>

              <div class="form-outline mb-4">
                <label class="form-label" for="typePhone">Contact Number</label>
                <input
                  type="tel"
                  id="typePhone"
                  class="form-control form-control-sm"
                />
              </div>

              <div class="form-outline mb-4">
                <label class="form-label" for="formTextExample2"
                  >Preferred Password</label
                >
                <input
                  type="password"
                  id="formTextExample2"
                  class="form-control form-control-sm"
                  aria-describedby="textExample2"
                />
              </div>

              <div class="form-outline mb-4">
                <label class="form-label" for="formTextExample2"
                  >Re-type Preferred Password</label
                >
                <input
                  type="password"
                  id="formTextExample2"
                  class="form-control form-control-sm"
                  aria-describedby="textExample2"
                />
              </div>

              <div class="pt-1 mb-4 d-flex justify-content-center">
                <div class="btn-group me-2 top-0">
                  <a
                  router-link to="/create-account"
                    style="background-color: white"
                    class="btn btn-primary btn-sm btn-block text-dark shadow rounded border border-2"
                    href="partnership-signup.html"
                    role="button"
                    >Back</a
                  >
                </div>

                <div class="btn-group me-2 top-0">
                  <a
                    style="background-color: #0d6efd"
                    class="btn btn-primary btn-sm btn-block text-light shadow rounded border-0"
                    href="Landingpage.vue"
                    role="button"
                    >Sign up</a
                  >
                </div>
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
  name: 'customer-signup'
}
</script>

<style>
#customer-signup .form-outline .btn {
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  width: 250px;
  border-radius: 20px;
}

#customer-signup .pt-1 .link-warning {
  text-decoration: none;
}

#customer-signup .pt-1 .btn-group {
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
