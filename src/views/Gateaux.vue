<template>
  <div>
    <div class="container-cathegorie">
        <div class="cathegorie">
            <h1>NOS GATEAUX</h1>
            <div class="cathegorie-card">
                <CardCategorie :data="data" />
            </div>

        </div>
        <div class="article">
            <div class="article-card">
                <CardArticle :data="data"/>

            </div>


        </div>

    </div>
  </div>
</template>

<script>
import CardCategorie from '@/components/cardCathegorie.vue';
import CardArticle from '@/components/cardArticle.vue';

export default {
    name:'"Gateaux"',
    components:{
        CardCategorie , CardArticle
    },
    data(){
        return{
            data:''
        }
    },
    mounted(){
        const response = require('@/lib/gateau.json')
        console.log("ggggg",response);
        this.data = response
    }

    
}
</script>

<style scoped>
.container-cathegorie{
    width: 100%;
    height: auto;
}
.cathegorie{
    max-width: var(--max-width);
    margin: 0 auto;
    height: auto;
   
}
.cathegorie .cathegorie-card {
    display: flex;
    grid-gap: 26px;
    margin: 0 auto;
    padding: 40px 0;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
}

.article{
    max-width: var(--max-width);
    margin: 20px auto;
    height: auto;
   
}
.article .article-card{
    display: flex;
    grid-gap: 26px;
    margin: 0 auto;
    padding: 40px 0;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
}


</style>