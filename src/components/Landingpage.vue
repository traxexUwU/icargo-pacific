<template>
  
<div class="topnav bg-primary">
    <div class="container-fluid">
        <div class="menu-item p-2 d-flex flex-row bd-highlight ">
          <div class="bd-highlight ps-3">
            <a class="menu-icon " href="#"><i class="fa-solid fa-phone fa-fw"></i>0917-692-4203 |</a>
          </div>
          <div class="bd-highlight me-3">
            <a class="menu-icon" href="#"><i class="fa-sharp fa-solid fa-envelope"></i> info@icargo@gmail.com</a>  
          </div> 
          <div class="bd-highlight me-3 ms-auto">
            <a class="menu-icon me-1" href="#"><i class="fa-brands fa-facebook-f"></i></a>
            <a class="menu-icon me-1" href="#"><i class="fa-brands fa-twitter"></i></a>
            <a class="menu-icon m-1" href="#"><i class="fa-brands fa-instagram"></i></a>
            <a class="menu-icon m-1" href="#"><i class="fa-brands fa-google"></i></a>
          </div> 
        </div>
    </div>
  </div>



<div class=" bottomnav navbar navbar-expand-lg navbar-primary bg-light shadow">
  <div class="container">
    <div class="logo"><img src="../assets/img/icargologo.png" width="70" height="70">iCargo <span> Pacific </span></div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="landingpage.vue">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#services">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#partnership">Partnership</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#track">Track</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="instantque.vue">Instant Quote</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="signin.vue">Sign In</a>
        </li>
      </ul>
      <form class="d-flex">
        <button class="btn btn-outline-warning" type="submit">Book Now</button>
      </form>
    </div>
  </div>
