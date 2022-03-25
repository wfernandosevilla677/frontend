<template>
  <div>
    <section class="menu">
    <MenuPrincipal/>
    </section>

    <section class="section"></section>
 

    <section class="footer">
    <Footer/>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import MenuPrincipal from '@/components/MenuPrincipal.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Principal',
  components: {
    MenuPrincipal,
    Footer
  }
}
</script>
<style scoped>
*{
    font-family: 'Courier New', Courier, monospace;
    font-size: 1rem;
}

.menu{
  height: 10vh;
}
.section{
  height: 80vh;
}
.footer{
  height: 10vh;
}

*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}


</style>