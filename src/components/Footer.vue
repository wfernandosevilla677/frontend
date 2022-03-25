<template>
    <div class="footer">
      <nav class="nav">
        
                <ul>
                    <li><router-link to="/Face"><img class="logo" src="../assets/img1.png" alt="Facebul"></router-link></li> 
                </ul>
                <ul>
                   <li><router-link to="/"><img class="logo" src="../assets/img2.png" alt="wathsapp"></router-link></li>
                </ul>
                <ul>
                  <li><router-link to="/"><img class="logo" src="../assets/img3.png" alt="Twtiter"></router-link></li>
                  </ul>
                  <ul>
                    <li><router-link to="/"><img class="logo" src="../assets/img4.png" alt="Twtiter"></router-link></li>
                  </ul>
                
                 <h3>@Copyrigth</h3>
            
            </nav>
          
    </div>
</template>
<script>
export default {
  name: 'Footer',
}
</script>
<style scoped>
*{
    font-family: 'Courier New', Courier, monospace;
    font-size: 1rem;
}
.footer{
    background: #0a6672;
    bottom: 0;
    text-align: center;
    /* position: fixed; */
    width: 100%;
    margin-top: 2%;
    
}
.nav ul li{
  list-style: none;

}
.nav{
  
  align-items: center;
  justify-content: space-around;
  
}

</style>
</style>