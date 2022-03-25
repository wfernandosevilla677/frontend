<template>
  <div>
    <Menu/>
   
    <iniciar-sesion/>
   
    <Footer class="footer"/>
   
  </div>

</template>

<script>
// @ is an alias to /src
import Menu from '@/components/Menu.vue'
import Footer from '@/components/Footer.vue'
import IniciarSesion from './IniciarSesion.vue'


export default {
  name: 'Home',
  components: {
    Menu,
    Footer,
    IniciarSesion

  }
} 
</script>
<style scoped>

Menu{
 height:10vh;
}
.carrusel{
 height:66vh;   
}
.footer{
 height:10vh;  
}


</style>