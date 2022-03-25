<template>
  <div>
    <Menu/>

    <section class="section">
    <img class="img" src="../assets/niño.jpeg" alt="">

    <section class="formulario">
      <h3>FORMULARIO DE REGISTRO</h3>
      <input  class="controles" type="text" name="nombres" id="nombres" placeholder="Ingrese su Nombre" >
      <input class="controles" type="text" name="apellidos" id="apellidos" placeholder="Ingrese sus Apellidos" >
      <input class="controles" type="text" name="nombre_de_usuario" id="apellidos" placeholder="Ingrese su nombre de ususario" >
      <input class="controles" type="text" name="registro_misac" id="apellidos" placeholder="Ingrese su registro misac" >
      <input class="controles" type="email" name="correo" id="correo" placeholder="Ingrese su Correo" >
      <input class="controles" type="email" name="correoc" id="correoc" placeholder="Confirme su Correo" >
      <input class="controles" type="password" name="contrasena" id="contrasena" placeholder="Ingrese su Contraseña" >
      <input class="controles" type="password" name="contrasenac" id="contrasenac" placeholder="Confirm su Contraseña" >
      <p>Estoy de acuerdo con <a href="#">terminos y condiciones</a></p>
    
    <router-link  to="/Principal">  <input class="buton" type="submit" value="Registrar"></router-link>
      <p><router-link to="/IniciarSesion">Ya tengo cuenta</router-link></p>
    </section>
    </section>
    <Footer/>
  </div>

</template>

<script>
// @ is an alias to /src
import Menu from '@/components/Menu.vue'
import Footer from '../components/Footer.vue'
export default {
  name: 'Registrarme',
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
.img{
    margin-top: 12vh;
    height:77vh;
    margin-left:9vh;
}
Menu{
 height:10vh;
}
.section{
 display: flex;
}
Footer{
 height:10vh;  
}
h3{
  text-align: center;
}
.formulario{
  width: 30%;
  background: grey;
  padding: 30px;
  margin: auto;
  margin-top: 12vh;
  margin-right: 8vh;
  border-radius: 4px;
  color: white;
  
}
.formulario{
  font-size: 22px;
  margin-bottom: 20px;
}
.controles{
  width: 100%;
  background:white;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 16px;
  border: 1px;
}
.formulario p{
  height: 40px;
  text-align: center;
  font-size: 18px;
}
.formulario a{
  color: white;
  text-decoration: none;
}
.formulario a:hover{
  color: white;
  text-decoration: underline;
}
.formulario .buton{
  width: 100%;
  background: #0a6672;
  border: none;
  padding: 12px;
  color: white;
  margin: 16px 0;
  font-size: 16px;
}
</style>