</div>

 <!-- Masthead-->
 <header class="masthead">
            <div class="container" id="home">
                <h2 class="masthead-heading text-uppercase">We move differently.</h2>
                <h3 class="masthead-subheading ">The leading software technology integration platform <br>
                    for logistics and supply chain management
                </h3>
                <h2><a class="btn btn-round btn-primary text-uppercase" href="signin.vue">Book Now</a></h2>
            </div>

            <!-- Company-->
                <div class="py-5">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-md-3 col-sm-6 my-3">
                                <a href="#!"><img class="img-fluid img-brand d-block mx-auto" src="../assets/img/lbc.png" alt="..." aria-label="" /></a>
                            </div>
                            <div class="col-md-3 col-sm-6 my-3">
                                <a href="#!"><img class="img-fluid img-brand d-block mx-auto" src="../assets/img/sanmig.png" alt="..." aria-label="" /></a>
                            </div>
                            <div class="col-md-3 col-sm-6 my-3">
                                <a href="#!"><img class="img-fluid img-brand d-block mx-auto" src="../assets/img/fedex.png" alt="..." aria-label="" /></a>
                            </div>
                            <div class="col-md-3 col-sm-6 my-3">
                                <a href="#!"><img class="img-fluid img-brand d-block mx-auto" src="../assets/img/cebu.png" alt="..." aria-label="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
        </header>

        <!-- Services -->
        <section class="page-section" id="services">
            <div class="container">
                <div class="text-center">
                    <h3 class="section-subheading text-uppercase">Our solution for your business growth</h3>
                    <h2 class="section-heading">Thousand of merchants, millions of cargo deliveries.</h2>
                </div>
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <div class="cards-wrapper">
                        <div class="card">
                          <img src="../assets/img/QR.png" class="card-img-top" alt="...">
                          <div class="card-body">
                            <h5 class="card-title">QR Tracking and Monitoring</h5>
                            <p class="card-text">The system will implement QR codes as the main selling feature, allowing iCargo partners and
                                partner’s customers to easily make new shipments and track their packages via smartphone in
                                real-time.
                            </p>
                          </div>
                        </div>
                        <div class="card d-none d-md-block">
                          <img src="../assets/img/waybill.png" class="card-img-top" alt="...">
                          <div class="card-body">
                            <h5 class="card-title">Printing of Waybill</h5>
                            <p class="card-text">The system will generate a shipment tracking number, which the customer can use to track their package.
                                This number is also printed on the shipping label, so when a customer requests a pickup package, the courier can scan it 
                                to update the shipment status.
                            </p>
                          </div>
                        </div>
                        <div class="card d-none d-md-block">
                          <img src="../assets/img/price-quotation.png" class="card-img-top" alt="...">
                          <div class="card-body">
                            <h5 class="card-title">Pricing Quotation</h5>
                            <p class="card-text">The system provides a quotation that gives a customer an idea of the 
                                possible total price depending on the sender and recipient location provided.
                            </p>
                          </div>
                        </div>
                      </div>
                      </div>
                      <div class="carousel-item">
                        <div class="cards-wrapper">
                          <div class="card">
                            <img src="../assets/img/payment.png" class="card-img-top" alt="..." style="width: 27em; margin-left: 1em;">
                            <div class="card-body" >
                              <h5 class="card-title">Payment Integration</h5>
                              <p class="card-text">System allows customers to choose different payment<br>  methods including Cash on Delivery,
                                    Credit Card, and<br>  E-wallet. Payment using credit cards and e-wallets is<br>  integrated with the use of Paymongo API,
                                    which provides<br>  access to or control over the user's experience and integrates payments directly with the system and database.
                               </p>
                        
                            </div>
                          </div>
                          <div class="card d-none d-md-block">
                            <img src="../assets/img/freight-forwarding.png" class="card-img-top" alt="..." style="width: 27em; margin-left: 1em;">
                            <div class="card-body">
                              <h5 class="card-title">Advance Freight Forwarding</h5>
                              <p class="card-text">Freight forwarding is the strategic logistics planning and<br> execution for the international
                                transportation of commodities<br> on behalf of logistic companies. A freight forwarder will, among<br>
                                other things, negotiate freight rates, track cargos, file customs paperwork, and consolidate freight.
                              </p>
                            </div>
                        </div>
                      </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
          </div>
        </section>
        <!-- partnership-->
        <div class="vh-100" id="partnership">
            <div class="container-fluid">
              <div style="background-color:#f8f9fa" class="row">
        
                <div class="col-sm-6 px-0 d-none d-sm-block">
                    <img src="../assets/img/parcel-image.png"
                      alt="Login image" class="w-100 vh-100" style="object-fit: cover; object-position: left;">
                  </div>
        
                <div class="col-sm-6 text-black">
          
                  <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
          
                    <form style="width: 23rem;">
        
                        <div class="icons p-1 ">
                          <div class="fa-stack fa-1x d-flex position-absolute top-0 end-0 pt-3">
                           <i style= "color: #0d6efd" class="fa-sharp fa-solid fa-house"></i>  
                          </div>
                        </div>
        
          
                        <div class="heading my-3">
                            <h4>Welcome to<span style="color: #0d6efd"> iCargo</span> <span style="color:#ffc800"> Pacific</span></h4>
                            <h6 style="font-weight: 500;">Get started for free!</h6>
                            <h5 style="font-size: 15px;">Sign up as</h5>
                        </div>
        
          
                      <div class="form-outline mb-4 d-flex justify-content-center">
                        <a href="customer-signup.html" class="btn btn-link btn-primary btn-md text-light">Customer</a>
                      </div>
          
                      <div class="form-outline mb-4 d-flex justify-content-center">
                        <a href="merchant-signup.html" class="btn btn-primary">Merchant</a>
                      </div>
        
                      <div class="form-outline mb-4 d-flex justify-content-center">
                        <a href="partner-signup.html" class="btn btn-primary">Partner</a>
                      </div>
          
                      <div class="pt-1 mb-4 d-flex justify-content-center">
                        <p>Already have an account? <a href="signin.html" class="link-warning">Sign in</a></p>
                      </div>
        
        
                    </form>
          
                  </div>
          
                </div>
              </div>
            </div>
        </div>
        
        <!-- track-->
        <section class="page-section" id="track">
            <div class="container-sm">
                <div class="text-center">
                    <h3 class="track-subheading text-uppercase">Track your Parcel</h3>
                    <h2 class="track-heading">Check your parcel's delivery deatails and status.</h2>
                </div>
                <div class="mb-3">
                    <label class="form-label">Enter Tracking Number</label>
                    <input type="text" class="form-control">
                    </div>
                <div class="mb-3">
                <h2><button type="button" class="btn btn-primary btn-round">Track</button></h2>
            </div>
          </div>
        </section>

        <!-- SubFooter-->
        <footer class="subfooter py-4">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-4 text-lg-start">Contact Us <br>
                        <div class="copyright"> <span class="fas fa-map-marker-alt"></span> 1616 Celadon Park, Manila, Philippines</div>
                        <div class="copyright"> <span class="fas fa-phone"></span> (+63)912-345-6789</div>
                        <div class="copyright"> <span class="fas fa-envelope"></span> info@icargo.ph</div>
                    </div>

                    <div class="col-lg-4 text-lg-center">Learn More <br>
                        <div class="copyright"><span class="fas fa-caret-right"> </span>Home</div>
                        <div class="copyright"><span class="fas fa-caret-right"> </span>About Us</div>
                        <div class="copyright"><span class="fas fa-caret-right"> </span>Services</div>
                        <div class="copyright"><span class="fas fa-caret-right"> </span>Contact Us</div>
                    </div>
                    <!--<div class="col-lg-4 my-3 my-lg-0">
                        <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                    </div>-->
                    <div class="col-lg-4 text-lg-end">Subscribe to our Newsletter <br>
                        <div class="text-decoration-none me-3">Let's GO beyond logistics, make the world go round and
                        revolutionize boundaries.</div>
                        <br>
                        <!-- The form -->
                        <div class="input-container">
                            <input type="text" class="input-field" placeholder="Email"/>
                            <button class="input-button">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    
        <!-- Footer-->
        <footer class="footer py-4">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-4 text-lg-start">&copy; iCargo Pacific. <span class="copyright">All rights reserved.</span></div>
                </div>
            </div>
        </footer>

     
