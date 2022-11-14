<template>
    <Header :slides="slides" :textes="textes" :titres="titres" :height="30" />
  <div class="container">
    <div class="container-contact">
        <div class="contact">
        <h1>Contactez-nous</h1>
        <p>
            Faites-nous savoir si nous pouvons vous aider en quoi que ce soit.
             Notre entreprise est prête et heureuse de développer ses propres produits personnalisés pour vous.  
        </p>

        </div>
    </div>

    <div class="container-input">
  <div class="contact-1">
    <div class="left">
      <div class="heading">Contact Us</div>
      <div class="para">Feel free to contact us</div>
      <div class="form">
        <div class="field">
          <input type="text" name="name" id="name" required>
          <label for="name" class="label">Your Name</label>
        </div>
        <div class="field">
          <input type="email" name="email" id="email" required>
          <label for="email" class="label">Your Email</label>
        </div>
        <div class="field">
          <input type="text" name="phone" id="phone" required>
          <label for="phone" class="label">Your Mobile Number</label>
        </div>
        <div class="field">
          <textarea name="msg" id="msg" cols="30" rows="5" required></textarea>
          <label for="msg" class="label t_msg">Your Message</label>
        </div>
        <button class="btn">Submit <div></div> </button>
      </div>
    </div>
    <div class="right">
      <div class="right_heading">Contact Information</div>
      <div class="tabs">
        <div class="tab1 tab">
          <div class="email"><i class="fas fa-envelope"></i>info@kiranrajr.com</div>
        </div>
        <div class="tab2 tab">
          <div class="phone"><i class="fas fa-phone"></i>9000478900</div>
        </div>
        <div class="tab3 tab">
          <div class="location"><i class="fas fa-home"></i>Kerala, India</div>
        </div>
      </div>
     
    </div>

  </div>
    </div>
    <div class="container-contact2">
        <Contact/>
    </div>

  </div>
</template>

<script>
import Header from '@/components/header.vue'
import Contact from '@/components/contact.vue'

export default {
    components:{
        Header ,Contact
    },
    data() {
        return {
            slides:[
                "images/image1.jpg",
               
            ],
            textes: [      
               
               
                

            ],
            titres: [
              
            ]
        }
    },

}
</script>

<style scoped>
.container{
    width: 100%;
}
.container-contact{
    width: 100%;
    background-color: var(--vert);
    color: var(--blanc);
   
}
.contact{
    margin: 0 auto;
    max-width: var(--max-width);
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}


.container-input {
  max-width: var(--max-width);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
  margin: 0 auto;

}

.contact-1 {
  width: 750px;
  min-width: 750px;
  min-height: 550px;
  height: 600px;
  border-radius: 20px;
  padding: 20px;
  position: relative;
  background-color: var(--vert);
  border: 5px solid var(--blanc);
}

.right {
  height: 500px;
  width: 350px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 20px;
  padding: 20px;
  left: -100px;
  background-color: var(--blanc);
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;
  border: 5px solid var(--vert);
  color: var(--blanc);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.right_heading {
  font-size: 30px;
  letter-spacing: 2px;
  color: var(--vert);
  margin-top: 10px;
}

.left {
  position: absolute;
  right: 50px;
}

.heading {
  font: 35px sans-serif;
  letter-spacing: 2.5px;
  color: var(--blanc);
  transform: translateX(-195px);
}

.para {
  font-size: 16px;
  letter-spacing: 2px;
  margin-bottom: 30px;
  color: var(--blanc);
  transform: translateX(-190px);
}

.form {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding-right: 20px;
}

.field {
  position: relative;
}

input,
textarea {
  width: 200px;
  background-color: transparent;
  outline: none;
  border: none;
  resize: none;
  border-bottom: 2px solid var(--blanc);
  margin-bottom: 30px;
  padding-top: 30px;
}

.label {
  font-size: 16pxpx;
  color: var(--blanc);
  padding-left: 10px;
  position: absolute;
  left: -160px;
  bottom: 25px;
}

.t_msg {
  position: absolute;
  left: 0;
  bottom: 25px;
  left: -160px;
}

.btn {
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  background: var(--vert);
  border-radius: 100px;
  border: 0.5px solid rgba(255, 255, 255, 0.8);
  border-width: 0.5px 0.5px 0.5px 0.5px;
  padding: 4px 22px 5px 22px;
  color: var(--blanc);
  font-size: 16px;
  width: 120px;
  height: 40px;
}

.btn:hover {
    background-color: var(--blanc);
    color: var(--vert);
}

.tabs {
  padding: 30px 20px 0;
}

.tab {
  font-size: 18px;
  padding: 20px 30px;
  margin-bottom: 30px;
  border: 1px solid var(--blanc);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
  background-color: var(--vert);
}

.tab i {
  padding-right: 20px;

}





@media only screen and (max-width: 950px) {
  .right {
    width: 250px;
    left: -5px;
    height: calc(100% + 10px);
    border: none;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
  }

  .tabs {
    padding: 55px 0 0 0;
  }

  .tab {
    padding: 20px 10px;
    margin-bottom: 50px;
    font-size: 18px;
  }

  .tab i {
    padding-right: 10px;
    font-size: 16px;
  }
}




.container-contact2{
    width: 100%;
 border: 1px solid red;

   
}
/* .contact{
    margin: 0 auto;
    max-width: var(--max-width);
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
} */


</style>