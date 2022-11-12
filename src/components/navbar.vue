<template>
  <div id="navbar">
    <div class="container-nav">
      <div class="logo">
        <router-link to="/" class="logo">
          <img src="@/assets/images/logo2.png" alt="logo">
        </router-link>

      <i class="fa fa-navicon" v-on:click="display"></i>
    </div>

    <div class="bar-items" :class="{ hide: !show }">
      <div id="menu">
        <ul class="Acc-menu">
            <li><router-link to="/" class="Acc-lien">Accueil</router-link></li>
            <li><router-link to="/gateaux" class="Acc-lien">Nos Gateaux</router-link></li>
            <li><router-link to="/apropos" class="Acc-lien">Apropos</router-link></li>
            <li><router-link to="/contacts" class="Acc-lien">Contact</router-link></li>
          </ul>
      </div>
    </div>
    </div>

  </div>

</template>

<script>
export default {
    data() {
    return { show: false }
  },
  methods: {
    display() {
      console.log("clicked")
      this.show = !this.show
    }
  }


}
</script>

<style scoped>

#navbar {
  background-color: var(--vert);
  width: 100%;
  padding: 15px 0;
}
.container-nav{
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo{
  padding-left: 15px;
}
.logo img{
    height: 55px;
    width: 55px;
    border: none;
}

#menu {
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: end;
  width: 100%;
}

 ul {
    align-items: center;
    display: flex;
    justify-content: center;
    list-style-type: none;
}
.Acc-menu a {
    color: var(--blanc); 
    padding: 7px 15px;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
}

.Acc-menu a::before{
    content: '';
    position:absolute;
    width: 100%;
    height: 2px;
    background: var(--or);
    transform: scaleX(0);
    transition: transform 0.5s ease-in-out;
    transform-origin: right;
}
.Acc-menu.active {
    background-color: var(--blanc);;
}
.Acc-menu.active a {
    color: var(--noir);
}
.Acc-nav.active .container-nav {
padding: 10px 0;
}
.Acc-lien:hover{
    color: var(--or);     
}
.fa {
  display: none;
}

@media(max-width:675px) {
  /* #navbar {
    flex-direction: column;
  } */
  .container-nav{
    flex-direction: column;
    align-items: flex-start;
  }

  .fa {
    display: block;
    padding: 0 25px;
    position: absolute;
    right: 0;
    color: #fff;
    font-size: 30px;
    cursor: pointer;
    top: 30px;

  }
  .Acc-menu{
    flex-direction: column;
    padding: 5px 0;

  }
  .Acc-menu  li {
    padding: 15px;
    width: 100%;
  }
.bar-items{
  width: 65%;
}
  .hide {
    display: none;
  }
  .nav-brand {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 0px;
    background-color: #15935a;
  }
}
</style>
