<template>
  <div id="navbar">
    <div class="nav-brand">
      <h2>W3hubs</h2>
      <i class="fa fa-navicon" v-on:click="display"></i>
    </div>

    <div class="bar-items" :class="{ hide: !show }">
      <div id="menu">
        <a>
          Home
        </a>
        <a>
          About
        </a>


        <a>
          Service
        </a>


        <a>
          Contact 
        </a>
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
ody {
  margin: 0;
  font-family: 'Lato', sans-serif;
}
h1{
  text-align: center;
  font-size: 36px;
  text-transform: capitalize;
}
h2 {
  padding-left: 15px;
  color: #fff;
  margin: 0;
}

#navbar {
  display: flex;
  align-items: center;
  background-color: #2D4C49;
  width: 100%;

}

#menu {
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: end;
  width: 100%;
  margin: 0;
  padding: 0;
}

.bar-items {
  width: 100%;
}

a {
  padding: 20px;
  
}

li:hover {
  background-color: #42d392;
}

a {
  text-decoration: none;
  font-size: 18px;
  color: #fff;
}

.fa {
  display: none;
}

@media(max-width:675px) {
  #navbar {
    flex-direction: column;
  }

  .fa {
    display: block;
    padding: 0 25px;
    position: absolute;
    right: 0;
    color: #fff;
    font-size: 30px;
    cursor: pointer;

  }

  #menu {
    flex-direction: column;
    padding: 5px 0;
  }

  a {
    text-align: center;
    width: 100%;
    box-sizing: border-box;
    padding: 15px;
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
