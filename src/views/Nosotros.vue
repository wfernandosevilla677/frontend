<template>
  <div>
    <Menu/>
    <section>
      <h2>Bliblioteca virtual Misak</h2><hr>
      <p><strong>Slogan</strong>
      <p>Namui wan Isukun-Pensemos en lo nuestro <br>
    

      <p><strong>Promesa de valor</strong></p>
      <p>Cuando viajas con nosotros conoces la cultura <br>
       de nuestra ciudad, sus sitios turísticos y nuestra <br> 
       gente, compartiendo una aventura en cada recorrido.</p>

      <p><strong>Misión</strong></p>
      <p>Promover rutas actualizadas y detalladas de los <br>
       buses urbanos en la ciudad de Popayán,también estar <br>
       abiertos a las recomendaciones para esenciales mejoras.</p>

      <p><strong>Visión</strong></p>
      <p>Para el 2023 estaremos consolidados como la mejor <br>
       empresa de acceso a información de rutas de transporte <br> 
       público masivo en la ciudad Popayán, orientando a las <br>
        personas a ubicarse dentro de la ciudad.</p>

      <p><strong>Objetivos</strong></p>
      <p>Dar a conocer las rutas de los buses en la ciudad de Popayán. <br>
	    Incentivar el uso de los buses de servicio público en la ciudad <br>
      de Popayán a través de nuestra aplicación. Mostrar a través de <br>
       las rutas, los sitios turísticos de la ciudad de Popayán</p>

       <p><strong>logo</strong></p>
      <p>Nuestro logo es un poco de lo que representa la ciudad <br>
      de Popayán. </p><br>
      <img class="logo" src="../assets/logona.png" alt="">
    </section>
    

    <br>
    <Footer/>
  

       
  </div>

</template>

<script>
// @ is an alias to /src
import Menu from '@/components/Menu.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Nosotros',
  components: {
    Menu,
    Footer
  }
}
</script>

<style scoped>
*{
    font-family: 'Courier New', Courier, monospace;
    font-size: 1rem;
}

section{
  width: 85%;
  max-width: 850px;
  margin: 0 auto;
  margin-top: 150px;
 }
 h2 {
    margin: 0 0 20px;
    font-size: 27px;
    color: #000000;
    font-weight: bold;
    line-height: 32px;
}
 p{
   
    font-size: 14px;
    color: #555;
    line-height: 21px;
    margin: 15px 0;
 }
 strong {
    font-weight: bold;
 }
.logo{
  width: 50%;
}




</style>