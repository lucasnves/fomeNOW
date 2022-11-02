
<template>
  <div class="NavBar">
    <header class="container">
      <div class="navbar-esquerda">
        <div class="nome-site">
          <a href="/"><h3>fome<span>Now</span></h3></a>
        </div>
        <div class="rotas">
          <ul>
            <li><a href="/">Início</a></li>
            <li><a href="/">Restaurantes</a></li>
            <li><a href="/">Cupons</a></li>
          </ul>
        </div>
      </div>
      <div class="navbar-direita">
        <div>pesquisas</div>
        <div> entrar</div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;
}

.NavBar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 30px 30px 13px 30px;
}
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: rgb(226, 226, 226);
  padding: 15px;
  border-radius: 10px;
  border: 1.7px solid grey;
  box-shadow: 4px 4px 14px -8px rgb(0, 0, 0);
}
.navbar-esquerda {
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 480px;
}
.nome-site h3 {
  font-weight: bold;
  color: rgb(15, 54, 112);
}
.nome-site span {
  font-weight: bold;
  color: rgb(243, 243, 3);
}
.rotas li {
  display: inline-block;
  padding: 0px 20px;
}
.navbar-direita {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 300px;
}



</style>