<template>
    <div class="vh-100">
        <NavBar/>
        <div class="inicio-container">
            <div class="inicio-topo">
                <h1>O que deseja a todo momento!</h1>
                <p>Peça de onde estiver. Comida? É aqui!</p>
            </div>
            <div class="pesquisa">
                <input type="text" placeholder="Busque algo">
                <button>Buscar</button>
            </div>
            <div class="categorias">
                <div class="cat restaurante">
                    <span>Restaurante</span>
                </div>
                <div class="cat farmacia">
                    <span>Restaurante</span>
                </div>
                <div class="cat Bebidas">
                    <span>Restaurante</span>
                </div>
            </div>
            <div class="carrousel">
                <p>carrosel</p>
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';

export default {
  components: {
    NavBar
  }
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    outline: none;
}
.inicio-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.pesquisa {
    margin: 60px;
}
.pesquisa input {
    border: 1px solid grey;
    border-radius: 2px;
    margin: 10px;
    height: 50px;
    padding: 10px;
    width: 550px;
}
.pesquisa button {
    width: 120px;
    height: 50px;
}
.categorias {
    display: flex;
}
.cat {
    width: 300px;
    margin: 10px;
    padding: 80px 10px;
    border-radius: 15px;
    background: red;
}
</style>