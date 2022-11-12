<template>
  <div>
    <div class="container-mission">
    <div class="mission">
      <h1>NOTRE MISSION</h1>
      <P>
        Notre objectif principal est de jouer une symphonie de saveurs dans votre bouche. nous cuisinons pour ceux qui veulent s'offrir un dessert honnête ! arrêtez le temps un instant et offrez-vous un moment ou faites plaisir à vos proches.
      </P>
        <div class="mission-card">
          <div class="card">
            <div class="image">
              <img src="@/assets/images/ingredient.svg" alt="">
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
              <img src="@/assets/images/person.svg" alt="">
            </div>
            <div class="card-body">
              <h3>SAVEUR AUTHENTIQUE</h3>
              <p>
                Nous cuisinons comme il se doit. En utilisant de la vraie farine, des œufs et du sucre. Et nous en sommes fiers !
              </p>
            </div>
          </div>
          <div class="card">
            <div class="image">
              <img src="@/assets/images/book.svg" alt="">
            </div>
            <div class="card-body">
              <h3>UNE RECETTE UNIQUE</h3>
              <p>
                Nos chefs pâtissiers sont des perfectionnistes absolus. Ils peaufinent constamment les recettes et inventent de nouvelles gourmandises et douceurs. Le genre que vous ne trouverez nulle part ailleurs !
              </p>
            </div>
          </div>

        </div>
    </div>

  </div>
  <div class="container-nouvelle">
    <div class="nouvelle">
      <h1>NOUVELLE ÉDITION DE GÂTEAUX</h1>
      <P>
        NOUS SUIVONS LES TENDANCES, NOUS TROUVONS L'INSPIRATION, NOUS RECHERCHONS DES COMBINAISONS UNIQUES ET NOUS AMÉLIORONS LES RECETTES EXISTANTES POUR VOUS FAIRE DÉCOUVRIR DE NOUVELLES SAVEURS.
      </P>
      <Slider/>

    </div>

  </div>
  <div class="container-localisation">
    <div class="localisation">
      <h1>OÙ ACHETER NOS PRODUITS</h1>
      <p>
        DEPUIS 10 ANS, NOUS LIVRONS NOS GÂTEAUX DE PREMIÈRE CLASSE DANS 25 PAYS DU MONDE ENTIER. VOUS LES CONNAISSEZ PEUT-ÊTRE CHEZ MCCAFÉ, STARBUCKS OU COSTA COFFEE. LA BONNE NOUVELLE EST QUE VOUS POUVEZ DÉSORMAIS EN PROFITER CHEZ VOUS. VOUS POUVEZ TROUVER DORTIE'S DANS UN NOMBRE CROISSANT DE CHAÎNES DE MAGASINS SÉLECTIONNÉES !
      </p>

    </div>

  </div>
  </div>
</template>

<script>
import Slider from '@/components/slike.vue';

export default {
    components:{
    Slider 
  }
}
</script>

<style scoped>
.container-mission{
  width: 100%;
  height: auto;
  padding: 10px;

  background-color: var(--vert);
  color: var(--blanc);
}
.mission{
  max-width: var(--max-width);
  height: auto;
  margin: 0 auto;
}

.card-body{
  padding: 10px;
}

.mission-card{
  height: 100%;
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
}
.mission-card .card{
  height: 430px;
  max-width: 350px;
  width: 100%;
  padding: 10px;
  margin: 10px;
}
.image{
  height: 200px;
  width: 100%;
}
.image img{
  width: 100%;
  height: 100%;
}

.container-nouvelle{
  width: 100%;
  height: auto;
  padding: 10px;
}

.nouvelle{
  max-width: var(--max-width);
  height: auto;
  margin: 0 auto;
  color: var(--vert);

}

.container-localisation{
  width: 100%;
  margin: 0 auto;
  height: 400px;
  padding: 10px;
  background-color: var(--vert);
  display: flex;
  justify-content: center;

}

.localisation{
  max-width: 1000px;
  height: auto;
  color: var(--blanc);
  display: flex;
flex-direction: column;
justify-content: space-evenly;
}
.localisation h1{
    margin: 0 !important;
}


</style>