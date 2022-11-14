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







.container-contact2{
    width: 100%;
 padding: 10px;

   
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