<template>
<div>
    <header class="header">
        <div class="contenedor logo-contenedor">
            <span class="menu-icon">Ver menú</span>
            <img class="logo" src="../assets/logona.png" alt="">
            <nav class="nav">
                
        
             <ul>
                <li><router-link to="/Nosotros">Nosotros</router-link></li>
                <li><router-link to="/Home">Inicio</router-link></li>
                <li><router-link to="/Registrarme">Registrarse</router-link></li>
             </ul>
        
            </nav>
        </div>
    </header>
</div>
    

   
</template>

<script>
export default {
  name: 'Menu',
}
</script>
<style scoped>


.contenedor{
    width: 90%;
    margin: 0 auto;

    
}

.header{
    /* background: rgba(255, 174, 0, 0.863);
    color: black; */
    /* background: #a587bf; */
       background: linear-gradient(to top, white, 5%, #0a6672);

    color: black;
    /* padding: 0.5rem 0; */
    position:fixed;
    left: 0;
    top: 0;
    width: 100%;
}
.header a{
    color: black;
    text-decoration: none;
}
.logo-contenedor{
    display: flex;
    justify-content: space-between; 
    
    align-items: center;
}
.logo{
    height: 8vh;
    
}

.nav ul{
    margin: 0;
    padding: 0;
    list-style: none;
}
.nav ul li{
    display: inline-block;
}
.nav ul li a{
    display: block;
    padding: 0.5rem 1rem ;
    transition: all 0.4s linear ;
    border-radius: 5px;
}
.nav ul li a:hover {
    /* background: rgb(245, 221, 4); */
    background: #0cd4e2;
}

.main{
    padding: 12rem 0rem;
    /* background-color: #abd49a; */
}

h1{
    text-align: center;
}

.img1{
    
    width: 40%;
    
}
.imag01{
    display: flex;
    justify-content: center;
}
.menu-icon {
    display: none;
}
@media only screen and (max-width:767px) {
    .menu-icon {
        display: block;
        cursor: pointer;
        padding: 0.5rem 1rem;
    }
    .nav {
        width: 100%;
        margin-top: 1rem;
    }
    .nav ul {
        display: none;
    }
    .nav ul.show {
        display: block;
    }
    .nav ul li {
        display: block;
    }
    .nav ul li a {
        display: block;
        padding: 0.5rem 0;
        transition: all 0.4s linear;
        border-radius: 5px;
    }
    .nav ul li a:hover {
        background: rgb(14, 216, 216);
    }
}


</style>