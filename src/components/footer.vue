<template>
  <section class="contact-area" id="contact">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <div class="contact-content text-center">
                        <a href="#"><img src="@/assets/images/logo2.png" alt="logo"></a>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum </p>
                        <div class="hr"></div>
                        <h6>1120 Lorem ipsum dolor sit amet, KC 179050, Chandigarh.</h6>
                        <h6>+01 2345 6789 12<span>|</span>+01 2345 6789 12</h6>
                        <div class="contact-social">
                            <ul>
                                <li><a class="hover-target" href=""><i class="fab fa-facebook-f"></i></a></li>
                                <li><a class="hover-target" href=""><i class="fab fa-linkedin-in"></i></a></li>
                                <li><a class="hover-target" href=""><i class="fab fa-github"></i></a></li>
                                <li><a class="hover-target" href=""><i class="fab fa-behance"></i></a></li>
                                <li><a class="hover-target" href=""><i class="fab fa-pinterest-p"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- =============== 1.9 Contact Area End ====================-->
    <!-- =============== 1.9 Footer Area Start ====================-->
    <footer>
        <p>Copyright &copy; 2022 All Rights Reserved.</p>
    </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
img {
  max-width: 100%;
  height: auto;
}
section {
  padding: 60px 0;
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.contact-area {
  border-bottom: 1px solid #353c46;
}

.contact-content p {
  font-size: 15px;
  margin: 30px 0 60px;
  position: relative;
}

.contact-content p::after {
  background: #353c46;
  bottom: -30px;
  content: "";
  height: 1px;
  left: 50%;
  position: absolute;
  transform: translate(-50%);
  width: 80%;
}

.contact-content h6 {
  color: var(--blanc);
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 10px;
}

.contact-content span {
  color: var(--blanc);
  margin: 0 10px;
}

.contact-social {
  margin-top: 30px;
}

.contact-social > ul {
  display: inline-flex;
}

.contact-social ul li a {
  border: 1px solid #8b9199;
  color: #8b9199;
  display: inline-block;
  height: 40px;
  margin: 0 10px;
  padding-top: 7px;
  transition: all 0.4s ease 0s;
  width: 40px;
}

.contact-social ul li a:hover {
  border: 1px solid var(--or);
  color: var(--or);
}

.contact-content img {
  max-width: 100px;
}

section,
footer {
  background: #2D4C49;
  color: var(--blanc);
}

footer p {
  padding: 40px 0;
  text-align: center;
}

footer img {
  width: 44px;
}


</style>