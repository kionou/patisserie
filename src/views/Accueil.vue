<template>
  <div>
    <Header :slides="slides" :textes="textes" :titres="titres" :height="80" />
    <Accueil/>

  </div>
 
 

</template>

<script>
import Header from '@/components/header.vue';
import Accueil from '@/components/Accueil.vue';

export default {
  components:{
    Header , Accueil
  },
  data() {
    return {
            slides:[
                "images/image1.jpg",
                "images/image2.jpg",
               
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
.header{
  background: url('@/assets/images/cate1.png') no-repeat center;
  background-size: cover;
  width: 100%;
  height: 100vh;
}


</style>