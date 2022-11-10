<template>
  <Navbar/>
  <div class="header">

  </div>
  <div class="container-mission">
    <div class="mission">
      <h1>NOTRE MISSION</h1>
      <P>
        NOTRE OBJECTIF PRINCIPAL EST DE JOUER UNE SYMPHONIE DE SAVEURS DANS VOTRE BOUCHE. NOUS CUISINONS POUR CEUX QUI VEULENT S'OFFRIR UN DESSERT HONNÊTE ! ARRÊTEZ LE TEMPS UN INSTANT ET OFFREZ-VOUS UN MOMENT OU FAITES PLAISIR À VOS PROCHES.
      </P>
        <div class="mission-card">
          <div class="card">
            <div class="image">
              <img src="@/assets/images/2_opravdova_chut.svg" alt="">
            </div>
            <div class="card-body">
              <h3>INGRÉDIENTS DE PREMIÈRE CLASSE</h3>
              <p>
                Nous n'utilisons pas de conservateurs, d'additifs ou d'œufs de ferme en batterie. La plupart de nos ingrédients proviennent d'Europe.
              </p>
            </div>
          </div>
          <div class="card">
            <div class="image">
              <img src="@/assets/images/2_opravdova_chut.svg" alt="">
            </div>
            <div class="card-body">
              <h3>INGRÉDIENTS DE PREMIÈRE CLASSE</h3>
              <p>
                Nous n'utilisons pas de conservateurs, d'additifs ou d'œufs de ferme en batterie. La plupart de nos ingrédients proviennent d'Europe.
              </p>
            </div>
          </div>
          <div class="card">
            <div class="image">
              <img src="@/assets/images/2_opravdova_chut.svg" alt="">
            </div>
            <div class="card-body">
              <h3>INGRÉDIENTS DE PREMIÈRE CLASSE</h3>
              <p>
                Nous n'utilisons pas de conservateurs, d'additifs ou d'œufs de ferme en batterie. La plupart de nos ingrédients proviennent d'Europe.
              </p>
            </div>
          </div>

        </div>
    </div>

  </div>
  <div class="container-nouvelle">
    <div class="nouvelle">
      <h1>Nouvelle édition de gâteaux</h1>
      <P>
        NOUS SUIVONS LES TENDANCES, NOUS TROUVONS L'INSPIRATION, NOUS RECHERCHONS DES COMBINAISONS UNIQUES ET NOUS AMÉLIORONS LES RECETTES EXISTANTES POUR VOUS FAIRE DÉCOUVRIR DE NOUVELLES SAVEURS.
      </P>
      <Slike/>

    </div>

  </div>
</template>

<script>
import Navbar from '@/components/navbar.vue';
import Slike from '@/components/slike.vue';
export default {
  components:{
    Navbar , Slike
  }

}
</script>

<style scoped>
.header{
  background: url('@/assets/images/cate.jpg') no-repeat center;
  background-size: cover;
  width: 100%;
  height: 100vh;
}

.container-mission{
  max-width: 100%;
  margin: 0 auto;
  border: 1px solid red;
  height: auto;
  padding: 10px;
}
.mission{
  max-width: 1140px;
  border: 1px solid black;
  height: auto;
  margin: 0 auto;
}

.mission-card{
  border: 1px solid black;
  height: 100%;
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.mission-card .card{
  border: 1px solid red;
  height: 500px;
  max-width: 350px;
  width: 100%;
  padding: 10px;
  margin: 10px;
}
.image{
  height: 250px;
  width: 100%;
  border: 1px solid red;
}
.image img{
  width: 100%;
  height: 100%;
}


.container-nouvelle{
  max-width: 100%;
  margin: 0 auto;
  border: 1px solid red;
  height: auto;
  padding: 10px;
}

</style>