</template>

<script>
export default{
    name:'Landingpage',

}
</script>

<style>
a{
    text-decoration: none;
    color: #fff;
    justify-content: space-between;

}

span{
    color: #FFB200;
}

.container{
    margin: 0 auto;
}

.menu-item .menu-icon i{
    font-size: 18px;
    justify-content: space-between;
}

.logo{
    color: #185ADB;
    font-size: 1.8rem;
    font-weight: 700;
}

.logo img{
    margin-left: 1rem;
}

.navbar .container .nav-item{
    justify-content: space-between;
    margin-left: 1rem;
    margin-right: 1.2rem;
}

.navbar .container .nav-item .nav-link{
    font-weight: 600;
}

.navbar .container .nav-item .nav-link.active{
    color:#185ADB;
    font-style: bold;
    font-weight: 700;
}

.navbar .container .nav-item .nav-link.active:hover{
    background: #000;
    border-radius: 15px;
}

.btn{
    font-weight:600;
    color:#000;
    border-radius: .5rem;
    border: 1px solid #FFB200;
    
}

.btn:hover{
    background:#ffb200;
    color:#fff;
}

/*--Masthead--*/
header.masthead {
  padding-top: 10.5rem;
  padding-bottom: 6rem;
  text-align: left;
  color: #fff;
  background-image: url("../assets/img/header-bg.png");
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center center;
  background-size: cover;
}
header.masthead .masthead-subheading {
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 2.5rem;
  margin-bottom: 4rem;
}
header.masthead .masthead-heading {
  font-size: 1.5rem;
  line-height: 1.5rem;
  margin-bottom: 25px;
  color: #FFC005;
  font-weight: 700;
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

@media (min-width: 768px) {
  header.masthead {
    padding-top: 17rem;
    padding-bottom: 12.5rem;
  }
  header.masthead .masthead-subheading {
    font-size: 1.80rem;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 2.25rem;
    margin-bottom: 2rem;
    margin-top: -3rem;
  }
  header.masthead .masthead-heading {
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 4.5rem;
    margin-bottom: 4rem;
  }
}

/* partnership-signup style starts */

#partnership-signup .form-outline .btn{
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  width: 250px;
  border-radius: 20px;
}

