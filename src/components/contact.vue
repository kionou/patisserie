<template>
  <div class="content">
    <div class="content1">
        <div class="right">
      <h3 class="right_heading" >Contact Information</h3>
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
    <div class="content2">
        <div class="container">  
  <form id="contact" action="" method="post">
    <h3>Formulaire de contact Baby-patisserie</h3>

    <fieldset>
      <input placeholder="Nom" type="text" tabindex="1" required autofocus>
    </fieldset>
    <fieldset>
      <input placeholder=" Addresse mail" type="email" tabindex="2" required>
    </fieldset>
    <fieldset>
      <input placeholder="Numero de téléphone" type="tel" tabindex="3" required>
    </fieldset>
    <fieldset>
      <textarea placeholder="Tapez votre message ici..." tabindex="5" required></textarea>
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">
Soumettre</button>
    </fieldset>
  </form>
</div>
    </div>


  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.content{
    max-width: var(--max-width);
    margin: 0 auto;
  
    /* border: 1px solid blue; */
    display: flex;
    justify-content: space-around;
}
.content1{
    width: 500px;
    /* border: 1px solid red; */
    display: flex;
    justify-content: center;
    align-items: center;
    /* background: url('@/assets/images/image1.jpg') no-repeat center; */
    background-size: cover;
    height: 100%;
    margin: 0 10px;
}

.content2{
    width: 500px;
    /* border: 1px solid red; */
    display: flex;
    justify-content: center;
    align-items: center;

}

.container {
  width: 100%;
}

#contact input[type="text"],
#contact input[type="email"],
#contact input[type="tel"],
#contact input[type="url"],
#contact textarea,
#contact button[type="submit"] {
  font: 400 12px/16px "Roboto", Helvetica, Arial, sans-serif;
}

#contact {
  background: #F9F9F9;
  padding: 25px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}

#contact h3 {
  display: block;
  font-size: 30px;
  font-weight: 300;
  margin-bottom: 10px;
}

#contact h4 {
  margin: 5px 0 15px;
  display: block;

  font-weight: 400;
}

fieldset {
  border: medium none !important;
  margin: 0 0 10px;
  min-width: 100%;
  padding: 0;
  width: 100%;
}

#contact input[type="text"],
#contact input[type="email"],
#contact input[type="tel"],
#contact textarea {
  width: 100%;
  border: 1px solid #ccc;
  background: var(--blanc);
  margin: 0 0 5px;
  padding: 10px;
}

#contact input[type="text"]:hover,
#contact input[type="email"]:hover,
#contact input[type="tel"]:hover,
#contact textarea:hover {
  -webkit-transition: border-color 0.3s ease-in-out;
  -moz-transition: border-color 0.3s ease-in-out;
  transition: border-color 0.3s ease-in-out;
  border: 1px solid #aaa;
}

#contact textarea {
  height: 100px;
  max-width: 100%;
  resize: none;
}

#contact button[type="submit"] {
  cursor: pointer;
  width: 100%;
  border: none;
  background: var(--vert);
  color: var(--blanc);
  margin: 0 0 5px;
  padding: 10px;
  font-size: 15px;
}

#contact button[type="submit"]:hover {
 background-color: var(--blanc);
 color: var(--vert);
 border: 1px solid var(--vert);
}

#contact button[type="submit"]:active {
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
}


#contact input:focus,
#contact textarea:focus {
  outline: 0;
  border: 1px solid #aaa;
}

::-webkit-input-placeholder {
  color: #888;
}

:-moz-placeholder {
  color: #888;
}

::-moz-placeholder {
  color: #888;
}

:-ms-input-placeholder {
  color: #888;
}

.right {
  /* height: 350px;
  width: 350px; */
  padding: 20px;
  background-color: var(--blanc);
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
 
  /* border: 5px solid var(--vert); */
  color: var(--blanc);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
}

.right_heading {
  display: block;
    font-size: 30px;
    font-weight: 300;
    margin-bottom: 10px;
    color: black;
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
  /* .right {
    width: 250px;
    left: -5px;
    height: calc(100% + 10px);
    border: none;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
  } */
/* 
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
  } */
}


@media only screen and (max-width: 768px) {
  .content{
    flex-direction: column-reverse;
  }
  .content1 , .content2{
    width: 100%;
    padding: 10px 0;
  }

}



</style>