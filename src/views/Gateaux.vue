<template>
  <div>
    <div class="container-cathegorie">
        <div class="cathegorie">
            <h1>NOS GATEAUX</h1>
            <div class="cathegorie-card">
                <Card v-for="(card , index) in 7" :key="index"/>
            </div>

        </div>
        <div class="article">

        </div>

    </div>
  </div>
</template>

<script>
import Card from '@/components/cardCathegorie.vue';

export default {
    name:'"Gateaux"',
    components:{
        Card
    }

}
</script>

<style scoped>
.container-cathegorie{
    border: 1px solid red;
    width: 100%;
    height: auto;
}
.cathegorie{
    max-width: var(--max-width);
    border: 1px solid blue;
    margin: 0 auto;
    height: auto;
   
}
.cathegorie .cathegorie-card {
    display: flex;
    grid-gap: 26px;
    margin: 0 auto;
    padding: 40px 0;
    width: 100%;
    border: 1px solid red;
    flex-wrap: wrap;
    justify-content: center;
}

.article{
    max-width: var(--max-width);
    border: 1px solid rgb(0, 255, 140);
    margin: 20px auto;
    height: 20vh;
   
}


</style>