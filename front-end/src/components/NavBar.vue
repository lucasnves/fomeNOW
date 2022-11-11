
<template>
  <div class="NavBar">
    <header class="container">
      <div class="navbar-esquerda">
        <div class="nome-site">
          <a href="/"><h3>fome<span>now</span></h3></a>
        </div>
        <div class="rotas">
          <ul>
            <li><a href="/">Início</a></li>
            <li><a href="/restaurantes">Restaurantes</a></li>
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
  padding: 30px 30px 13px 30px;
  font-family: 'Poppins', sans-serif;
}
.container {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  padding: 10px 15px 15px 15px;
  border-radius: 10px;
  background: #f8f6f0;
  border: 1.7px solid #dfdfdf;
  box-shadow: 4px 4px 14px -8px rgb(0, 0, 0);
}
.navbar-esquerda {
  display: flex;
  align-items: flex-end;
  gap: 22px;
}
.nome-site a {
  color: #607EAA;
}
.nome-site h3 {
  color: #1C3879;
  font-weight: 600;
}
.nome-site span {
  color: #4572b6;
  font-weight: bold;
}
.rotas a {
  color: #1C3879;
  font-weight: 600;
}

.rotas a:hover {
  color: #4572b6;
  font-weight: 600;
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