#partnership-signup .pt-1 .link-warning{
  text-decoration: none;

}

#partnership-signup .pt-1 .btn{
  border: none;
}

/* style starts */

#partner-signup .form-outline .btn{
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  width: 250px;
  border-radius: 20px;
}

#partner-signup .pt-1 .link-warning{
  text-decoration: none;

}

#partner-signup.pt-1 .btn-group{
  border: none;
}

/*SERVICES PAGE*/
.carousel-inner img{
  width:500px;
  height:500px;
}

.carousel {
  margin-top: -2.8rem;
  position: relative;
 
}

.carousel.pointer-event {
  touch-action: pan-y;
}

.carousel-inner {
  position: relative;
  width: 100%;
  overflow: hidden;
}
.carousel-inner::after {
  display: block;
  clear: both;
  content: "";
}

.carousel-item {
  position: relative;
  display: none;
  float: left;
  width: 100%;
  margin-right: -100%;
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
  transition: transform 0.6s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .carousel-item {
    transition: none;
  }
}

.carousel-item.active,
.carousel-item-next,
.carousel-item-prev {
  display: block;
}

/* rtl:begin:ignore */
.carousel-item-next:not(.carousel-item-start),
.active.carousel-item-end {
  transform: translateX(100%);
}

.carousel-item-prev:not(.carousel-item-end),
.active.carousel-item-start {
  transform: translateX(-100%);
}

/* rtl:end:ignore */
.carousel-fade .carousel-item {
  opacity: 0;
  transition-property: opacity;
  transform: none;
}
.carousel-fade .carousel-item.active,
.carousel-fade .carousel-item-next.carousel-item-start,
.carousel-fade .carousel-item-prev.carousel-item-end {
  z-index: 1;
  opacity: 1;
}
.carousel-fade .active.carousel-item-start,
.carousel-fade .active.carousel-item-end {
  z-index: 0;
  opacity: 0;
  transition: opacity 0s 0.6s;
}
@media (prefers-reduced-motion: reduce) {
  .carousel-fade .active.carousel-item-start,
.carousel-fade .active.carousel-item-end {
    transition: none;
  }
}

.carousel-control-prev,
.carousel-control-next {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  padding: 0;
  color: #fff;
  text-align: center;
  background: none;
  border: 0;
  opacity: 0.5;
  transition: opacity 0.15s ease;
}
@media (prefers-reduced-motion: reduce) {
  .carousel-control-prev,
.carousel-control-next {
    transition: none;
  }
}
.carousel-control-prev:hover, .carousel-control-prev:focus,
.carousel-control-next:hover,
.carousel-control-next:focus {
  color: #fff;
  text-decoration: none;
  outline: 0;
  opacity: 0.9;
}

.carousel-control-prev {
  left: 0;
}

.carousel-control-next {
  right: 0;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 100% 100%;
}

/* rtl:options: {
  "autoRename": true,
  "stringMap":[ {
    "name"    : "prev-next",
    "search"  : "prev",
    "replace" : "next"
  } ]
} */
.carousel-control-prev-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e");
}

.carousel-control-next-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}

.carousel-indicators {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  padding: 0;
  margin-right: 15%;
  margin-bottom: 1rem;
  margin-left: 15%;
  list-style: none;
}
.carousel-indicators [data-bs-target] {
  box-sizing: content-box;
  flex: 0 1 auto;
  width: 30px;
  height: 3px;
  padding: 0;
  margin-right: 3px;
  margin-left: 3px;
  text-indent: -999px;
  cursor: pointer;
  background-color: #fff;
  background-clip: padding-box;
  border: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  opacity: 0.5;
  transition: opacity 0.6s ease;
}
@media (prefers-reduced-motion: reduce) {
  .carousel-indicators [data-bs-target] {
    transition: none;
  }
}
.carousel-indicators .active {
  opacity: 1;
}

