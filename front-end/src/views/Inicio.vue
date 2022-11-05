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
            <div class="carrouselCat">
                <div class="categorias" v-for="(categoria) in categorias" :key="categoria.id">
                    <div class="categoria" :style="{ backgroundImage: `url(${categoria.imagem})`}">
                        <div class="cat-restaurante">
                            <h3>{{ categoria.nome }}</h3>
                        </div>
                    </div>
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
  data() {
    return {
        categorias: [],
        img: []
    }
  },
  async created() {
    this.categorias = await this.getCategorias();
  },
  components: {
    NavBar
  },
  methods: {
    async getCategorias() {
        const req = await fetch('http://localhost:3000/categorias', {
            method: "GET",
        });
        return await req.json();
    }
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
.carrouselCat {
    display: flex;
}
.categorias{
    width: 240px;
    height: 145px;
    margin: 3px;
    position: relative;
    background: rgb(143, 143, 143);
    border-radius: 15px;
}
.categoria {
  border-radius: 15px;
  opacity: 0.5;
  background-repeat: no-repeat;
  background-position: 50% 0;
  background-image: url('../assets/categorias/hamburguer.webp');
  background-size: cover;
}

.cat-restaurante {
  position: relative;
  height: 145px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
}

</style>