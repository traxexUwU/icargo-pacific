<template>
  <!-- Sign in-->
  <div class="vh-100" id="customer-signin">
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
                <h4>
                  Sign in as an<span style="color: #0d6efd"> iCargo</span>
                  <span style="color: #ffc800"> Customer</span>
                </h4>
                <h5 style="font-size: 15px" class="mt-3">
                  Enter your details below
                </h5>
              </div>

              <div class="row mb-2">
                <div class="col">
                  <div class="form-outline mb-4">
                    <label class="form-label" for="form3Example3">Email</label>
                    <input
                      type="email"
                      id="form3Example3"
                      class="form-control form-control-sm"
                    />
                  </div>

                  <div class="form-outline mb-4">
                    <label class="form-label" for="formTextExample2"
                      >Password</label
                    >
                    <input
                      type="password"
                      id="formTextExample2"
                      class="form-control form-control-sm"
                      aria-describedby="textExample2"
                    />
                  </div>

                  <div class="pt-1 mb-4 d-flex">
                    <a href="#!" class="text-body text-right"
                      >Forgot password?</a
                    >
                  </div>

                  <div class="pt-1 mb-4 d-flex justify-content-center">
                    <div class="btn-group me-2 top-0">
                      <a
                        style="background-color: white"
                        class="btn btn-primary btn-sm btn-block text-dark shadow rounded border border-2"
                        href="signin.html"
                        role="button"
                        >Back</a
                      >
                    </div>

                    <div class="btn-group me-2 top-0">
                      <a
                        style="background-color: #0d6efd"
                        class="btn btn-primary btn-sm btn-block text-light shadow rounded border-0"
                        href="index.html"
                        role="button"
                        >Sign in</a
                      >
                    </div>
                  </div>

                  <div class="mt-4 me-3">
                    <h6 class="text-body fw-light">Login with:</h6>
                    <ul
                      class="nav nav-pills nav-justified mb-4"
                      id="ex1"
                      role="tablist"
                    >
                      <li class="nav-item mt-2" role="presentation">
                        <a
                          style="background-color: #adb5bd"
                          class="soc-med btn btn-primary btn-sm btn-block border-0"
                          href="#"
                          target="_blank"
                          role="button"
                        >
                          <i class="fab fa-facebook-f me-3"></i>Facebook</a
                        >
                        <a
                          style="background-color: #adb5bd"
                          class="soc-med btn btn-primary btn-sm btn-block border-0"
                          href="#"
                          target="_blank"
                          role="button"
                        >
                          <i class="fab fa-google me-3"></i>Google</a
                        >
                      </li>
                    </ul>
                  </div>

                  <div class="pt-1 mb-4 d-flex justify-content-center">
                    <p>
                      Don't have an account yet?
                      <a href="customer-signup.vue" class="link-warning"
                        >Sign up</a
                      >
                    </p>
                  </div>
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
  name: 'customer-signin'
}
</script>

<style>
#customer-signin .form-outline .btn {
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  width: 250px;
  border-radius: 20px;
}

#customer-signin .pt-1 .link-warning {
  text-decoration: none;
}

#customer-signin .pt-1 .text-body {
  text-decoration: none;
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
