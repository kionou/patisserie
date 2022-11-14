<template>
  <div class="card" v-for="datas in data" :key="datas.id" >
    <img :src="getImage(datas.image)" alt="">
    <p class="texte">{{datas.nom}}</p>
  </div>
</template>

<script>
import { getImage } from "@/lib/getImage";
export default {
  props:["data"] ,
  data(){
    return{

    }
  },
  methods:{
    getImage:getImage
  }

}
</script>

<style scoped>
.card{
   width: 300px;
  border: 1px solid var(--or);
  border-radius: 8px;
  padding: 10px;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

}

.card:hover{
  background-color: var(--vert);
  color: var(--blanc);
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

}
.card  img{
  width: 100%;
}
.card .texte{
  margin: 15px 0;
  padding: 10px 0;
}

</style>