.carousel-caption {
  position: absolute;
  right: 15%;
  bottom: 1.25rem;
  left: 15%;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  color: #fff;
  text-align: center;
}

.carousel-dark .carousel-control-prev-icon,
.carousel-dark .carousel-control-next-icon {
  filter: invert(1) grayscale(100);
}
.carousel-dark .carousel-indicators [data-bs-target] {
  background-color: #000;
}
.carousel-dark .carousel-caption {
  color: #000;
}


.cards-wrapper {
  display: flex;
  justify-content: center;
}

.card img {
  width: 100%;
  height: 150%;
}
.card {
  margin: 0 1.5em;
  box-shadow: 2px 6px 8px 0 rgba(22, 22, 26, 0.18);
  border: none;
  border-radius: 0;
}

.card {
  width: 70rem;
}

.card-body{
  max-height: 100%;
  max-width: 100%;
}
.carousel-inner {
  padding: 2em;
}
.carousel-control-prev,
.carousel-control-next {
  background-color: #FFC005;
  width: 5vh;
  height: 5vh;
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
}
@media (min-width: 768px) {
  .card img {
    height: 11em;
  }
}

/*--Page Section--*/
.page-section {
  padding: 6rem 0;
}
.page-section h3.section-subheading, .page-section .section-subheading.h3 {
  font-size: 1.4rem;  
  color: #027DB8;
  margin-top: 0;
  margin-bottom: 1rem;
}
.page-section h2.section-heading, .page-section .section-heading.h2 {
  font-size: 2.5rem;
  color: #000;
  margin-bottom: 4rem;
}
/*--TRACK PAGE--*/

.container-sm{
  background-color: whitesmoke;
  border-radius: 4rem;
  width: 40rem;
  height: 20rem;
  padding-right: var(--bs-gutter-x, 0.75rem);
  padding-left: var(--bs-gutter-x, 0.75rem);
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 11rem;
}

.container-sm .btn{
  margin-top: 1rem;
  margin-left: 18rem;
  background-color:  #027DB8;
}

.page-section h3.track-subheading{
  font-size: 1rem;  
  color: #027DB8;
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

.page-section h2.track-heading{
  font-size: 1.3rem;
  color: #000;
  margin-top: 4rem;
  margin-bottom: 2rem;
}

section#track{
  background-image: url("../assets/img/bg.png");
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center center;
  background-size: cover;
}

.form-label{
  margin-left: 5.1rem;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
}

.form-control{
  width: 30rem;
  margin-left: 4.8rem;
  font-family: Arial, Helvetica, sans-serif;
}

/*--Footer--*/

.copyright {
  color: #fff;
  text-align: left;
}

.fa-caret-right,
.fa-map-marker-alt,
.fa-phone, .fa-envelope {
  margin-right: 0.5rem;
}

.footer {
  background-color: #34264B;
  text-align: center;
  font-size: 0.9rem;
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

.subfooter {
  background-color: #34264B;
  height: 15rem;
  text-align: center;
  font-size: 0.9rem;
  margin-bottom: 0.1rem;
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

.input-container{
  width: 350px;
  height: 30px;
  background-color: #fff;
  border: 1px solid #fff;
  border-radius: 1rem;
  display: inline-block;
}
.input-container input:focus, .input-container input:active {
  outline: none;
}
.input-container input {
  width: 50%;
  height: 28px;
  border: none;
  border-radius: 1rem;
  margin-left: 1rem;
}

.input-container button {
  width: 7rem;
  height: 28px;
  float: right;
  font-weight: 700;
  color: #fff;
  background-color: #027DB8;
  border: #027DB8;
  border-radius: 1rem;
}



</style>