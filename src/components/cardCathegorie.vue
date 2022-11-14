<template>
  
                <div class="card" v-for="datas in data" :key="datas.id">
                    <p>{{datas.categorie}}</p>
                </div>

             

</template>

<script>
export default {
    props:["data"]

}
</script>

<style scoped>
/* caerd debut */


 .card{
    border: 1px solid var(--vert);
    width: 150px;
    padding: 20px;
    border-radius: 8px;
    color: var(--vert) ;
}
.card:hover{
    background-color: var(--vert);
    color: var(--blanc) !important;
    cursor: pointer;
}
@media (max-width:768px) {
 .card{
        padding: 10px;
        width: 100px;
    }

}

/* caerd finnnnn */

</style>