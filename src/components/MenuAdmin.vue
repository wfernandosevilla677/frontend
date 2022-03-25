<template>
    <div class="content-all">
            <header></header>
            <input type="checkbox" id="check">
            <label for="check" class="icon-menu">Menu</label>
            <h2>Administrador</h2>
            
            
            <nav class="menu">
                <ul>
                    <li>Rutas</li>
                    <li>Productos</li>
                    <li>Tutoriales</li>
                    <li>Programacion</li>
                    <li>Desarrollo Web</li>
                    <li>Cursos</li>
                    <li>Nosotros</li>
                    <li>Diseño Web</li>
                    <li>Contactos</li>
                </ul>
            </nav>
            
            <article>
                <h1>Administrador de Diseño Web</h1>
                
                <p class="parrafo1">Los cambios que se realicen en este modulo de Administrador se van a ver reflejados en el contenido de la pagina de tal modo que solo aquellos con credenciales especilaes pueden modificar dicho contenido</p>
                
                <img src="../assets/logona.png" alt="">
                
                <p class="parrafo2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia expedita unde asperiores ipsum suscipit autem tenetur similique quia aperiam, quos minima, id explicabo qui. Adipisci unde, facere temporibus sequi quasi cum quidem nihil optio, nobis sint asperiores. Sint totam, commodi.</p>
                
                <p class="parrafo2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, dolor, ut dicta est reiciendis beatae rerum corporis quia asperiores vitae.</p>
                
                <p class="parrafo2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima rem ipsam nostrum soluta ratione corporis, optio voluptates, praesentium aut quae nemo totam fugit consequatur magni. Excepturi nam, dolores est eius perspiciatis impedit! Nisi delectus sequi tempora. Suscipit molestiae deserunt qui consectetur totam, harum cupiditate iste, impedit assumenda, corporis dolores nihil.</p>
                
                <p class="parrafo2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae at delectus perferendis modi nostrum laudantium earum animi sapiente, atque amet ullam doloremque quibusdam? Harum consequatur ut voluptates tempore repudiandae non distinctio, officia neque saepe beatae reprehenderit ratione animi pariatur tenetur obcaecati. Repellendus omnis tenetur libero quasi labore vitae vel, hic eligendi esse qui non, architecto, impedit eveniet eaque voluptatem dignissimos?</p>
                
                <p class="parrafo2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum eos exercitationem sit odit ipsa sed nemo eaque odio debitis iste, veritatis ullam esse iure optio praesentium sint nihil temporibus alias.</p>
            </article>
        </div>
</template>

<script>
export default {
  name: 'MenuAdmin',
}
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}

main{
    width: 100%;
    height: auto;
    background: #34495E;
    position: absolute;
}

.content-all{
    width: 100%;
    max-width: 1000px;
    background: #17A086;
    margin: auto;
    margin-top: 80px;
    border: 2px solid white;
}

header{  
    width: 100%;
    height: 60px;
    position: fixed;
    left: 0;
    top: 0;
    background: #141d1b;   
}

#check{
    display: none;
}

#check:checked ~ .menu{
    width: 400px;
}

.menu{
    position: fixed;
    top: 60px;
    width: 0px;
    height: 100vh;
    background:  #141d1b;
    transition: all 500ms cubic-bezier(1,0,0,1);
    transition-timing-function: cubic-bezier(1,0,0,1);
    overflow: hidden;
}
.menu li{
    list-style: none;
    padding: 16px;
    color: white;
    cursor: pointer;
    transition: all 300ms;
    display: block;
    width: 400px;
}

.menu li:hover{
    background: rgba(0,0,0,0.2);
}

article{
    padding: 40px;
}

.content-all label{
    position: fixed;
    width: 100%;
    max-width: 1000px;
    top: 14px;
    font-size: 26px;
    color: white;
    cursor: pointer;
    z-index: 10;
}

.content-all h2{
    position: fixed;
    width: 100%;
    max-width: 1000px;
    top: 14px;
    font-size: 26px;
    text-align: right;
    color: white;
}

article h1{
    font-size: 30px;
    color: white;
    font-weight: 100;
    margin-top: 20px;
}

article .parrafo1{
    font-size: 20px;
    color: white;
    margin-top: 40px;
    letter-spacing: 2px;
}

article img{
    width: 100%;
    border: 4px solid white;
    margin-top: 40px;
}

article .parrafo2{
    font-size: 20px;
    color: white;
    margin-top: 40px;
    letter-spacing: 1px;
}
</style>